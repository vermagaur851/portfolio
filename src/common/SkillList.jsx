import React from "react";

function SkillList({src,cnt}) {
  return (
    <span>
      <img src={src} alt="CheckMarkIcon" />
      <p>{cnt}</p>
    </span>
  );
}

export default SkillList;
