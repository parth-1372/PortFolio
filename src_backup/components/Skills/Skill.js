import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Techstack from "./Techstack";
import Github from "./Github";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { ThemeContext } from "../../Context/theme"; // Adjust the path as necessary

// Images for the competitive programming journey
import LeetCodeImage from "../../Assets/leetcode.png";
import CodeforcesImage from "../../Assets/codeforces.png";

function Skills() {
  const [{ themename }] = useContext(ThemeContext); // Access theme context directly
  const isDarkMode = themename === "dark";

  return (
    <Container fluid className="skills-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "3em", paddingBottom: "20px", textAlign: "center" }} data-aos="fade-right">
              <span className="primary-header">My</span> Skills
            </h1>
            
            <h2 style={{ fontSize: "2.5em", paddingBottom: "20px", textAlign: "center" }} data-aos="fade-right">
              Competitive Programming Journey
            </h2>
            <Row style={{ justifyContent: "center" }}>
              <Col md={6} lg={4}>
                <Card className={`text-center ${isDarkMode ? 'dark-mode-card leetcode' : 'light-mode-card'}`}>
                  <Card.Img variant="top" src={LeetCodeImage} alt="LeetCode" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                  <Card.Body>
                    <Card.Title>LeetCode</Card.Title>
                    <Card.Text>
                      Explore my LeetCode profile where I tackle challenging problems and improve my problem-solving skills.
                    </Card.Text>
                    <a
                      href="https://leetcode.com/u/parth_1372/"
                      target="_blank"
                      rel="noreferrer"
                      className={`btn ${isDarkMode ? 'btn-light' : 'btn-primary'}`}
                    >
                      View Profile
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={4}>
                <Card className={`text-center ${isDarkMode ? 'dark-mode-card codeforces' : 'light-mode-card'}`}>
                  <Card.Img variant="top" src={CodeforcesImage} alt="Codeforces" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                  <Card.Body>
                    <Card.Title>Codeforces</Card.Title>
                    <Card.Text>
                      Check out my Codeforces profile for a glimpse into my competitive programming journey and contest performances.
                    </Card.Text>
                    <a
                      href="https://codeforces.com/profile/parthmungra1372"
                      target="_blank"
                      rel="noreferrer"
                      className={`btn ${isDarkMode ? 'btn-light' : 'btn-primary'}`}
                    >
                      View Profile
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <h2 style={{ fontSize: "2.5em", paddingTop: "40px", paddingBottom: "20px", textAlign: "center" }} data-aos="fade-right">
              Development Skills
            </h2>
            <div data-aos="fade-up">
              <Techstack />
              <Github />
              <Toolstack />
            </div>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Skills;
