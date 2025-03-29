import { Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <footer className="bs-footer">
      <div className="container">
        <div className="wrapper">
          <Row className="g-0">
            <Col lg={3}>
              <h3 className="contact-txt">CONTACT</h3>
            </Col>
            <Col lg={9}>
              <div className="contact-box-wrapper">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="contact-box">
                    <span className="icon icon-mail"></span>
                    <span className="txt-icon">Send an email</span>
                  </div>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="contact-box">
                    <span className="icon icon-github"></span>
                    <span className="txt-icon">Github</span>
                  </div>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="contact-box">
                    <span className="icon icon-linkedin"></span>
                    <span className="txt-icon">LinkedIn</span>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}
