# PrioMon (EdgeWatch) Interview Context

## 1. Executive Summary
- **What problem does the project solve?** Centralized monitoring systems (like traditional Prometheus setups) face bandwidth bottlenecks and act as a Single Point of Failure (SPOF) when scaling to thousands of edge nodes. PrioMon solves this by decentralizing metric aggregation using a custom Gossip Protocol that shares system state peer-to-peer.
- **Who is the target user?** DevOps engineers, cluster administrators, and distributed system architects running highly resilient edge computing environments.
- **Why was it built?** To dramatically reduce the network bandwidth overhead of system monitoring (by up to 100x) while ensuring that critical state changes propagate instantly, using an intelligent Value-of-Information (VoI) filtering engine.
- **What makes it different from existing solutions?** 
  - **Decentralized:** No central metric server is required for nodes to know the cluster's state.
  - **VoI Filtering:** Priority tiers (HIGH/MEDIUM/LOW) drop redundant, low-change metrics at the edge.
  - **Chaos Engine:** Built-in UI to trigger soft-kills on live nodes, visually verifying the network's 3-strike failure detection in real time.
  - **React RAF-Batching:** High-frequency WebSockets are throttled via `requestAnimationFrame` to prevent UI layout thrashing.

## 2. Project Story
- **Origin of the idea & Motivation:** Monitoring large-scale edge networks consumes massive amounts of outbound bandwidth just to report "everything is normal." The motivation was to build a system that only transmits *valuable* data (when metrics deviate significantly).
- **Real-world problem being solved:** Cloud egress costs and bandwidth saturation caused by high-frequency telemetry data streams.
- **Alternative approaches considered:** 
  - *Centralized Polling (Prometheus):* Rejected because it creates a network bottleneck at the master server.
  - *Full-Mesh Network:* Rejected because O(N²) connection scaling collapses under high node counts.
  - *Redis Pub/Sub:* Rejected because Redis acts as a SPOF for the monitoring data.
- **Why the final architecture was chosen:** A bounded Gossip Protocol (fan-out of `k` random peers) provides O(log N) convergence without a central leader. Decoupling the Python cluster orchestrator from the Node.js API Gateway leverages the best of both ecosystems (Python for Docker/analytics, Node.js for WebSockets).

## 3. High-Level Architecture
- **Complete Architecture Diagram:**
```text
[ React Frontend (Vite) ] <======= WebSocket =======> [ API Gateway (Node.js/Express) ]
   (Live Topology Graph)     (RAF-Batched Stream)               (Port 5000)
                                                                    |
                                                                    v (HTTP POST /api/start)
                                                    [ Orchestrator (Python Flask) ] <---> [ SQLite WAL DB ]
                                                    (monitoring.py / Port 4000)
                                                                    |
                                        +---------------------------+---------------------------+
                                        |                           |                           |
                            [ Docker Container ] <========> [ Docker Container ] <========> [ Docker Container ]
                            (Flask, Gossip Engine)          (Flask, Gossip Engine)          (Flask, Gossip Engine)
```
- **Responsibility Breakdown:**
  - **Frontend (React):** Renders the real-time force-directed topology graph and chaos controls.
  - **API Gateway (Node.js):** Bridges the frontend and orchestrator, broadcasting high-frequency live metrics via Socket.io.
  - **Orchestrator (Python):** Bootstraps Docker containers, writes metrics to SQLite via a dedicated queue thread, and tracks cluster convergence.
  - **Node Cluster (Docker/Python):** Executes the gossip fan-out, evaluates the VoI threshold, and detects peer failures via leaderless quorum.
- **Key Flows (Step-by-Step):**
  - **Core Business Pipeline Flow (Gossip Convergence):**
    1. Node collects internal metrics (CPU, Mem).
    2. Node filters metrics against `METRIC_DELTAS` (VoI Engine). If the change < threshold, it drops it.
    3. Node picks `k` random peers and sends a POST request with its data snapshot.
    4. Peer compares vector clocks (`counter`). If the incoming data is newer, it merges it into its state.
    5. Peer POSTs a sync notification (`/receive_node_data`) back to the Orchestrator.
    6. Orchestrator checks if all alive nodes have identical snapshots (Convergence).
  - **Chaos Engine Flow:**
    1. User clicks a node on the UI to kill it.
    2. Node.js API hits `POST /terminate` directly on the container's internal IP.
    3. The container instantly marks `is_alive = False` and drops incoming connections.
    4. Peer nodes increment `hbState["failureCount"]`. Once it hits 3 strikes, the node is evicted from the cluster graph.

## 4. Complete Tech Stack
- **Frontend:** React 18, Vite, Tailwind CSS, `react-force-graph-2d`.
  - *Why:* Unmatched ecosystem for complex interactive data visualization.
