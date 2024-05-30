import React from "react";

function ProjectCard({ src, lnk, heading, description, git }) {
  return (
    <div>
      <a href={lnk} target="_blank">
        <img src={src} alt="" />
      </a>
      <h3>{heading}</h3>
      <p>{description}</p>
      <a target="_blank" href={git}>
        <h3>Github↗</h3>
      </a>
    </div>
  );
}

export default ProjectCard;
