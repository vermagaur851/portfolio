import React from "react";
import './projectCard.css'

function ProjectCard({ src, lnk, heading, description, git }) {
  return (
    <div>
      <a href={lnk} target="_blank">
        <img className="yeti" src={src} alt="" />
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
