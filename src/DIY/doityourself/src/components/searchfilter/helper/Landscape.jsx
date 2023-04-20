import React from "react";
import "./landscape.css";
import mainImg from "../img/mainImg.png";
import topImg from "../img/notice.png";

const Landscape = ({ Signal_Word, Text_2, Text_1, Text_3, color }) => {

  return (
    <div className="landscape">
      <div className="pictograms">
        <div
          className="landscapne-title-box"
          style={{ background: `${color}` }}
        >
          <img src={topImg} alt="img" />
          <p className="pic-title">{Signal_Word}</p>
        </div>
        <div className="pictogram-content">
          <div className="pictogram-img-box">
            <img src={mainImg} alt="img" />
          </div>
          <div className="pictogram-desc-box">
            <h6 className="btm-title">
              {Text_1 || "Respiratory protection needed"}
            </h6>
            <p className="btm-desc">
              {Text_2 || "Toxic gases can cause eye and skin irritation"}
            </p>
          </div>
        </div>
      </div>
      <div className="description">
        <p>
          Dimensions:
          <br />
          <span style={{ color: "#5F5F5F" }}>
            7 : 10 inches
            <br /> 10 : 14 inches
          </span>
        </p>
      </div>
    </div>
  );
};

export default Landscape;
