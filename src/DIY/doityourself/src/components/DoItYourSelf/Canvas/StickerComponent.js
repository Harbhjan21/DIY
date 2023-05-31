import Icon from "./header/helper/Icon"; //"../../header/helper";
import { deletePic } from "../Image/header/pic"; //'../../../../../doityourself/src/components/DoItYourSelf/Image/header/pic'; //'../../../../../Image/header/pic';
import React, { useRef, useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import HeaderPage from "./header/HeaderPage";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeShape } from "../../../../../../redux/actions/pageActions";
import { hover } from "@testing-library/user-event/dist/hover";
// import { Flag } from "@mui/icons-material";
import CircleIcon from "@mui/icons-material/Circle";
import { Delete } from "@mui/icons-material";
// let flag = false,
 let isFocus = false; // to change color and focus
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
  const currentPage = useSelector((state) => state.projects.pages);
  useEffect(() => {
    console.log("shape-------------------- ", element);
  }, []);

  let ref = useRef(null);

  function onResize(event, direction, ref, delta, indexs) {
    const { width, height, x, y, backgroundColor } = ref.style;
    // console.log(width, " x ", height);
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
    // flag = true;
    // console.log("flag " , flag);
    const { x, y } = d;
    // console.log(d);
    // console.log(
    //   pageContent.current[pageIndex].logos.filter((x) => x?.category)
    // );
    // element.zIndex=val; //shape tools ke inc and dcr
    dispatch({
      type: "SET_DIY_FORM_LOGO",
      payload: {
        x: x,
        y: y,
        width: pageContent.current[pageIndex].shapes[index].width,
        height: pageContent.current[pageIndex].shapes[index].height,
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
  const focusHandeller = () => {
    // object focus event to resolve color problem
    setHover(true);
    console.log(index);
    // if (flag) {
      // flag = false;
      dispatch({
        type: "SET_ACTIVE_TOOL",
        payload: {
          activeTool: "Shapes-Tools",
          activePage: pageIndex,
          activeElementType: "shapes",
          activeElementIndex: index,
        },
      });
    // }
  };
  const [isHover, setHover] = useState(false);

  const deleteShape = {
    cursor: "pointer",
    visibility: isHover ? "inherit" : "collapse",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
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
        style={{ zIndex: element.zIndex }}
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
        //   let str = "Shapes-Tools";
        //   setActiveTool(str);
        //   setActiveIndex(`${index}`);
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
            x: "inherit",
            y: "inherit",
          }}
          ref={ref}
          onClick={focusHandeller}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className="delete"
            style={deleteShape}
            onMouseDown={() => {
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
              dispatch(removeShape({ Eindex:index}));
            }} // used to delete shape object
          >
            <Delete />
          </div>
        </div>
      </StyledRnd>
    </>
  );
}
