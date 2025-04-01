import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";

export default function ExperienceSection() {
  return (
    <section className="lyt-section typ-experience-section">
      <Container>
        <div className="wrapper">
          <h2 className="bs-heading typ-18 typ-300 text-uppercase mb-50">
            EXPERIENCE
          </h2>
          <div className="bs-tab typ-experience-tab">
            <Tabs defaultActiveKey="tab1" id="experience-tab">
              <Tab eventKey="tab1" title="Selfbook">
                <div className="tab-content-wrapper">
                  <div className="d-flex align-items-center justify-content-between flex-nowrap mb-3">
                    <h3 className="bs-heading typ-24 typ-300 m-0">
                      Software Developer (Remote)
                    </h3>
                    <p className="bs-para typ-txt-secondary typ-300 typ-16 m-0">
                      Jun 2021 - Present
                    </p>
                  </div>
                  <p className="bs-para typ-16 typ-300 typ-clr-blue mb-5">
                    Selfbook / US - New York
                  </p>
                  <ul className="bs-para typ-txt-secondary typ-300 typ-16 m-0">
                    <li>
                     Developing screens and UI components for the web application using React and Tailwind.
                    </li>
                    <li>
                     Developing screens and UI components for the web application using React and Tailwind.
                    </li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="tab2" title="Wevoz">
                <p>This is the content of Tab 2.</p>
              </Tab>
              <Tab eventKey="tab3" title="FreeBeings">
                <p>This is the content of Tab 3.</p>
              </Tab>
              <Tab eventKey="tab4" title="TDF">
                <p>This is the content of Tab 4.</p>
              </Tab>
              <Tab eventKey="tab5" title="Upwork">
                <p>This is the content of Tab 5.</p>
              </Tab>
              <Tab eventKey="tab6" title="Shoppy">
                <p>This is the content of Tab 6.</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  );
}
