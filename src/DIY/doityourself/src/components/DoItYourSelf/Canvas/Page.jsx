import React, { useState, useRef, useEffect, useContext } from "react";
import "./styles/Page.css";
import "./styles/MainContainer.css";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import {
  getTemplate,
  setText,
  updatePage,
} from "../../../../../../redux/actions/pageActions";
import ImageComponent from "./ImageComponent";
import Text from "./Text";
import Download from "./Download";
import SizeReferences from "./SizeReferences";
import "../SideBarSlider/styles/frames.css";
import HeaderPage from "./header/HeaderPage";
import StickerComponent from "./StickerComponent";
import UploadImg from "./UploadImg";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Page = ({
  pageRef,
  pageContent,
  pagesHistory,
  setPagesHistory,
  previewClicked,
  HideNavbar,
}) => {
  const data = useSelector((state) => {
    return state.projects;
  });

  let pageIndex = data.currentPage;
  pageContent.current = data.pages;
  // console.log("pageIndex test", pageIndex);
  let pageData = data.pages ? data.pages[pageIndex] : [];
  let page = !pagesHistory.page.length
    ? pageData
    : pagesHistory.page[pagesHistory.index - 1];
  // console.log("page", pagesHistory.page[pagesHistory.index - 1], pageData);
  let color = data ? data.backgroundColor : "black";
  console.log("pageeeeeeeee", page);
  console.log("pageindexxxxx", pageIndex);

  let height =
    data?.pages && data?.pages[pageIndex]?.shapeCanvas
      ? data?.pages[pageIndex]?.shapeCanvas.split("x")[0]
      : 400;

  let width =
    data?.pages && data.pages[pageIndex]?.shapeCanvas
      ? data.pages[pageIndex].shapeCanvas.split("x")[1]
      : 400;
  // var h, w;

  // if (height >= width) {
  //   h = 400;
  //   w = (400 * width) / height;
  // } else {
  //   w = 400;
  //   h = (400 * height) / width;
  // }

  var h, w;
  // var frameHeight = 1, frameWidth = 1;
  const [frameHeight, setFrameHeight] = useState(1);
  const [frameWidth, setFrameWidth] = useState(7);
  useEffect(() => {
    setFrameHeight(
      document?.querySelector(".Page_main_container")?.offsetHeight
    );
    setFrameWidth(document?.querySelector(".Page_main_container")?.offsetWidth);

    // if (frameHeight / frameWidth > height / width) {
    //   w = 0.9 * frameWidth;
    //   h = (height * w) / width;
    //   console.log(w, h);
    // } else {
    //   h = 0.9 * frameHeight;
    //   w = (width * h) / height;
    //   console.log(w, h);
    // }
  }, [page]);

  // const frameHeight = document.querySelector(
  //   ".Page_main_container"
  // ).offsetHeight;
  // const frameWidth = document.querySelector(".Page_main_container").offsetWidth;

  if (frameHeight / frameWidth > height / width) {
    w = 0.9 * frameWidth;
    h = (height * w) / width;
    console.log(w, h);
    localStorage.setItem(
      "canvasDimension",
      JSON.stringify({ width: w, height: h })
    );
  } else {
    h = 0.9 * frameHeight;
    w = (width * h) / height;
    // console.log(w, h);
    localStorage.setItem(
      "canvasDimension",
      JSON.stringify({ width: w, height: h })
    );
  }

  const Container = styled.div`
    position: relative;
    height: ${h}px;
    width: ${w}px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: ${data?.pages && data.pages[pageIndex]?.backgroundColor
      ? data.pages[pageIndex].backgroundColor
      : "white"};
    box-shadow: 0 0 10px 1px silver;
    overflow: hidden;
  `;
  const [ActiveIndex, setActiveIndex] = useState("-1");

  const toolsAvailable = {
    image: "Image-Tools",
    text: "Font-Tools",
    canvas: "Dimension-Tools",
    shapes: "Shapes-Tools",
  };

  /* data?.pages?.forEach((element) => {
    element?.logos?.reverse();
  });*/

  const [activeTool, setActiveTool] = useState(toolsAvailable.canvas);
  const dispatch = useDispatch();

  const test = useSelector((state) => state.projects.editor);
  const [hide, setHide] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  function SetHide() {
    setHide(!hide);
  }
  function backButtonClicked() {
    return hide;
  }
  function SetShowPopUp() {
    setShowPopUp(!showPopUp);
  }
  return (
    page && (
      <>
        <div
          className="Page_main_container"
          style={{
            backgroundColor: "whitesmoke",
            height: "inherit",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onMouseDown={(event) => {
              // console.log("my down movement occur");
              // event.stopPropagation();
              let str = "Dimesion-Tools";
              setActiveTool(str);
              setActiveIndex(pageIndex);
              dispatch({
                type: "SET_ACTIVE_TOOL",
                payload: {
                  activeTool: "Dimension-Tools",
                  activePage: ActiveIndex,
                },
              });
            }}
            // onClick={() => {
            //   console.log("my click movement occur");
            //   dispatch({
            //     type: "SET_ACTIVE_TOOL",
            //     payload: {
            //       activeTool: "Shapes-Tools",
            //       activePage: data.currentPage,
            //       activeElementType: "page",
            //       activeElementIndex: 0,
            //     },
            //   });
            // }}
          >
            {/* {activeTool === "Dimesion-Tools" ? (
            <HeaderPage
              index={pageIndex}
              ele={page}
              refValue={pageRef}
              tool={activeTool}
              setHeightWidth={setHeightWidth}
              heightWidth={heightWidth}
            />
          ) : null} */}

            <div
              style={{
                position: "relative",
                height: `${h}px`,
                width: `${w}px`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                backgroundColor: `${
                  data?.pages && data.pages[pageIndex]?.backgroundColor
                    ? data.pages[pageIndex].backgroundColor
                    : "white"
                }`,

                overflow: "hidden",
              }}
            >
              {data.pages &&
                page.logos &&
                page.logos.map((ele, index) => {
                  // mapping the logos to canvas
                  return (
                    <ImageComponent
                      index={index}
                      ele={ele}
                      key={index}
                      activeTool={activeTool}
                      setActiveTool={setActiveTool}
                      toolsAvailable={toolsAvailable}
                      setActiveIndex={setActiveIndex}
                      ActiveIndex={ActiveIndex}
                      pageContent={pageContent}
                      pageIndex={pageIndex}
                      onClick={() => {
                        console.log("inside the logos container...");
                      }}
                    />
                  );
                })}

              {data.pages &&
                page.shapes &&
                data.pages[pageIndex].shapes.map((ele, index) => {
                  // mapping the shapes to canvas
                  return (
                    <StickerComponent
                      index={index}
                      element={ele}
                      key={index}
                      activeTool={activeTool}
                      setActiveTool={setActiveTool}
                      ActiveIndex={ActiveIndex}
                      setActiveIndex={setActiveIndex}
                      pageContent={pageContent}
                      pageIndex={pageIndex}
                    />
                  );
                })}

              {data.pages &&
                data.pages[pageIndex]?.images &&
                data.pages[pageIndex].images.map((ele, index) => (
                  <UploadImg
                    index={index}
                    ele={ele}
                    key={index}
                    activeTool={activeTool}
                    setActiveTool={setActiveTool}
                    ActiveIndex={ActiveIndex}
                    setActiveIndex={setActiveIndex}
                    pageContent={pageContent}
                    pageIndex={pageIndex}
                  />
                ))}

              {page.texts &&
                page.texts.map((ele, index) => {
                  // console.log("ele index", index, ele.text);
                  return (
                    <Text
                      setText={setText}
                      index={index}
                      ele={ele}
                      color={color}
                      key={index}
                      activeTool={activeTool}
                      setActiveTool={setActiveTool}
                      toolsAvailable={toolsAvailable}
                      setActiveIndex={setActiveIndex}
                      ActiveIndex={ActiveIndex}
                      pageContent={pageContent}
                      pageIndex={pageIndex}
                      pagesHistory={pagesHistory}
                      setPagesHistory={setPagesHistory}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        {hide && (
          <button
            style={{
              position: "absolute",
              width: "24px",
              height: "0px",
              left: "33px",
              top: "18px",
            }}
            onClick={() => {
              previewClicked();
              HideNavbar();
              SetHide();
            }}
          >
            <ArrowBackIcon />
          </button>
        )}

        {/* <p
          className="sizereferenceslink"
          onClick={() => {
            console.log("p clicked");
            SetShowPopUp();
          }}
        >
          Click here to see size references
        </p> */}

        {/* {showPopUp && <SizeReferences SetShowPopUp={SetShowPopUp} />}
        <Download
          pageRef={pageRef}
          previewClicked={previewClicked}
          SetHide={SetHide}
          HideNavbar={HideNavbar}
          backButtonClicked={backButtonClicked}
        /> */}
      </>
    )
  );
};

export default Page;

// import React, { useRef } from "react";
// import "./styles/Page.css";
// import { useSelector, useDispatch } from "react-redux";
// import ImageComponent from "./ImageComponent";
// import styled from "styled-components";

// export default function Page() {
//   const data = useSelector((state) => state.projects);
//   console.log(data);
//   const pageRef = useRef(null);
//   const pageContent = useRef([]);
//   pageContent.current = data.pages;

//   let height = data.pages[data.currentPage]?.shapeCanvas
//     ? data.pages[data.currentPage].shapeCanvas.split("x")[0]
//     : "400";
//   let width = data.pages[data.currentPage]?.shapeCanvas
//     ? data.pages[data.currentPage].shapeCanvas.split("x")[1]
//     : "400";

//   const Container = styled.div`
//     // position: absolute;
//     height: 400px;
//     width: 400px;
//     // border: 1px solid red;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 1;
//     background-color: white;
//     background-color: ${data.pages[data.currentPage]
//       ? data.pages[data.currentPage].backgroundColor
//       : "white"};
//     // box-shadow: 0 0 10px gray;
//     overflow: hidden;
//     border: solid black 1px;
//   `;

//   return (
//     <div className="page">
//       {/* <div
//         className="canvas"
//         ref={pageRef}
//         style={{
//           height: height >= width ? "400px" : `auto`,
//           width: height >= width ? `auto` : "400px",
//           aspectRatio: width / height,
//         }}
//       > */}
//       <Container ref={pageRef}>
//         {data.pages[data.currentPage] &&
//           data.pages[data.currentPage].logos.map((ele, index) => (
//             <ImageComponent
//               index={index}
//               ele={ele}
//               key={ele.index}
//               // activeTool={activeTool}
//               // setActiveTool={setActiveTool}
//               // toolsAvailable={toolsAvailable}
//               // setActiveIndex={setActiveIndex}
//               // ActiveIndex={ActiveIndex}
//               pageContent={pageContent}
//               pageIndex={data.currentPage}
//             />
//           ))}
//       </Container>
//     </div>
//     // </div>
//   );
// }