- **API Gateway / WebSockets:** Node.js, Express, Socket.IO.
  - *Why:* Node's event loop handles thousands of concurrent WebSocket connections drastically better than WSGI Python servers.
- **Orchestrator & Nodes:** Python 3.9+, Flask, `docker-py`.
  - *Why:* Python is excellent for data analysis, charting (joblib/matplotlib), and interacting programmatically with the Docker daemon.
- **Database:** SQLite in WAL (Write-Ahead Logging) Mode.
  - *Why:* Zero configuration, flat-file DB. WAL mode allows concurrent reads during heavy simulation writes, preventing `database is locked` errors.
- **Infrastructure:** Docker & Docker Compose.
  - *Why:* Allows the exact simulation of an isolated internal bridge network (`test`) to validate gossip behavior locally.

## 5. Feature Breakdown
- **Value-of-Information (VoI) Filtering:**
  - *What it does:* Suppresses network spam by only sending metrics if they matter.
  - *Internals:* Every metric has a priority. The script checks `abs(new_value - old_value) > METRIC_DELTAS[priority]`. If false, the data is withheld, drastically lowering the `bytes_of_data` sent per round.
- **Custom Gossip Protocol:**
  - *What it does:* Ensures every node learns the state of every other node quickly.
  - *Internals:* Nodes use a pull-push anti-entropy algorithm. They exchange metadata (node versions) first, compare, and only request/send the exact missing delta payloads.
- **Chaos Engine (Fault Injection):**
  - *What it does:* Allows users to assassinate nodes to test network resilience.
  - *Internals:* Sends a soft-kill signal. Handles the edge case of orchestrator convergence by immediately lowering the cluster's expected survivor count (`run.manually_killed_count`), allowing the orchestrator to declare convergence without deadlocking.

## 6. Database Design
- **Entity Schema:**
  - `unique_entries (id, key, value)`: Normalizes metric JSON strings to save disk space.
  - `data_entries (id, node, round, key, unique_entry_id)`: Links a specific node's round to the normalized JSON data.
  - `round_metrics_stats (run_id, node_ip, round, metrics_sent, metrics_filtered)`: Analytics table tracking VoI bandwidth savings.
- **Design Safeguards:** 
  - To handle the massive write-throughput of 50+ nodes gossiping multiple times a second, the SQLite database is strictly interacted with via a **Dedicated Writer Thread** draining a thread-safe `queue.Queue()`. 
  - Transactions are batched (`batch_size = 50`) to amortize the costly filesystem `fsync()` operations.

## 7. Authentication Deep Dive
- *Note:* PrioMon is designed as an internal cluster-monitoring mesh residing entirely within an isolated Docker bridge network/VPC. It intentionally omits layer-7 authentication in favor of strict network-layer isolation. The API Gateway serves as the only external ingress point.

## 8. Core Business/Processing Pipeline
- **The Metric Ingestion Trace:**
  1. `priomon.py` collects local OS metrics.
  2. The VoI engine tags `metric_sent_flags`.
  3. The Gossip thread selects `k` random targets from `Node.instance().node_list`.
  4. Node POSTs to peer's `/receive_metadata`.
  5. Peer replies with missing keys. Node POSTs the actual payloads.
  6. Peer updates local memory state, increments vector clock.
  7. Peer async POSTs to Orchestrator's `/receive_node_data`.
  8. Orchestrator places an `INSERT` tuple into the `experiment.query_queue`.
  9. Orchestrator async POSTs to Node.js `/api/live-metrics`.
  10. Node.js emits `new_metric` over WebSockets.
  11. React receives WebSocket, buffers it in a `useRef`, and flushes to state on the next `requestAnimationFrame`.

## 9. Version Control / Storage Model
- **State History:** Nodes do not persist their historical states locally; they only hold the *latest* known snapshot of the network in memory. Historical tracking is completely delegated to the Orchestrator's SQLite database to prevent edge nodes from running out of storage capacity.

## 10. Infrastructure & Deployment
- **Hosting:** Runs on bare-metal or local machines using Docker daemon.
- **Deployment Strategy:** `monitoring.py` uses the Python `docker` SDK (`docker.client.from_env()`) to dynamically spin up N instances of the `priomonv1` container image at runtime, assigning them random available host ports via a custom socket-binding trick.
- **Network:** All containers are attached to a custom docker bridge network named `test`, allowing them to communicate via internal Docker IPs.

## 11. Major Problems Faced During Development
1. **Database Lock Contention (SQLite Threading):**
   - *Symptoms:* `sqlite3.OperationalError: database is locked` crashing the Orchestrator during high node-count simulations.
   - *Root Cause:* 50 containers hitting the Orchestrator simultaneously caused massive concurrent write attempts. Standard SQLite locks the entire DB file on write.
   - *Final Fix:* Enabled SQLite WAL (Write-Ahead Logging) mode, implemented a thread-safe `queue.Queue()`, and routed all writes through a single background worker thread (`execute_queries_from_queue()`) that batches 50 queries per commit.
