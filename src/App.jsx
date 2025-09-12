import "bootstrap/dist/css/bootstrap.min.css";
import Lenis from "lenis";
import Aos from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./routes/AppRoutes";
import "./scss/custom.scss";
import { useEffect, useRef, useState } from "react";

function App() {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true,
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    document.documentElement.style.scrollBehavior = "auto";

    let rafId;
    function frame(t) {
      lenis.raf(t);
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();
      const header = document.querySelector("header");
      const offset = header ? header.offsetHeight : 0;

      lenis.scrollTo(el, { offset: -offset });

      // update hash without jump
      history.pushState(null, "", href);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      // if you used lenis.destroy, call it here if available:
      if (typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
