import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiMysql,
  SiOverleaf
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 style={{ paddingBottom: "20px" }} data-aos="fade-right">
        My <span className="primary-header">Tools</span>
      </h1>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiLinux size={40} />
        <p className="fint-sizze 20pc">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVisualstudiocode size={40} />
        <p className="fint-sizze 20pc">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostman size={40} />
        <p className="fint-sizze 20pc">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVercel size={40} />
        <p className="fint-sizze 20pc">Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiGithub size={40} />
        <p className="fint-sizze 20pc">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMysql size={40} />
        <p className="fint-sizze 20pc">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiOverleaf size={40} />
        <p className="fint-sizze 20pc">Overleaf</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
