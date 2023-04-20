import React from "react";
const Icon = ({ img, icon, desc, left, clickHandler }) => {
  return (
    <div className="icon-div" onClick={clickHandler}>
      <img src={img} alt="" className="icon" />
      {icon}
      <div className="tooltip triangle"></div>
      <span className="tooltip" style={{ left: left }}>
        {desc}
      </span>
    </div>
  );
};

export default Icon;
