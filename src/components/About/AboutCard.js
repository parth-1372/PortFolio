import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiOutlineMail, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { ThemeContext } from "../../Context/theme"; // Adjust the path as necessary

import abviiitm from '../../Assets/abviiitm.jpeg';
import jnv from '../../Assets/jnv.jpeg';

function AboutCard() {
  const [{ themename }] = useContext(ThemeContext); // Access theme context directly
  const isDarkMode = themename === "dark";

  return (
    <>
      <Card className={`quote-card-view ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Card.Body>
          <blockquote className={`blockquote mb-0 ${isDarkMode ? 'text-light' : 'text-dark'}`} data-aos="zoom-in">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="primary-header">Parthkumar Mungra</span> from Gwalior, India. I am currently studying Information Technology at ABV-IIITM Gwalior and am a passionate programmer. I am currently looking for internships in frontend, backend, and fullstack development roles to enhance my skills and gain practical experience.
            </p>
            <ul className={`about-bullets ${isDarkMode ? 'text-light' : 'text-dark'}`} data-aos="fade-up">
              <li>Experienced in competitive programming on <a href="https://leetcode.com/u/parth_1372/" target="_blank" rel="noreferrer">LeetCode</a> and <a href="https://codeforces.com/profile/parthmungra1372" target="_blank" rel="noreferrer">Codeforces</a>.</li>
              <li>Passionate about mathematics, history, and technology.</li>
              <li>Seeking opportunities to grow and contribute to innovative projects.</li>
              <li>Enthusiastic about learning new technologies and improving my skills.</li>
              <li>Committed to delivering quality work and exceeding expectations.</li>
            </ul>
          </blockquote>
        </Card.Body>
      </Card>

      <div className="social-links" style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
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
      </div>

      <div className="education-cards">
        <Card className={`quote-card-view ${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Img variant="top" src={abviiitm} alt="ABV-IIITM Gwalior" style={{ maxHeight: "150px", objectFit: "contain" }} />
            <Card.Title className={isDarkMode ? 'text-light' : 'text-dark'}>ABV-IIITM Gwalior</Card.Title>
            <Card.Subtitle className={`mb-2 ${isDarkMode ? 'text-light' : 'text-muted'}`}>B.Tech in Information Technology</Card.Subtitle>
            <Card.Text className={isDarkMode ? 'text-light' : 'text-dark'}>Currently in 3rd year with a CGPA of 9.10</Card.Text>
          </Card.Body>
        </Card>

        <Card className={`quote-card-view ${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Img variant="top" src={jnv} alt="JNV Jamnagar" style={{ maxHeight: "150px", objectFit: "contain" }} />
            <Card.Title className={isDarkMode ? 'text-light' : 'text-dark'}>Class 12 - JNV Jamnagar</Card.Title>
            <Card.Subtitle className={`mb-2 ${isDarkMode ? 'text-light' : 'text-muted'}`}>Science Stream</Card.Subtitle>
            <Card.Text className={isDarkMode ? 'text-light' : 'text-dark'}>Achieved 91% in Class 12</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default AboutCard;
