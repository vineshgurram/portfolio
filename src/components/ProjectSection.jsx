import { Container, Row, Col } from "react-bootstrap";
import DummyImage from "/images/Sugar-Cream.webp";
import projects from "../json/projects.json";

export default function ProjectSection() {
  return (
    <section className="lyt-section typ-project-section">
      <Container>
        <div className="wrapper border-top-1">
          <h2 className="bs-heading typ-18 typ-300 text-uppercase mb-50">
            FEATURED PROJECTS
          </h2>
          <Row className="g-5">
            {projects.map((project) => {
              return (
                <Col lg={4} md={6} key={project.id}>
                  <div className="bs-card typ-projects">
                    <div className="image-box-wrapper">
                      <img src={DummyImage} className="img-fluid" alt="" />
                    </div>
                    <div className="content-box-wrapper">
                      <div className="d-flex justify-content-between align-items-center flex-nowrap py-3">
                        <h3 className="bs-heading typ-24 typ-300 m-0">
                          {project.projectName}
                        </h3>
                        <div className="icon-box-wrapper">
                          {project.projectLinks.githubLink ? (
                            <a
                              href={project.projectLinks.githubLink}
                              target="_blank"
                              rel="nofollow"
                            >
                              <span className="icon icon-github"></span>
                            </a>
                          ) : (
                            ""
                          )}

                          {project.projectLinks.hostLink ? (
                            <a
                              href={project.projectLinks.hostLink}
                              target="_blank"
                              rel="nofollow"
                            >
                              <span className="icon icon-link"></span>
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-start flex-column py-0 max-453">
                        <p className="bs-para typ-16 typ-300 typ-txt-secondary">
                          {project.projectDescription}
                        </p>
                        <p className="bs-para typ-16 typ-300 typ-clr-blue">
                          {project.projectTechnology.map((tech, index) => {
                            return (
                              <span key={index}>
                                {tech}
                                {index !== project.projectTechnology.length - 1
                                  ? " - "
                                  : ""}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
}
