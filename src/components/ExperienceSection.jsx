import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import ExperienceSectionData from "../json/experience.json";

export default function ExperienceSection() {
  return (
    <section className="lyt-section typ-experience-section">
      <Container>
        <div className="wrapper">
          <h2 className="bs-heading typ-18 typ-300 text-uppercase mb-50">
            EXPERIENCE
          </h2>
          <div className="bs-tab typ-experience-tab">
            <Tabs
              defaultActiveKey={ExperienceSectionData[0].companyName}
              id="experience-tab"
            >
              {ExperienceSectionData.map((exp, index) => (
                <Tab eventKey={exp.companyName} title={exp.companyName}>
                  <div className="tab-content-wrapper">
                    <div className="d-flex align-lg-items-center justify-content-between flex-nowrap mb-3 flex-lg-row flex-column">
                      <h3 className="bs-heading typ-24 typ-300 m-0">
                        {exp.role}
                      </h3>
                      <p className="bs-para typ-txt-secondary typ-300 typ-16 m-0">
                        {exp.from} - {exp.to}
                      </p>
                    </div>
                    <p className="bs-para typ-16 typ-300 typ-clr-blue mb-lg-5 mb-3">
                      {exp.location}
                    </p>
                    <ul className="bs-para typ-txt-secondary typ-300 typ-16 m-0">
                      {exp.responsibilities.map((res, index) => (
                        <li>{res}</li>
                      ))}
                    </ul>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  );
}
