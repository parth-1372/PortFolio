import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
            Designed and Developed by{" "}
            <i className="primary-header">Parth Mungra</i>
          </span>
        </Col>
        <Col md="4" className="footer-body">
        <ul className="home-about-social-links" data-aos="fade-up">
          <li className="social-icons">
            <a
              href="https://github.com/parth-1372"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:parthmungra1372@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              aria-label="email"
            >
              <AiOutlineMail />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/parth-mungra"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/parth_patel137/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              aria-label="instagram"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
