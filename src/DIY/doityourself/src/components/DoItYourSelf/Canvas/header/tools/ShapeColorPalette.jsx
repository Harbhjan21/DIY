import React, { useRef, useState } from "react";
import { CompactPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";
const ColorPalette = ({
  textColor,
  setTextColor,
  index,
  actionType,
  isTemplateColor,
  currentColor,
}) => {
  const editor = useSelector((state) => state.projects.editor);
  const data = useSelector((state) => state.projects.pages);
  const dispatch = useDispatch();
  const [newColor, setNewColor] = useState(currentColor);
  const [showColorBox, setShowColorBox] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "50%",
          margin: "0px 5px",
          backgroundColor:
            data[editor.activePage].shapes[editor.activeElementIndex].background,
            border: "solid silver 1px"
        }}
        onClick={() => {
          setShowColorBox(!showColorBox);
        }}
      ></div>
      {showColorBox && (
        <div style={{ position: "absolute", top: "30px" }}>
          <CompactPicker
            onChange={(updateTextColor) => {
              console.log(updateTextColor.hex);
              dispatch({
                type: "EDIT_SHAPE_BGCOLOR",
                payload: {
                  pageIndex: editor.activePage,
                  elementIndex: editor.activeElementIndex,
                  color: updateTextColor.hex,
                },
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPalette;

/*
import React, { useState } from "react";
import { CompactPicker, CirclePicker } from "react-color";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const ColorPicker = ({ setFinalColor }) => {
  const [colors, setColors] = useState("#00E0FF");

  const [showPicker, setShowPicker] = useState(false);

  const onClick = () => {
    setShowPicker(!showPicker);
  };

  const onClose = () => {
    setShowPicker(false);
  };

  const onChange = (color) => {
    setColors(color.hex);
    setFinalColor(color.hex);
  };
  return (
    <div>
      <div className="color" onClick={onClick}>
        <div style={{ background: `${colors}` }} className="circle" />
        {showPicker ? (
          <IoIosArrowUp size={30} color={"#003459"} />
        ) : (
          <IoIosArrowDown size={30} color={"#003459"} />
        )}
      </div>
      {showPicker ? (
        <div className="popover">
          <div className="cover" onClick={onClose} />
          <CirclePicker color={colors} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
*/
