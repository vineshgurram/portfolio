export default function ProjectCard({projectImage,projectName,projectDescription,projectLinks,projectTechnology}) {
  return (
    <>
      <div className="bs-card typ-projects" data-aos="fade-up">
        <div className="image-box-wrapper">
          <a href={projectLinks.hostLink} target="_blank" rel="nofollow">
          <img src={projectImage} className="img-fluid" alt="Thumbnail image for Project" />
          </a>
        </div>
        <div className="content-box-wrapper">
          <div className="d-flex justify-content-between align-items-center flex-nowrap py-3">
            <h3 className="bs-heading typ-24 typ-300 m-0">
              {projectName}
            </h3>
            <div className="icon-box-wrapper">
              {projectLinks.githubLink ? (
                <a
                  href={projectLinks.githubLink}
                  target="_blank"
                  rel="nofollow"
                >
                  <span className="icon icon-github"></span>
                </a>
              ) : (
                ""
              )}

              {projectLinks.hostLink ? (
                <a
                  href={projectLinks.hostLink}
                  target="_blank"
                  rel="nofollow"
                >
                  <span className="icon icon-link"></span>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-start flex-column py-0 max-453">
            <p className="bs-para typ-16 typ-300 typ-txt-secondary">
              {projectDescription}
            </p>
            <p className="bs-para typ-16 typ-300 typ-clr-blue">
              {projectTechnology.map((tech, index) => {
                return (
                  <span key={index}>
                    {tech}
                    {index !== projectTechnology.length - 1
                      ? " - "
                      : ""}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
