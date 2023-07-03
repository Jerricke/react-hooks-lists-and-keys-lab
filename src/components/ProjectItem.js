import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techy = technologies.map( (item) => {
    return <span key={item}>{item}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techy}
      </div>
    </div>
  );
}

export default ProjectItem;
