import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

// Images for the projects
import BlogSphere from "../../Assets/Projects/BlogSphere.png";
import PowerBuy from "../../Assets/Projects/PowerBuy.png"; 
import Quizz from "../../Assets/Projects/Quizz.png"; 
import ZodiacColor from "../../Assets/Projects/ZodiacColor.png";  // Add the image path for the new project
import ToDoList from "../../Assets/Projects/ToDoList.png";  // Add the image path for the new project

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works</strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={BlogSphere}
              title="BlogSphere"
              description="A blogging website built with Node.js, EJS, and MongoDB. It allows users to create blogs, comment, and authenticate securely."
              ghLink="https://github.com/parth-1372/BlogSphere"
              demoLink="http://blogsphere-env-2.eba-3csmpqj8.ap-south-1.elasticbeanstalk.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PowerBuy}
              title="PowerBuy"
              description="An e-commerce platform built with JavaScript and Tailwind CSS, featuring a dynamic shopping cart and responsive design."
              ghLink="https://github.com/parth-1372/E-Commerce"
              demoLink="https://e-commerce-seven-rose-24.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Quizz}
              title="Quizz"
              description="A quiz website built with JavaScript and Tailwind CSS, featuring customizable quizzes and dynamic API integration."
              ghLink="https://quizyyparth.netlify.app/"
              demoLink="https://quizyyparth.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ZodiacColor}
              title="Get Lucky Zodiac Color"
              description="A fun project that generates a random color after selecting your zodiac sign."
              ghLink="https://github.com/parth-1372/Javascript/tree/master/zodic%20color"
              demoLink="https://getluckycolour.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ToDoList}
              title="To-Do List"
              description="A simple to-do list application where you can add tasks, delete todos, and keep track of your daily tasks."
              ghLink="https://github.com/parth-1372/Javascript/tree/master/ToDo%20List"
              demoLink="https://todoapp-nine-vert.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
