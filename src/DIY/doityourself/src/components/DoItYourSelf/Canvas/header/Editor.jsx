import React, { useState } from "react";
import "../styles/editor.css";

// tools
import FontTools from "./tools/FontTools";
import DimensionTools from "./tools/DimensionTools";
import ShapesTools from "./tools/ShapesTools";
import ImageTools from "./tools/ImageTools";
import UndoRedoTool from "./tools/UndoRedoTool";
import OtherTools from "./tools/OtherTools";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import HtmlTooltip from "../../Commons/HtmlTooltip";

const Editor = ({
  openSlider,
  textColor,
  setTextColor,
  tool,
  finalFont,
  setFinalFont,
  finalFontSize,
  setFinalFontSize,
  refValue,
  heightWidth,
  setHeightWidth,
  pagesHistory,
  setPagesHistory,
}) => {
  const toogle = useSelector((state) => state.projects.sideSlider);
  const activeTool = useSelector((state) => state.projects.editor.activeTool);
  const data = useSelector((state) => state.projects.editor);
  const [searchParams, setSearchParams] = useSearchParams();
  const [popUp, setPopUp] = useState(localStorage.getItem("popUp"));

  return (
    // <div
    //   className={toogle ? "editor" : "editor mx-width"}
    //   style={{ zIndex: "100" }}
    // >
    //   <div className="editor-child">
    //     <UndoRedoTool />
    //     {tool === "Image-Tools" && <ImageTools />}
    //     {tool === "Font-Tools" && (
    //       <FontTools
    //         textColor={textColor}
    //         setTextColor={setTextColor}
    //         finalFont={finalFont}
    //         setFinalFont={setFinalFont}
    //         finalFontSize={finalFontSize}
    //         setFinalFontSize={setFinalFontSize}
    //       />
    //     )}
    //     {tool === "Dimesion-Tools" && <DimensionTools />}
    //     {tool === "Shapes-Tools" && <ShapesTools />}
    //     {/* <ShapesTools/> */}
    //     <OtherTools />
    //   </div>
    // </div>
    popUp === "enabled" && searchParams.get("popUp") === "popUp3" ? (
      <HtmlTooltip
        open
        arrow
        placement="bottom"
        title={
          <div className="tooltip_container">
            <p className="tooltip_text">
              Edit design with the easy to access edit buttons
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
                  setSearchParams({ popUp: "popUp4" });
                }}
              >
                Next
              </button>
            </div>
          </div>
        }
      >
        <div
          className="diy-editor"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "50px",
            padding: "0px 10px 0px 10px",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          <UndoRedoTool />
          {activeTool === "Dimension-Tools" && <DimensionTools />}
          {activeTool === "Font-Tools" && <FontTools />}
          {activeTool === "Image-Tools" && <ImageTools />}
          {activeTool === "Shapes-Tools" && <ShapesTools />}
          <OtherTools />
        </div>
      </HtmlTooltip>
    ) : (
      <div
        className="diy-editor"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "50px",
          padding: "0px 10px 0px 10px",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        <UndoRedoTool
          pagesHistory={pagesHistory}
          setPagesHistory={setPagesHistory}
        />
        {activeTool === "Dimension-Tools" && <DimensionTools />}
        {activeTool === "Font-Tools" && <FontTools />}
        {activeTool === "Image-Tools" && <ImageTools />}
        {activeTool === "Shapes-Tools" && <ShapesTools />}
        <OtherTools />
      </div>
    )
  );
};

export default Editor;
