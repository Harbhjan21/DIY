import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import { IonIcon } from "@ionic/react";
import { syncOutline } from "ionicons/icons";

import ReactCrop from "react-image-crop";
import { Rotate_Img } from "../../../../../../redux/actions/pageActions";

const StyledRnd = styled(Rnd)`
  &:hover {
    border: 1px solid blue;
  }
  &:hover .show {
    visibility: visible;
  }
`;

const ImageComp = React.forwardRef(
  ({ img, setRefVal, index, pageIndex, ele, show, setShow }) => {
    console.log(ele.rotate, "ele rotate");
    const dispatch = useDispatch();
    let ref = useRef(null);

    const Image = styled.div`
      width: 100%;
      height: 100%;
      background-image: url(${img});
      background-size: 100% 100%;
      transform: ${({ rotationAngle }) => `rotate(${rotationAngle}deg)`};
    `;
    // transform: ${({ rotationAngle }) => `rotate(${rotationAngle}deg)`};
    //transform: ${ele?.rotate ? `rotate(${ele.rotate}deg)` : "rotate(0deg)"};
    useEffect(() => {
      if (!(ref === null)) {
        setRefVal(ref);
      }
    }, [ref]);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const [rotationAngle, setRotationAngle] = useState(0);
    const [notshow, setnotshow] = useState(true);
    const elementRef = useRef(null);
    const [angle, setangle] = useState(false);

    const handleMouseDown = (event) => {
      setIsMouseDown(true);
    };

    useEffect(() => {
      const handleMouseUp = () => {
        setIsMouseDown(false);

        {
          rotationAngle &&
            dispatch(Rotate_Img({ rotate: Number(rotationAngle.toFixed(2)) }));
        }
      };
      if (ele.rotate != 0) {
        setangle(true);
      }

      const handleMouseMove = (event) => {
        if (isMouseDown) {
          const element = elementRef.current;
          // const element = document.getElementById("rotate");
          const rect = element.getBoundingClientRect();

          // Calculate the mouse position relative to the element's center
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const mouseX = event.clientX - centerX;
          const mouseY = event.clientY - centerY;

          // Calculate the angle of rotation
          const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

          // Update the rotation angle and position in the state
          setRotationAngle(angle);
          // dispatch(Rotate_Img({ rotate: Number(angle.toFixed(2)) }));
        }
      };
      if (show) {
        const targetElement = document.getElementById("target-element");

        // targetElement.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
          // targetElement.removeEventListener("mousedown", handleMouseDown);
          document.removeEventListener("mouseup", handleMouseUp);
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, [isMouseDown, ele.rotate, rotationAngle]);

    return (
      <>
        <div
          style={{
            width: `100%`,
            height: `100%`,
            backgroundImage: `url(${img})`,
            backgroundSize: `100% 100%`,
            transform: `rotate(${angle ? ele.rotate : rotationAngle}deg)`,
          }}
          // ref={ref}

          ref={elementRef}
          //rotationAngle={rotationAngle}
          onMouseDown={(e) => {
            /*  dispatch({
            type: "SET_ACTIVE_TOOL",
            payload: { activeTool: "Image-Tools" },
          });*/
            // e.stopPropagation();
            // setShow(true);

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
        </div>
        {show && (
          <div
            tabIndex={0}
            id="target-element"
            onMouseDown={(e) => {
              e.stopPropagation();
              console.log("overrrrr");
              handleMouseDown();
              setangle(false);
              dispatch(Rotate_Img({ rotate: 0 }));
            }}
            style={{
              marginTop: "30px",

              // marginLeft: "100px",

              //  transform: `rotate(${degree}deg)`,
            }}
            onBlur={() => {
              setShow(false);
            }}
          >
            <IonIcon icon={syncOutline} style={{ fontSize: "24px" }} />
          </div>
        )}
      </>
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

  let file = URL.createObjectURL(ele.file);

  function onResize(event, direction, ref, delta, indexs) {
    const { width, height, x, y, backgroundColor } = ref.style;
    pageContent.current[pageIndex].images[index].height = height;
    pageContent.current[pageIndex].images[index].width = width;
    pageContent.current[pageIndex].images[index].x = x;
    pageContent.current[pageIndex].images[index].y = y;
  }

  function onDragStop(e, d, indexs) {
    // setShow(false);
    const { x, y } = d;
    dispatch({
      type: "SET_DIY_FORM_LOGO",
      payload: {
        x: x,
        y: y,
        width: pageContent.current[pageIndex].images[index].width,
        height: pageContent.current[pageIndex].images[index].height,
      },
    });
    pageContent.current[pageIndex].images[index].x = x;
    pageContent.current[pageIndex].images[index].y = y;
  }
  function getNumber(str) {
    let a = typeof str === "string" ? str.split("p") : str;
    if (typeof a === "number") return a;
    let num = Number(a[0]);
    return num;
  }

  const [show, setShow] = useState(false);
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
          setShow(true);
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
          // tabIndex={0}
          img={file}
          setRefVal={setRefVal}
          index={index}
          pageIndex={pageIndex}
          ele={ele}
          show={show}
          setShow={setShow}
        />

        {/* <div>
          <img src={file}></img>
      </div> */}
      </StyledRnd>
      {/*show && (
        <div
          id="target-element"
          style={{
            marginTop: "30px",
            // marginLeft: "100px",
            background: "grey",
            height: "20px",
            width: "50px",
            //  transform: `rotate(${degree}deg)`,
          }}
        >
          rotate
        </div>
        )*/}
    </>
  );
}
