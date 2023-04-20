import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  crop,
  expand,
  Landscape,
  Portrait,
  rLeft,
  rRight,
} from "../../../Image/header/pic";
import Icon from "../helper/Icon";
const ImageTools = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="tools flex"
        style={{ display: "Flex", alignItems: "Center" }}
      >
        <Icon img={crop} desc="Crop" left="-5px" />
        <Icon img={rLeft} desc="Rotate Left" />
        <Icon img={rRight} desc="Rotate Right" />
      </div>
    </>
  );
};

export default ImageTools;
