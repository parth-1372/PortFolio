import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Type from "./Type";
import "./home.css";
import resumeFile from "../../Assets/Parth_Resume.pdf"; // Adjust the path to your resume file

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Parth Mungra</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>

              {/* Resume Download Button */}
              <Button 
                variant="primary" 
                href={resumeFile} 
                download 
                className="resume-btn"
                style={{ marginTop: "20px" }}
              >
                Download My Resume
              </Button>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeIcon}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <ScrollToTop />
    </section>
  );
}

export default Home;
