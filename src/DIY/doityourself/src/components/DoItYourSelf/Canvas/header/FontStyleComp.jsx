import React, { useEffect, useState } from "react";
import ColorPalette from "./ColorPalette";
import FontPickerComp from "./FontPicker";
import "./../styles/font.css";
import FontSize from "./FontSize";

const FontStyleComp = () => {
  const [finalFont, setFinalFont] = useState("Intra");
  const [finalFontSize, setFinalFontSize] = useState(14);
  const style = {
    display: "flex",
    position: "fixed",
    justifyContent: "space-evenly",
    width: "100vw",
    left:"0",
    right:"0",
    background: "rgba(0, 52, 89, 0.88)",
    zIndex: "20000",
  };
  return (
    <div style={style}>
      <ColorPalette />
      <FontSize
        finalFontSize={finalFontSize}
        setFinalFontSize={setFinalFontSize}
      />
      <FontPickerComp finalFont={finalFont} setFinalFont={setFinalFont} />
    </div>
  );
};

export default FontStyleComp;
