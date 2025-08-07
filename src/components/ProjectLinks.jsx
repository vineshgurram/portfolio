// import projects from "../../data/projects.json";

export default function projectLinks() {
//   const projectLinks = projects.projectLinks;
  return (
    <>
      {projectLinks.map((link) => {
        return (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span className="icon icon-github"></span>
          </a>
        );
      })}
    </>
  );
}
