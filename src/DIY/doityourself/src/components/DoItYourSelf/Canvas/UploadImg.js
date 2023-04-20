import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import HeaderPage from "./header/HeaderPage";
const StyledRnd = styled(Rnd)`
  &:hover {
    border: 1px solid blue;
  }
  &:hover .show {
    visibility: visible;
  }
`;

const ImageComp = React.forwardRef(
  ({ img, setRefVal, index, pageIndex, ele }) => {
    const dispatch = useDispatch();
    let ref = useRef(null);
    const Image = styled.div`
      width: 100%;
      height: 100%;
      background-image: url(${img});
      background-size: 100% 100%;
      transform: ${ele?.rotate ? `rotate(${ele.rotate}deg)` : "rotate(0deg)"};
    `;
    useEffect(() => {
      if (!(ref === null)) {
        setRefVal(ref);
      }
    }, [ref]);

    return (
      <Image
        ref={ref}
        onMouseUp={() => {
          dispatch({
            type: "SET_ACTIVE_TOOL",
            payload: { activeTool: "Image-Tools" },
          });
          dispatch({
            type: "SET_ACTIVE_TOOL",
            payload: {
              activeTool: "Image-Tools",
              activePage: pageIndex,
              activeElementType: "image",
              activeElementIndex: index,
            },
          });
        }}
      >
        {JSON.stringify}
      </Image>
    );
  }
);

export default function UploadImg({
  index,
  ele,
  activeTool,
  setActiveTool,
  ActiveIndex,
  setActiveIndex,
  pageContent,
  pageIndex,
}) {
  const dispatch = useDispatch();
  const [ref, setRefVal] = useState(null);
  console.log(ele.file);
  let file = URL.createObjectURL(ele.file);

  function onResize(event, direction, ref, delta, indexs) {
    const { width, height, x, y, backgroundColor } = ref.style;
    pageContent.current[pageIndex].images[index].height = height;
    pageContent.current[pageIndex].images[index].width = width;
    pageContent.current[pageIndex].images[index].x = x;
    pageContent.current[pageIndex].images[index].y = y;
  }

  function onDragStop(e, d, indexs) {
    const { x, y } = d;
    pageContent.current[pageIndex].images[index].x = x;
    pageContent.current[pageIndex].images[index].y = y;
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
      {/* {activeTool === "Image-Tools" && ActiveIndex == index ? (
        <HeaderPage index={index} ele={ele} refValue={ref} tool={activeTool} />
      ) : null} */}

      <StyledRnd
        className="d-flex"
        default={{
          x: getNumber(ele.x),
          y: getNumber(ele.y),
          width: getNumber(ele.width),
          height: getNumber(ele.height),
          backgroundColor: "black",
        }}
        bounds="parent"
        onResize={onResize}
        onDragStop={onDragStop}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        // onClick={() => {
        //   // let str = "Image-Tools";
        //   // setActiveTool(str);
        //   // setActiveIndex(`${index}`);
        //   dispatch({
        //     type: "SET_ACTIVE_TOOL",
        //     payload: { activeTool: "Image-Tools" },
        //   });
        // }}
        lockAspectRatio={true}
        key={ele._id}
      >
        <ImageComp
          img={file}
          setRefVal={setRefVal}
          index={index}
          pageIndex={pageIndex}
          ele={ele}
        />
        {/* <div>
          <img src={file}></img>
        </div> */}
      </StyledRnd>
    </>
  );
}
