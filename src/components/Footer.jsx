import { Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <footer className="bs-footer" id="section-footer">
      <div className="container">
        <div className="wrapper">
          <Row className="g-0 justify-content-between mb-5">
            <Col lg={6}>
              <h2 className="logo-txt me-4 mb-3">VG.</h2>
              <h3 className="contact-txt">FRONT-END DEVELOPER | FUTURE FULL-STACK ENGINEER</h3>
            </Col>
            <Col lg={5}>
              <div className="contact-box-wrapper pt-lg-0 pt-4">
                <a
                  href="mailto:vineshgurram@gmail.com"
                  rel="noopener noreferrer"
                >
                  <div className="contact-box">
                    <span className="icon icon-mail"></span>
                    {/* <span className="txt-icon">Send an email</span> */}
                  </div>
                </a>
                <a
                  href="https://github.com/vineshgurram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-box">
                    <span className="icon icon-github"></span>
                    {/* <span className="txt-icon">Github</span> */}
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/vineshgurram/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-box">
                    <span className="icon icon-linkedin"></span>
                    {/* <span className="txt-icon">LinkedIn</span> */}
                  </div>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <div className="copyright-text">
            <p className="bs-para typ-16 typ-300 mb-0 text-md-start text-center">© Copyright 2025. Made by <a href="https://github.com/vineshgurram" target="_blank" className="bs-para typ-300 typ-clr-blue ">Vinesh Gurram</a></p>
            </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}
