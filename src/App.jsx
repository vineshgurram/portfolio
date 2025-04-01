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

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
