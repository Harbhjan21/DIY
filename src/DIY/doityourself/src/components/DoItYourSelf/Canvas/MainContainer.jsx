import React, { useState, useRef } from "react";
import { Frame } from "./index";
import "./styles/MainContainer.css";
import Download from "./Download";
import FontStyleComp from "./header/FontStyleComp";
const MainContainer = ({ openSlider }) => {
  // let styleSliderOpen = { justifyContent: "flex-end", paddingRight: "10vw" };
  let styleSliderOpen = { justifyContent: "flex-end" };
  let styleSliderClose = { justifyContent: "center" };

  return (
    <div
      className="main_container"
      // style={openSlider ? styleSliderOpen : styleSliderClose}
      // style={{backgroundColor: "yellow", height: "calc(90px - "}}
    >
      {openSlider}
      <Frame />
    </div>
  );
};

export default MainContainer;
