import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">Who</span> I'M
            </h1>
            <div data-aos="fade-up">
              <AboutCard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
