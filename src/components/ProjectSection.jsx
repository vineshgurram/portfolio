import { Container, Row, Col } from "react-bootstrap";
import DummyImage from "/images/Sugar-Cream.webp";

export default function ProjectSection() {
  return (
    <section className="lyt-section typ-project-section">
      <Container>
        <div className="wrapper border-top-1">
        <h2 className="bs-heading typ-18 typ-300 text-uppercase mb-50">FEATURED PROJECTS</h2>
        <Row className="g-5">
          <Col lg={6}>
            <div className="bs-card typ-projects">
              <div className="image-box-wrapper">
                <img src={DummyImage} className="img-fluid" alt="" />
              </div>
              <div className="content-box-wrapper">
                <div className="d-flex justify-content-between align-items-center flex-nowrap py-3">
                  <h3 className="bs-heading typ-24 typ-300 m-0">
                    Project Name
                  </h3>
                  <div className="icon-box-wrapper">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <span className="icon icon-github"></span>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <span className="icon icon-link"></span>
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start flex-column py-3 max-453">
                  <p className="bs-para typ-16 typ-300 typ-txt-secondary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat
                  </p>
                  <p className="bs-para typ-16 typ-300 typ-clr-blue">
                    React - Bootstrap - Styled Components
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bs-card typ-projects">
              <div className="image-box-wrapper">
                <img src={DummyImage} className="img-fluid" alt="" />
              </div>
              <div className="content-box-wrapper">
                <div className="d-flex justify-content-between align-items-center flex-nowrap py-3">
                  <h3 className="bs-heading typ-24 typ-300 m-0">
                    Project Name
                  </h3>
                  <div className="icon-box-wrapper">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <span className="icon icon-github"></span>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <span className="icon icon-link"></span>
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start flex-column py-3 max-453">
                  <p className="bs-para typ-16 typ-300 typ-txt-secondary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat
                  </p>
                  <p className="bs-para typ-16 typ-300 typ-clr-blue">
                    React - Bootstrap - Styled Components
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bs-card typ-projects">
              <div className="image-box-wrapper">
                <img src={DummyImage} className="img-fluid" alt="" />
              </div>
              <div className="content-box-wrapper">
                <div className="d-flex justify-content-between align-items-center flex-nowrap py-3">
                  <h3 className="bs-heading typ-24 typ-300 m-0">
                    Project Name
                  </h3>
                  <div className="icon-box-wrapper">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <span className="icon icon-github"></span>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <span className="icon icon-link"></span>
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start flex-column py-3 max-453">
                  <p className="bs-para typ-16 typ-300 typ-txt-secondary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat
                  </p>
                  <p className="bs-para typ-16 typ-300 typ-clr-blue">
                    React - Bootstrap - Styled Components
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bs-card typ-projects">
              <div className="image-box-wrapper">
                <img src={DummyImage} className="img-fluid" alt="" />
              </div>
              <div className="content-box-wrapper">
                <div className="d-flex justify-content-between align-items-center flex-nowrap py-3">
                  <h3 className="bs-heading typ-24 typ-300 m-0">
                    Project Name
                  </h3>
                  <div className="icon-box-wrapper">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <span className="icon icon-github"></span>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <span className="icon icon-link"></span>
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-start flex-column py-3 max-453">
                  <p className="bs-para typ-16 typ-300 typ-txt-secondary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat
                  </p>
                  <p className="bs-para typ-16 typ-300 typ-clr-blue">
                    React - Bootstrap - Styled Components
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
}
