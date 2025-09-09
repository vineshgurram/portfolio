import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router";
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="bs-header sticky-top">
      <Container>
        <div className="d-flex flex-lg-row flex-row-reverse justify-content-between">
          <Navbar.Toggle onClick={handleShow} className="d-lg-none" />
          <div className="wrapper">
            <div className="logo-wrap">
              <h3 className="logo-txt">VG.</h3>
            </div>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="start"
              responsive="lg"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className="logo-wrap">
                    <h3 className="logo-txt mb-0" style={{ color: '#fff',fontWeight:300 }}>VG.</h3>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="pt-md-0 pt-5">
                <Nav defaultActiveKey="/" className="flex-lg-column-row">
                  <ul className="nav-list">
                    <li className="nav-item">
                      <a href="#section-project" className="nav-link">
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Resume
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#section-footer" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="toggle-mode-btn-wrapper d-none">
                    <button type="button" className="btn toggle-mode">
                      <span className="icon icon-sun"></span>
                    </button>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </Container>
    </header>
  );
}
