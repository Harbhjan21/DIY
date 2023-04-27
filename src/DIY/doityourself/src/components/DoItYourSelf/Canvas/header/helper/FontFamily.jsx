import FontPicker from "font-picker-react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
const FontComponent = ({ finalFont, setFinalFont }) => {
  const dispatch = useDispatch();
  const editor = useSelector((state) => state.projects.editor);
  const data = useSelector((state) => state.projects.pages);

  return (
    <div className="font-family-tool">
      <FontPicker
        apiKey="AIzaSyDZyIxM4tyvQ9iwAxC9R7wZJilaORy5waw"
        // activeFontFamily={
        //   data[editor.activePage].texts[editor.activeElementIndex].family ||
        //   "roboto"
        // }
        activeFontFamily={
          data[editor.activePage].texts[editor.activeElementIndex].family
        }
        limit={200}
        style={{
          height: "25px",
        }}
        onChange={(nextFont) => {
          dispatch({
            type: "EDIT_FONT_FAMILY",
            payload: {
              pageIndex: editor.activePage,
              elementIndex: editor.activeElementIndex,
              family: nextFont.family,
            },
          });
          dispatch({
            type: "SET_DIY_FORM_FONT_FAMILY",
            payload: {
              fontFamily: nextFont.family,
            },
          });
        }}
      />
    </div>
  );
};
export default FontComponent;
