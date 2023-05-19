import Icon from "../helper/Icon";
import React from "react";
import FontSize from "../helper/FontSize";
import ColorPalette from "./ShapeColorPalette";

import { useSelector,useDispatch } from "react-redux";
import { addShape } from "../../../../../../../../redux/actions/pageActions";
import {
  octagonBorder,
  circularBorder,
  squareBorder,
  strokeLines,
  square,
  Star,
  circle,
  triangle,
} from "../../../Image/header/pic";
const ShapesTools = () => {
  const dispatch = useDispatch();
  const editor = useSelector((state) => state.projects.editor);
  const data = useSelector((state) => state.projects.pages);
  return (
    <>
      {/* <div className="shape-tools Font-tools  flex">
        <Icon img={circle} />
        <Icon img={triangle} />
        <Icon img={Star} />
        <Icon img={square} />
        <FontSize />
        <ColorPalette />
        <div className="hex-code">
          <p>#000</p>
        </div>
        <img src={strokeLines} alt="" style={{ marginLeft: "10px" }} />
        <FontSize />
        <ColorPalette />
        <div className="hex-code">
          <p>#000</p>
        </div>
        <figure>
          <img src={squareBorder} alt="" />
        </figure>
        <figure>
          <img src={octagonBorder} alt="" />
        </figure>
        <figure>
          <img src={circularBorder} alt="" />
        </figure>
      </div> */}
      <div
        className="shape-tool-box"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          onClick={() => {
            dispatch(
              addShape({
                shape: {
                  category: "sticker",
                  style: "Circle",
                  clipPath: "circle(50% at 50% 50%)",
                  height: "100px",
                  width: "100px",
                  x: "10px",
                  y: "10px",
                  background: "whitesmoke",
                  zIndex:0
                },
              })
            );
          }}
        >
          <Icon img={circle} desc="Circle" />
        </div>
        <div
          onClick={() => {
            dispatch(
              addShape({
                shape: {
                  category: "sticker",
                  style: "Triangle",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  height: "100px",
                  width: "100px",
                  x: "10px",
                  y: "10px",
                  background: "whitesmoke",
                  zIndex:0
                },
              })
            );
          }}
        >
          <Icon img={triangle} desc="Triangle" />
        </div>
        <div
          onClick={() => {
            dispatch(
              addShape({
                shape: {
                  category: "sticker",
                  style: "Polygon",
                  clipPath:
                    "polygon(50% 0, 61% 35%, 100% 35%, 68% 57%, 83% 100%, 50% 70%, 17% 100%, 32% 57%, 0 36%, 39% 35%)",
                  height: "100px",
                  width: "100px",
                  x: "10px",
                  y: "10px",
                  background: "whitesmoke",
                  zIndex:0
                },
              })
            );
          }}
        >
          <Icon img={Star} desc="Star" />
        </div>
        <div
          onClick={() => {
            dispatch(
              addShape({
                shape: {
                  category: "sticker",
                  style: "Square",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  height: "100px",
                  width: "100px",
                  x: "10px",
                  y: "10px",
                  background: "whitesmoke",
                  zIndex:0
                },
              })
            );
          }}
        >
          <Icon img={square} desc="Square" />
        </div>
        {/* <FontSize /> */}
        <ColorPalette />
        {/* <div className="hex-code">
          <p>#000</p>
        </div> */}
        {/* <div style={{ marginLeft: "8px", display: "flex" }}>
          <img
            src={squareBorder}
            alt=""
            style={{
              margin: "0px 3px",
              border: "Solid black 1px",
              padding: "3px",
            }}
          />
          <img
            src={octagonBorder}
            alt=""
            style={{
              margin: "0px 3px",
              border: "Solid black 1px",
              padding: "3px",
            }}
          />
          <img
            src={circularBorder}
            alt=""
            style={{
              margin: "0px 3px",
              border: "Solid black 1px",
              padding: "3px",
            }}
          />
        </div> */}
        <div className="ZindexBtns">
        <button onClick={()=> dispatch({
          type: "EDIT_SHAPE_ZINDEX",
          payload: {
            pageIndex: editor.activePage,
            elementIndex: editor.activeElementIndex,
            index:data[editor.activePage].shapes[editor.activeElementIndex].zIndex+1,
          },
        })}>increment</button>
        <button onClick={()=> dispatch({
          type: "EDIT_SHAPE_ZINDEX",
          payload: {
            pageIndex: editor.activePage,
            elementIndex: editor.activeElementIndex,
            index:data[editor.activePage].shapes[editor.activeElementIndex].zIndex-1
          },
        })}>Decrement</button>
        <span> {data[editor.activePage].shapes[editor.activeElementIndex].zIndex || 0 } </span>
      </div>
      </div>
    </>
  );
};

export default ShapesTools;
