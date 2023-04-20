import React, { useState } from "react";
import "./styles/SidePanel.css";
import { useDispatch, useSelector } from "react-redux";
import { canvasSize, upload, sticker } from "../Image/header/pic";
import { template, shape, text, bg } from "../Image/header/pic";
import { IoArrowBack, IoSearchSharp } from "react-icons/io5";
import CanvasSize from "../SideBarSlider/CanvasSize";
import UploadFile from "../SideBarSlider/UploadFile";
import Background from "../SideBarSlider/Background";
import TemplateOption from "../SideBarSlider/TemplateOption";
import TextStyle from "../SideBarSlider/TextStyles/TextStyle";
import Frames from "../SideBarSlider/Frames";
import LogosOption from "../SideBarSlider/LogosOption";
import { useSearchParams } from "react-router-dom";
import HtmlTooltip from "../Commons/HtmlTooltip";

const menu = [
  {
    element: "Template",
    img: template,
    color: "#494FBF",
  },
  {
    element: "Canvas Size",
    img: canvasSize,
    color: "#4449A5",
  },
  {
    element: "Text",
    img: text,
    color: "#353AA5",
  },
  {
    element: "Shapes",
    img: shape,
    color: "#323680",
  },
  {
    element: "Background",
    img: bg,
    color: "#2A2D65",
  },
  {
    element: "Uploads",
    img: upload,
    color: "#1F224D",
  },
  {
    element: "Elements",
    img: sticker,
    color: "#171938",
  },
];

const SidePanel = () => {
  const openSlider = useSelector((state) => state.projects.sideSlider);
  const dispatch = useDispatch();
  const [slider, setSlider] = useState("Template");
  const [searchParams, setSearchParams] = useSearchParams();
  const [popUp, setPopUp] = useState(localStorage.getItem("popUp"));

  return (
    <div className="left-sidebar">
      <div className="left-sidebar-menu">
        {menu.map((item) =>
          item.element === "Text" &&
          popUp === "enabled" &&
          searchParams.get("popUp") === "popUp2" ? (
            <HtmlTooltip
              open
              arrow
              placement="right"
              title={
                <div className="tooltip_container">
                  <p className="tooltip_text">
                    Create and customise your designs from the variety of edit
                    options
                  </p>
                  <div className="tooltip_button_container">
                    <button
                      className="tooltip_skip_button"
                      onClick={() => {
                        setPopUp(localStorage.setItem("popUp", "disabled"));
                      }}
                    >
                      Skip
                    </button>
                    <button
                      className="tooltip_next_button"
                      onClick={() => {
                        setSearchParams({ popUp: "popUp3" });
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              }
            >
              <div
                className="left-sidebar-menu-item"
                style={{
                  backgroundColor:
                    slider === item.element ? "white" : item.color,
                  color: slider === item.element ? item.color : "white",
                }}
                onClick={() => {
                  dispatch({ type: "SLIDER_ON" });
                  setSlider(item.element);
                }}
              >
                <img
                  src={item.img}
                  style={{
                    filter:
                      slider == item.element
                        ? " invert(57%) sepia(10%) saturate(3500%) hue-rotate(170deg) brightness(75%) contrast(80%)"
                        : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                  }}
                />
                <div>{item.element}</div>
              </div>
            </HtmlTooltip>
          ) : (
            <div
              className="left-sidebar-menu-item"
              style={{
                backgroundColor: slider === item.element ? "white" : item.color,
                color: slider === item.element ? item.color : "white",
              }}
              onClick={() => {
                dispatch({ type: "SLIDER_ON" });
                setSlider(item.element);
              }}
            >
              <img
                src={item.img}
                style={{
                  filter:
                    slider == item.element
                      ? " invert(57%) sepia(10%) saturate(3500%) hue-rotate(170deg) brightness(75%) contrast(80%)"
                      : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                }}
              />
              <div>{item.element}</div>
            </div>
          )
        )}
      </div>
      {openSlider && (
        <div className="sidebar-slider">
          <div className="search-back-btns">
            <div className="search-div">
              <IoSearchSharp className="icon" />{" "}
              <input
                type="text"
                name="search_template"
                placeholder={"  Search " + slider}
              />
            </div>
            <div
              className="back-div"
              onClick={() => {
                dispatch({ type: "SLIDER_OFF" });
                setSlider("");
              }}
            >
              <IoArrowBack className="back-btn" />
            </div>
          </div>
          {slider === "Template" && <TemplateOption />}
          {slider === "Canvas Size" && <CanvasSize />}
          {slider === "Text" && <TextStyle />}
          {slider === "Shapes" && <Frames />}
          {slider === "Background" && <Background />}
          {slider === "Uploads" && <UploadFile />}
          {slider === "Elements" && <LogosOption />}
        </div>
      )}
    </div>
  );
};

export default SidePanel;
