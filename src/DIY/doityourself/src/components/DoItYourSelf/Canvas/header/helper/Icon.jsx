import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Rotate_Img } from "../../../../../../../../redux/actions/pageActions";

const Icon = ({ img, icon, desc, left, degree }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (desc == "Rotate Left") {
      degree.current = degree.current - 90;
      dispatch(Rotate_Img({ rotate: degree.current }));
    } else if (desc == "Rotate Right") {
      degree.current = degree.current + 90;
      dispatch(Rotate_Img({ rotate: degree.current }));
    }
  };
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
