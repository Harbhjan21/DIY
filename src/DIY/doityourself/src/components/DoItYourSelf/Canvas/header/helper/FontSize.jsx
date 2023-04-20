import { useSelector, useDispatch } from "react-redux";
import React from "react";
const FontSize = ({ finalFontSize, setFinalFontSize }) => {
  const dispatch = useDispatch();
  const sizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 48, 60, 72];
  const editor = useSelector((state) => state.projects.editor);
  const data = useSelector((state) => state.projects.pages);

  return (
    <select
      name="font-size"
      value={data[editor.activePage].texts[editor.activeElementIndex].fontSize}
      onChange={(e) => {
        dispatch({
          type: "EDIT_FONT_SIZE",
          payload: {
            fontSize: e.target.value,
            pageIndex: editor.activePage,
            elementIndex: editor.activeElementIndex,
          },
        });
      }}
      style={{
        margin: "0px 4px",
        boxShadow: "1px 1px 3px 1px silver",
        border: "solid silver 1px",
        borderRadius: "2px",
        height: "25px",
      }}
    >
      {sizes.map((item, i) => {
        return (
          <option key={i} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};
export default FontSize;
