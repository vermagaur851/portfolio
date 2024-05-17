import React from "react";

function ProjectCard({src, lnk, heading, description}) {
  return (
    <a href={lnk} target="_blank">
      <img src={src} alt="" />
      <h3>{heading}</h3>
      <p>{description}</p>
    </a>
  );
}

export default ProjectCard;
