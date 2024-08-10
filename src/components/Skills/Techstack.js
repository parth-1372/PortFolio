import React from "react";
import { Col, Row } from "react-bootstrap";
import "./skills.css";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 size={50} />
        <p className="tech-item-text">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTailwindcss size={50} />
        <p className="tech-item-text">Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiNodejs size={50} />
        <p className="tech-item-text">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiReact size={50} />
        <p className="tech-item-text">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiMongodb size={50} />
        <p className="tech-item-text">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiNextdotjs size={50} />
        <p className="tech-item-text">Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiGit size={50} />
        <p className="tech-item-text">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiExpress size={50} />
        <p className="tech-item-text">Express</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiRedux size={50} />
        <p className="tech-item-text">Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMui size={50} />
        <p className="tech-item-text">Material-UI</p>
      </Col>
    </Row>
  );
}

export default Techstack;
