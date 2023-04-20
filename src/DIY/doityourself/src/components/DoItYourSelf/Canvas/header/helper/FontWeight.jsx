import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FontWeight = () => {
  const dispatch = useDispatch();
  const editor = useSelector((state) => state.projects.editor);

  const data = useSelector((state) => state.projects.pages);
  console.log(data);

  const isBold =
    data[editor.activePage].texts[editor.activeElementIndex].isBold;
  const isItalic =
    data[editor.activePage].texts[editor.activeElementIndex].isItalic;
  const isUnderline =
    data[editor.activePage].texts[editor.activeElementIndex].underline;
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "0px 10px" }}>
      {isBold && (
        <div
          style={{
            margin: "0px 5px",
            fontWeight: "bold",
            border: "solid silver 1px",
            borderRadius: "2px",
            height: "25px",
            width: "25px",
            textAlign: "Center",
            backgroundColor: "whitesmoke",
            cursor: "pointer",
            boxShadow: "1px 1px 3px 1px silver",
          }}
          onClick={() => {
            dispatch({
              type: "EDIT_FONT_BOLD",
              payload: {
                pageIndex: editor.activePage,
                elementIndex: editor.activeElementIndex,
                bold: false,
              },
            });
          }}
        >
          B
        </div>
      )}
      {!isBold && (
        <div
          style={{
            margin: "0px 5px",
            fontWeight: "bold",
            border: "solid silver 1px",
            borderRadius: "2px",
            height: "25px",
            width: "25px",
            textAlign: "Center",
            backgroundColor: "white",
            cursor: "pointer",
            boxShadow: "1px 1px 3px 1px silver",
          }}
          onClick={() => {
            dispatch({
              type: "EDIT_FONT_BOLD",
              payload: {
                pageIndex: editor.activePage,
                elementIndex: editor.activeElementIndex,
                bold: true,
              },
            });
          }}
        >
          B
        </div>
      )}
      {isItalic && (
        <div
          style={{
            margin: "0px 5px",
            border: "solid silver 1px",
            borderRadius: "2px",
            height: "25px",
            width: "25px",
            textAlign: "Center",
            fontStyle: "italic",
            backgroundColor: "whitesmoke",
            cursor: "pointer",
            boxShadow: "1px 1px 3px 1px silver",
          }}
          onClick={() => {
            dispatch({
              type: "EDIT_FONT_ITALICS",
              payload: {
                pageIndex: editor.activePage,
                elementIndex: editor.activeElementIndex,
                italics: false,
              },
            });
          }}
        >
          I
        </div>
      )}
      {!isItalic && (
        <div
          style={{
            margin: "0px 5px",
            border: "solid silver 1px",
            borderRadius: "2px",
            height: "25px",
            width: "25px",
            textAlign: "Center",
            fontStyle: "italic",
            backgroundColor: "white",
            cursor: "pointer",
            boxShadow: "1px 1px 3px 1px silver",
          }}
          onClick={() => {
            dispatch({
              type: "EDIT_FONT_ITALICS",
              payload: {
                pageIndex: editor.activePage,
                elementIndex: editor.activeElementIndex,
                italics: true,
              },
            });
          }}
        >
          I
        </div>
      )}
      {isUnderline && (
        <div
          style={{
            margin: "0px 5px",
            border: "solid silver 1px",
            borderRadius: "2px",
            height: "25px",
            width: "25px",
            textAlign: "Center",
            textDecoration: "underline",
            backgroundColor: "whitesmoke",
            cursor: "pointer",
            boxShadow: "1px 1px 3px 1px silver",
          }}
          onClick={() => {
            dispatch({
              type: "EDIT_FONT_UNDERLINE",
              payload: {
                pageIndex: editor.activePage,
                elementIndex: editor.activeElementIndex,
                underline: false,
              },
            });
          }}
        >
          U
        </div>
      )}
      {!isUnderline && (
        <div
          style={{
            margin: "0px 5px",
            border: "solid silver 1px",
            borderRadius: "2px",
            height: "25px",
            width: "25px",
            textAlign: "Center",
            textDecoration: "underline",
            backgroundColor: "white",
            cursor: "pointer",
            boxShadow: "1px 1px 3px 1px silver",
          }}
          onClick={() => {
            dispatch({
              type: "EDIT_FONT_UNDERLINE",
              payload: {
                pageIndex: editor.activePage,
                elementIndex: editor.activeElementIndex,
                underline: true,
              },
            });
          }}
        >
          U
        </div>
      )}
    </div>
  );
};

export default FontWeight;
