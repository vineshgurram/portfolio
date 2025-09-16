import { Row, Col, Container } from "react-bootstrap";
import educations from "../json/education.json";

export default function EducationSection() {
  return (
    <section
      className="lyt-section typ-education-section"
      id="section-experience"
    >
      <Container>
        <div className="wrapper">
          <h2 className="bs-heading typ-18 typ-300 text-uppercase mb-50">
            EDUCATIONAL QUALIFICATIONS
          </h2>

          <div className="education-box-wrapper">
            {educations.map((education, index) => (
              <div
                className={`education-box ${
                  index !== educations.length - 1 ? "mb-5" : ""
                }`}
                key={education.id}
                data-aos="fade-up"
              >
                <Row>
                  <Col md={9}>
                    <div className="left-box">
                      <h3 className="bs-heading typ-24 typ-300 mb-2">
                        {education.instituteName}
                      </h3>
                      <p className="bs-para typ-14 typ-clr-blue typ-300 typ-16 mb-2">
                        {education.universityName}
                      </p>
                      <p className="bs-para typ-14 typ-txt-secondary typ-300 typ-16 m-0">
                        - {education.courseName}
                      </p>
                    </div>
                  </Col>
                  <Col md={3} className="text-md-end">
                    <div className="right-box">
                      <p className="bs-para typ-txt-secondary typ-300 typ-16 m-2">
                        {education.yearOfCourse}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
