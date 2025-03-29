import { Container } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";

export default function ExperienceSection() {
  return (
    <section className="lyt-section typ-education-section">
      <Container>
        <div className="wrapper">
          <Tabs defaultActiveKey="tab1" id="tabs-example">
            <Tab eventKey="tab1" title="Tab 1">
              <p>This is the content of Tab 1.</p>
            </Tab>
            <Tab eventKey="tab2" title="Tab 2">
              <p>This is the content of Tab 2.</p>
            </Tab>
            <Tab eventKey="tab3" title="Tab 3">
              <p>This is the content of Tab 3.</p>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
}
