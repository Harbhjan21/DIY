import React, { useRef, useEffect } from "react";
import { Rnd } from "react-rnd";
import HeaderPage from "./header/HeaderPage";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const StyledRnd = styled(Rnd)`
  &:hover {
    border: 1px solid blue;
  }
  &:hover .show {
    visibility: visible;
  }
`;
export default function StickerComponent({
  element,
  activeTool,
  setActiveTool,
  index,
  ActiveIndex,
  setActiveIndex,
  pageContent,
  pageIndex,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("shape-------------------- ", element);
  }, []);

  let ref = useRef(null);

  function onResize(event, direction, ref, delta, indexs) {
    const { width, height, x, y, backgroundColor } = ref.style;
    console.log(width, " x ", height);
    // dispatch({
    //   type: "SET_LOGO_DIMENSIONS",
    //   payload: {
    //     width:width,
    //     height:height,
    //   },
    // });
    pageContent.current[pageIndex].shapes[index].height = height;
    pageContent.current[pageIndex].shapes[index].width = width;
    //pageContent.current[pageIndex].shapes[index].x = x;
    //pageContent.current[pageIndex].shapes[index].y = y;
  }
 
  function onDragStop(e, d, indexs) {
    const { x, y } = d;
    // console.log(d);
    // console.log(
    //   pageContent.current[pageIndex].logos.filter((x) => x?.category)
    // );
    dispatch({
      type: "SET_DIY_FORM_LOGO",
      payload: {
        x: x,
        y: y,
        width: pageContent.current[pageIndex].shapes[index].width ,
        height:pageContent.current[pageIndex].shapes[index].height,
      },
    });
  
    pageContent.current[pageIndex].shapes[index].x = x;
    pageContent.current[pageIndex].shapes[index].y = y;
  }

  function getNumber(str) {
    // console.log(str, "--", typeof str);
    let a = typeof str === "string" ? str.split("p") : str;
    if (typeof a === "number") return a;
    let num = Number(a[0]);
    return num;
  }
  return (
    <>
      {/* {activeTool === "Shapes-Tools" && ActiveIndex == index ? (
        <HeaderPage
          index={index}
          ele={element}
          refValue={ref}
          tool={activeTool}
        />
      ) : null} */}
      <StyledRnd
        className="d-flex"
        default={{
          x: getNumber(element.x),
          y: getNumber(element.y),
          width: getNumber(element.width),
          height: getNumber(element.height),
        }}
        bounds="parent"
        onResize={onResize}
       // onResizeStop={onResizeStop}
        onDragStop={onDragStop}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        // onClick={() => {
        //   // let str = "Shapes-Tools";
        //   // setActiveTool(str);
        //   // setActiveIndex(`${index}`);
        //   dispatch({
        //     type: "SET_ACTIVE_TOOL",
        //     payload: { activeTool: "Shapes-Tools" },
        //   });
        // }}
        lockAspectRatio={true}
      >
        <div
          style={{
            backgroundColor: element.background,
            clipPath: element.clipPath,
            height: "inherit",
            width: "inherit",
            x:"inherit",
            y:"inherit"
          }}
          ref={ref}
          onMouseUp={() => {
            dispatch({
              type: "SET_ACTIVE_TOOL",
              payload: {
                activeTool: "Shapes-Tools",
                activePage: pageIndex,
                activeElementType: "shapes",
                activeElementIndex: index,
              },
            });
          }}
        ></div>
      </StyledRnd>
    </>
  );
}
