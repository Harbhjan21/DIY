import React, { useEffect, useState } from "react";
import ColorPalette from "./ColorPalette";
import FontPickerComp from "./FontPicker";
import "./../styles/font.css";
import FontSize from "./FontSize";
// import RangePicker from "./fontComponents/RangePicker";
import { useDispatch } from "react-redux";
import { setText } from "../../../../../../../redux/actions/pageActions";

// tools
import Editor from "./Editor";
import "../styles/editor.css";
const HeaderPage = React.forwardRef(
  ({
    pageContent,
    pageIndex,
    index,
    ele,
    refValue,
    tool,
    heightWidth,
    setHeightWidth,
  }) => {
    // console.log("ref value", refValue, index,ele);
    const dispatch = useDispatch();

    const [textColor, setTextColor] = useState(ele.color || "black");
    const [finalFont, setFinalFont] = useState(ele.family || "roboto");
    let initialFont = "12px";
    if (tool === "Font-Tools") {
      initialFont = Number(ele.fontSize.slice(0, ele.fontSize.length - 2));
    }
    const [finalFontSize, setFinalFontSize] = useState(initialFont);
    // console.log(finalFont, finalFontSize);
    // console.log(refValue, "=-- -- ", index, "=====", tool);
    useEffect(() => {
      if (refValue !== null && tool === "Font-Tools") {
        refValue.current.style.fontSize = `${finalFontSize}px`;
        // console.log(finalFont, finalFontSize,textColor);
        refValue.current.style.fontFamily = `${finalFont}`;
        refValue.current.style.color = textColor;

        pageContent.current[pageIndex].texts[
          index
        ].fontSize = `${finalFontSize}px`;
        pageContent.current[pageIndex].texts[index].color = textColor;
        pageContent.current[pageIndex].texts[index].family = `${finalFont}`;
        // console.log(pageContent.current[pageIndex])
      }
      if (refValue !== null && tool === "Dimesion-Tools") {
      }
    }, [finalFontSize, finalFont, textColor]);
    const captureText = (props, index) => {
      dispatch(setText({ props, index, pageIndex: 0 }));
    };
    useEffect(() => {
      return () => {
        if (tool === "Font-Tools") {
          // console.log("how many times i run");
          let props = {
            family: finalFont,
            fontsize: finalFontSize,
          };
        }
        // dispatch(setText({props, index, pageIndex:0}));
      };
    }, []);

    return (
      <div
        className="header-page"
        onClick={(event) => {
          event.stopPropagation();
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <Editor
          tool={tool}
          textColor={textColor}
          setTextColor={setTextColor}
          finalFont={finalFont}
          setFinalFont={setFinalFont}
          finalFontSize={finalFontSize}
          setFinalFontSize={setFinalFontSize}
          refValue={refValue}
          setHeightWidth={setHeightWidth}
          heightWidth={heightWidth}
        />
      </div>
    );
  }
);

export default HeaderPage;
