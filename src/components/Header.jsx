import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import { useState,useEffect } from "react";
import { Link } from "react-router";
import Lenis from "lenis";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // init Lenis
    const lenis = new Lenis({ smooth: true });
    document.documentElement.style.scrollBehavior = "auto";

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // subscribe to Lenis scroll event
    lenis.on("scroll", ({ scroll }) => {
      if (scroll > lastScroll && scroll > 80) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      setLastScroll(scroll);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (typeof lenis.destroy === "function") lenis.destroy();
    };
  }, [lastScroll]);

  return (
    <header className="bs-header sticky-top"  style={{
          transform: showHeader ? "translateY(0)" : "translateY(-100%)"
        }}>
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
                    <h3
                      className="logo-txt mb-0"
                      style={{ color: "#fff", fontWeight: 300 }}
                    >
                      VG.
                    </h3>
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
                      <a
                        href="https://drive.google.com/file/d/1NbkaUzwVLoq-ay_N9SgmH9TwNHttaYhg/view?usp=sharing"
                        className="nav-link"
                        target="_blank"
                      >
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
