import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router";
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="bs-header">
      <Container>
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
              <Offcanvas.Title>Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav defaultActiveKey="/" className="flex-lg-column-row">
                <ul className="nav-list">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="toggle-mode-btn-wrapper">
                  <button type="button" className="btn toggle-mode" >
                  <span className="icon icon-sun"></span>
                  </button>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Container>
    </header>
  );
}
