import React, { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";
import { Delete } from "@mui/icons-material";
import {
  removeText,
  updateText,
} from "../../../../../../redux/actions/pageActions";
import {
  setText,
  updatePage,
} from "../../../../../../redux/actions/pageActions";
import HeaderPage from "./header/HeaderPage";
import { ReactTransliterate } from "react-transliterate";
// import "react-transliterate/dist/index.css";

import TextareaAutosize from "react-textarea-autosize";
import { setRef } from "@mui/material";
const StyledRnd = styled(Rnd)`
  &:hover {
    border: 1px solid blue;
  }
  &:hover .show {
    visibility: visible;
  }
`;
const TextDisplayer = React.forwardRef(
  ({
    ActiveIndex,
    setActiveIndex,
    index,
    ele,
    color,
    activeTool,
    setActiveTool,
    pageContent,
    pageIndex,
    pagesHistory,
    setPagesHistory,
  }) => {
    // console.log(activeTool,"SDsddddddddddddddd");
    const showHeader = useRef(false);

    var TextObject = ele;

    let dispatch = useDispatch();
    const currentPage = useSelector((state) => state.projects.pages);
    const [ref, setRefVal] = useState(null);
    useEffect(() => {
      // console.log(TextObject.current);
    }, []);
    // const captureText = (props, index) => {
    //   // console.log(props, "---------------");
    //   dispatch(setText({ props, index: index, pageIndex: 0 }));
    // };
    function onResize(event, direction, ref, delta, indexs) {
      const { width, height, x, y } = ref.style;
      pageContent.current[pageIndex].texts[index].height = height;
      pageContent.current[pageIndex].texts[index].width = width;
      pageContent.current[pageIndex].texts[index].x = x;
      pageContent.current[pageIndex].texts[index].y = y;
    }

    function onDragStop(e, d, indexs) {
      const { x, y } = d;
      dispatch({
        type: "SET_DIY_FORM_TEXT_MARGIN",
        payload: {
          x: x,
          y: y,
        },
      });
      pageContent.current[pageIndex].texts[index].x = x;
      pageContent.current[pageIndex].texts[index].y = y;
    }
    function getNumber(str) {
      // console.log(str, "--", typeof str);
      let a = typeof str === "string" ? str.split("p") : str;
      if (typeof a === "number") return a;
      let num = Number(a[0]);
      return num;
    }
    /*    React.useEffect(() => {
      //   const onMouseDown = (e) => {
      //     console.log("onMouseDown");
      //   };

      //   const onMouseMove = (e) => {
      //     console.log("onMouseMove");
      //   };
      const onMouseUp = (e) => {
        console.log("onMouseUp");
        if (pagesHistory.type === "undo") {
          setPagesHistory({
            ...pagesHistory,
            index: pagesHistory.index - 1,
          });
        } else if (pagesHistory.type === "redo") {
          setPagesHistory({
            ...pagesHistory,
            index: pagesHistory.index + 1,
          });
        } else {
          setPagesHistory({
            ...pagesHistory,
            page: [...pagesHistory.page, ...pageContent.current],
            index: pagesHistory.index + 1,
          });
        }
      };

      //   document.addEventListener("mousedown", onMouseDown);
      //   // document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      //   // document.addEventListener("click", onClick);
      return () => {
        //     //document.removeEventListener("click", onClick);
        //     document.removeEventListener("mousedown", onMouseDown);
        //     // document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
    }, []);
*/
    return (
      TextObject && (
        // <>{console.log(activeTool,ActiveIndex,index,"****************")}
        <>
          {/* {activeTool === "Font-Tools" && ActiveIndex == index ? (
            <HeaderPage
              index={index}
              ele={ele}
              refValue={ref}
              tool={activeTool}
              pageContent={pageContent}
              pageIndex={pageIndex}
            />
          ) : null} */}
          <StyledRnd
            className="d-flex"
            default={{ x: getNumber(ele.x), y: getNumber(ele.y) }}
            bounds="parent"
            onResize={onResize}
            onDragStop={onDragStop}
            onMouseDown={(event) => {
              event.stopPropagation();

              // console.log(pageContent.current)

              // console.log(":hello mouse is down")
              // showHeader.current=true;
              // console.log(showHeader.current);
              let str = "Font-Tools";
              setActiveTool(str);
              setActiveIndex(`${index}`);
              // dispatch(updatePage({page:pageContent.current[pageIndex]}))
            }}
            key={index}
          >
            <TextComponent
              setRefVal={setRefVal}
              TextObject={TextObject}
              index={index}
              pageIndex={pageIndex}
              info={TextObject}
              backgroundColor={color}
              ele={ele}
              ref={ref}
              key={index}
            />
          </StyledRnd>
        </>
      )
    );
  }
);

const TextComponent = React.forwardRef(
  ({
    setShowHeader,
    info,
    setRefVal,
    backgroundColor,
    index,
    selectedCol,
    TextObject,
    pageIndex,
    ele,
    ref,
  }) => {
    const text = ele.newText ? ele.newText : ele.text;
    console.log(text);
    // const [textref, settextref] = useState("");
    // settextref(text);
    const textref = text;
    console.log(textref);
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.projects.pages);
    let weight = info.isBold ? 900 : 500;
    let style = info.isItalic ? "italic" : "normal";
    let textdecoration = info.underline ? "underline" : "none";
    let width = "200px";
    const TextField = styled.div`
      font-family: ${info.family};
      font-size: ${info.fontSize}px;
      font-weight: ${weight};
      font-style: ${style};
      color: ${info.color};
      background-color: rgba(${backgroundColor}, 1);
      letter-spacing: ${info.letterSpacing};
      text-decoration: ${textdecoration};
      width${width};
      text-align: ${info.align || "right"};
    `;
    const [isHover, setHover] = useState(false);
    const deleteShape = {
      cursor: "pointer",
      // visibility: isHover ? "inherit" : "collapse",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    useEffect(() => {
      if (!(ref === null)) {
        setRefVal(ref);
      }
    }, [ref]);
    const handleChange = (evt) => {
      console.log("handle change");
      //textref = evt.target.value;
      dispatch(updateText({ Utext: evt.target.value }));
    };

    /* const handleBlur = () => {
      console.log(ref.current);
      console.log("on blure");
      dispatch(updateText({ Eindex: index, Utext: ref.current }));
    };*/

    return (
      <div>
        <ContentEditable
          onMouseDown={(e) => {
            console.log("in dispatch of text");
            dispatch({
              type: "SET_ACTIVE_TOOL",
              payload: {
                activeTool: "Font-Tools",
                activePage: pageIndex,
                activeElementType: "font",
                activeElementIndex: index,
              },
            });
          }}
          html={textref}
          // onBlur={handleBlur}
          onChange={handleChange}
        />
        <div
          className="delete"
          style={deleteShape}
          onMouseDown={(e) => {
            e.stopPropagation();

            dispatch({
              type: "SET_CURRENT_PAGE",
              payload: currentPage.length,
            });
            dispatch({
              type: "SET_ACTIVE_TOOL",
              payload: {
                activeTool: "Dimension-Tools",
                activePage: currentPage.length,
                activeElementType: "page",
                activeElementIndex: 0,
              },
            });
            dispatch(removeText({ Eindex: index }));
          }} // used to delete shape object
        >
          <Delete />
        </div>
      </div>
    );
  }
);
export default TextDisplayer;

// onClick={() => {
//   dispatch({
//     type: "EDIT_TEXT",
//     payload: {
//       fontSize: item.fontSize,
//       fontWeight: item.fontWeight,
//       fontFamily: item.fontFamily,
//       activePage: active.activePage,
//       activeElement: active.activeElementIndex,
//     },
//   });
// }}