2. **React Force-Graph Layout Thrashing:**
   - *Symptoms:* The dashboard UI completely froze when the cluster size exceeded 20 nodes.
   - *Root Cause:* Socket.io was pushing 100+ state updates per second to React, triggering immediate, synchronous re-renders of an expensive WebGL Canvas component.
   - *Final Fix:* Implemented an RAF (Request Animation Frame) batching hook. Socket events write to a mutable `useRef`, and a browser animation loop flushes that ref to React `useState` at a maximum of 60fps.
3. **Deadlock on Convergence after Chaos Injection:**
   - *Symptoms:* If a node was manually killed, the Orchestrator would never declare the run "converged."
   - *Root Cause:* The Orchestrator was waiting for the dead node's data to sync across the network, which would never happen.
   - *Final Fix:* Created the `/notify_node_killed` route. When the Node.js proxy kills a container, it notifies the Orchestrator, which immediately decrements the expected node count (`expected_count = run.node_count - run.manually_killed_count`).

## 12. Security Considerations
- **Denial of Service (DoS) via Gossip Storm:** The bounded fan-out (`gossip_rate = 3`) mathematically prevents broadcast storms that could crash the network.
- **Thread Starvation:** Used `Parallel(n_jobs=-1, prefer="threads")` and concurrent Futures to ensure the Orchestrator doesn't block while waiting for Docker containers to spin up or respond.

## 13. Performance Considerations
- **VoI Bandwidth Savings:** The core achievement is reducing gossip traffic. If CPU usage changes from 45.1% to 45.2%, it is filtered out. This yields massive bandwidth compression.
- **Batch Processing:** Grouping 50 SQLite inserts into a single transaction cuts filesystem `fsync` overhead by 98%.

## 14. Design Decisions
1. **Decoupling Node.js API from Python Orchestrator:**
   - *Decision:* Build the WebSocket server in Node.js instead of Python Flask.
   - *Why:* Flask/Gunicorn struggles heavily with persistent WebSocket connections (often requiring Gevent/Eventlet hacks). Node.js is natively asynchronous and handles Socket.io effortlessly, leaving Python to do what it does best: data crunching and Docker orchestration.
2. **Leaderless Quorum (3-Strike Rule):**
   - *Decision:* A node is only considered "dead" if 3 consecutive pings fail (`hbState["failureCount"] >= 3`).
   - *Why:* Prevents split-brain scenarios and false positives caused by temporary network latency spikes.
3. **Pull-Push Gossip Protocol:**
   - *Decision:* Exchange metadata first before sending payloads.
   - *Why:* Sending the full JSON state matrix on every tick would negate the VoI bandwidth savings. Exchanging lightweight counters first ensures payloads are only sent if an update actually occurred.

## 15. Resume Talking Points

### 30-Second Elevator Pitch
"I built PrioMon, a priority-based distributed monitoring system. Traditional setups like Prometheus bottleneck at a central server. I engineered a decentralized Gossip Protocol using a Value-of-Information filter that drops redundant data at the edge. This allowed the cluster to achieve consensus on system health while reducing network bandwidth consumption by up to 100x."

### 1-Minute Explanation
"PrioMon is a containerized monitoring mesh. To test it, I wrote a Python Orchestrator that dynamically boots up to 50 Docker containers and wires them into a bridge network. Each node runs a Flask agent that collects OS metrics, filters them through a Value-of-Information threshold, and gossips the payload to 3 random peers. I ran into severe SQLite database locking issues due to the high concurrency of nodes reporting back. I resolved it by implementing Write-Ahead Logging and a dedicated background writer thread with batching. The result is a highly resilient network that survives node failures gracefully."

### 2-Minute Explanation
"The architecture is split into three layers: a React frontend, a Node.js API Gateway, and a Python Orchestrator managing a Docker swarm. The nodes use a pull-push anti-entropy gossip protocol to synchronize state. 
One of the hardest challenges was the frontend. The network was generating over a hundred state changes per second. Piping that directly into React state crashed the browser due to layout thrashing on the force-directed graph. I fixed this by decoupling the Socket.io listeners from React's render cycle using a `requestAnimationFrame` loop to batch updates at 60fps.
I also built a Chaos Engine into the dashboard. You can click any node to kill it. The API hits a termination endpoint, and you can visually watch the rest of the network invoke a 3-strike leaderless quorum to detect the failure, sever the connection, and heal the topology around it without dropping the overall cluster consensus."
