import { Container, Row, Col } from "react-bootstrap";
import DummyImage from "/images/Sugar-Cream.webp";
import projects from "../json/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section className="lyt-section typ-project-section" id="section-project">
      <Container>
        <div className="wrapper border-top-1">
          <h2 className="bs-heading typ-18 typ-300 text-uppercase mb-50">
            FEATURED PROJECTS
          </h2>
          <Row className="g-5">
            {projects.map((project) => {
              return (
                <Col lg={4} md={6} key={project.id}>
                  <ProjectCard projectImage={project.projectImage} projectName={project.projectName} projectDescription ={project.projectDescription} projectLinks={project.projectLinks} projectTechnology={project.projectTechnology} />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
}
