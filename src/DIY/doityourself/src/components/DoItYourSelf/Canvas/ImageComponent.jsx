import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import { useDispatch, useSelector } from "react-redux";
import {
  setLogo,
  updatePage,
} from "../../../../../../redux/actions/pageActions";
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
          // let str = "Image-Tools";
          // setActiveTool(str);
          // setActiveIndex(`${index}`);
          dispatch({
            type: "SET_ACTIVE_TOOL",
            payload: {
              activeTool: "Image-Tools",
              activePage: pageIndex,
              activeElementType: "logos",
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

const ImageComponent = React.forwardRef(
  ({
    pageContent,
    pageIndex,
    setActiveIndex,
    ActiveIndex,
    ele,
    index,
    activeTool,
    setActiveTool,
  }) => {
    const [ref, setRefVal] = useState(null);
    function onResize(event, direction, ref, delta, indexs) {
      const { width, height, x, y, backgroundColor } = ref.style;
      pageContent.current[pageIndex].logos[index].height = height;
      pageContent.current[pageIndex].logos[index].width = width;
      pageContent.current[pageIndex].logos[index].x = x;
      pageContent.current[pageIndex].logos[index].y = y;
    }

    function onDragStop(e, d, indexs) {
      const { x, y } = d;
      console.log("dddddddddddddddddddddddd", x, y);
      pageContent.current[pageIndex].logos[index].x = x;
      pageContent.current[pageIndex].logos[index].y = y;
    }

    function getNumber(str) {
      let a = typeof str === "string" ? str.split("p") : str;
      if (typeof a === "number") return a;
      let num = Number(a[0]);
      return num;
    }
    console.log(ele);
    return (
      <>
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
          lockAspectRatio={true}
          key={ele._id}
        >
          <ImageComp
            img={ele.logoURL}
            setRefVal={setRefVal}
            index={index}
            pageIndex={pageIndex}
            ele={ele}
          />
        </StyledRnd>
      </>
    );
  }
);

export default ImageComponent;
