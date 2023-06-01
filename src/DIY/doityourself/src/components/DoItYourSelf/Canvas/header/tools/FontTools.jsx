import Icon from "../helper/Icon";
import React, { useState } from "react";
import { Paragraphstyle } from "../../../Image/header/pic";
import FontSize from "../helper/FontSize";
import FontWeight from "../helper/FontWeight";
import FontComponent from "../helper/FontFamily";
import ColorPalette from "../ColorPalette";
import { FiAlignCenter } from "../icons";


import { useSelector,useDispatch } from "react-redux";
import TranslateText from "../helper/TranslateText";

const FontTools = ({
  textColor,
  setTextColor,
  finalFont,
  setFinalFont,
  finalFontSize,
  setFinalFontSize,
}) => {
  //const [finalFont, setFinalFont] = useState("Open Sans");
  // color: "black";
  // family: "roboto";
  // fontSize: "30px";
  // isBold: true;
  // isItalic: false;
  // letterSpacing: "1px";
  // lineSpacing: "1px";
  // name: "header1";
  // text: "Default Header Text";
  // underLine: false;
  // x: 220.00006103515625;
  // y: 100;
  // <TranslateText />

  const editor = useSelector((state) => state.projects.editor);
  const data = useSelector((state) => state.projects.pages);
  const [Zindex,setZindex] = useState(data[editor.activePage].texts[editor.activeElementIndex].zIndex || 0 );
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div
      className="Font-Tools flex"
      style={{ display: "flex", alignItems: "center" }}
    >
      <FontComponent finalFont={finalFont} setFinalFont={setFinalFont} />
      <FontWeight />
      <FontSize
        finalFontSize={finalFontSize}
        setFinalFontSize={setFinalFontSize}
      />
      <ColorPalette textColor={textColor} setTextColor={setTextColor} />
      {/* <div className="hex-code">
        <p>{textColor}</p>
      </div> */}
      {/* <Icon img={Paragraphstyle} /> */}
      {/* <div style={{ display: "flex" }}>
        <div
          style={{
            margin: "0px 5px",
            height: "25px",
            width: "25px",
            border: "solid silver 1px",
            borderRadius: "2px",
            textAlign: "center",
            boxShadow: "1px 1px 3px 1px silver",
            cursor: "pointer"
          }}
        >
          <i class="fa-solid fa-align-left"></i>
        </div>
        <div
          style={{
            margin: "0px 5px",
            height: "25px",
            width: "25px",
            border: "solid silver 1px",
            borderRadius: "2px",
            textAlign: "center",
            boxShadow: "1px 1px 3px 1px silver",
            cursor: "pointer"
          }}
        >
          <i class="fa-solid fa-align-center"></i>
        </div>
        <div
          style={{
            margin: "0px 5px",
            height: "25px",
            width: "25px",
            border: "solid silver 1px",
            borderRadius: "2px",
            textAlign: "center",
            boxShadow: "1px 1px 3px 1px silver",
            cursor: "pointer"
          }}
        >
          <i class="fa-solid fa-align-right"></i>
        </div> 
      </div>*/}

   {/* Managing Zindex of the Text */}
     <button 
     onClick={() => {
      dispatch({
        type: "EDIT_FONT_ZINDEX",
        payload: {
          pageIndex: editor.activePage,
          elementIndex: editor.activeElementIndex,
          ZINDEX:data[editor.activePage].texts[editor.activeElementIndex].zIndex+1,
        },
      });
      setZindex(Zindex+1);
    }}> Increment </button> 
     <button 
     onClick={() => {
      dispatch({
        type: "EDIT_FONT_ZINDEX",
        payload: {
          pageIndex: editor.activePage,
          elementIndex: editor.activeElementIndex,
          ZINDEX:data[editor.activePage].texts[editor.activeElementIndex].zIndex-1,
        },
      });
      setZindex(Zindex-1);
    }}> Decrement </button> 
    <span>{data[editor.activePage].texts[editor.activeElementIndex].zIndex}</span>
    </div>
  );
};

export default FontTools;
