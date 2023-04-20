import React from "react";
import "./styles/Logo.css";
import { useDispatch } from "react-redux";

const Logo = ({
  element,
  setSliderName,
  img,
  sliderName,
  color,
  openSlider,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={
          sliderName == element ? "logo_container active" : "logo_container"
        }
        style={{
          background: openSlider && sliderName == element ? "#fff" : color,
          color: sliderName == element ? "#fff" : color,
        }}
        onClick={() => {
          dispatch({ type: "SLIDER_ON" });
          setSliderName(element);
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            filter:
              openSlider && sliderName == element
                ? " invert(57%) sepia(10%) saturate(3500%) hue-rotate(170deg) brightness(75%) contrast(80%)"
                : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
          }}
        />
        <p
          style={{
            color: openSlider && sliderName == element ? color : "#fff",
          }}
        >
          {element}
        </p>
      </div>
    </>
  );
};

export default Logo;
