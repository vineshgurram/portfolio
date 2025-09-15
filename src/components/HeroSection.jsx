import { useEffect, useState } from "react";

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const names = [
    "Vinesh Gurram", // English
    "विनेश गुर्रम", // Marathi
    "వినేష్ గుర్రం", // Telugu
    "ヴィネシュ・グラム", // Japanese
    "维内什·古拉姆", // Chinese
  ];

  const gradientClasses = [
    "typ-gradient-1",
    "typ-gradient-2",
    "typ-gradient-3",
    "typ-gradient-4",
    "typ-gradient-5",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % names.length); // loop through
    }, 3000); // switch every 3 seconds
    return () => clearInterval(interval);
  }, [names.length]);
  return (
    <section className="lyt-section typ-hero-section">
      <div className="container">
        <p className="bs-para typ-16 typ-300">Hey, I’m</p>
        <h1 className={`bs-heading typ-96 typ-fnt2 typ-600 d-inline-block name-text fade ${gradientClasses[index]}`}>
          {names[index]}
        </h1>
        <p className="bs-para typ-18 typ-300 max-1080 mb-4">
          I'm a Front-End Developer with 2+ years of experience in building
          responsive and user-friendly websites using HTML, CSS, JavaScript, and
          React. I enjoy creating clean and fast interfaces, and I’ve worked
          with tools like Bootstrap, and Tailwind CSS. I’m always ready to learn
          new things and build real-world projects.
        </p>
        <a
          href="https://www.linkedin.com/in/vineshgurram/"
          target="_blank"
          className="link"
        >
          <h3
            className="bs-heading typ-24 typ-300"
            data-aos="fade"
            data-aos-delay="500"
          >
            Say hi <span className="arrow d-lg-inline-block">&rarr;</span>
          </h3>
        </a>
      </div>
    </section>
  );
}
