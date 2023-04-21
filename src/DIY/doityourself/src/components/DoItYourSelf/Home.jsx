import React, { useRef, useState } from "react";

import "./Home.css";
import { useSelector, useDispatch } from "react-redux";

import SidePanel from "./SideBar/SidePanel";
import RightSidePanel from "./SideBar/RightSidePanel";
import { Page } from "./Canvas";
import Editor from "./Canvas/header/Editor";

const Home = () => {
  const openSlider = useSelector((state) => state.projects.sideSlider);

  const [preview, setPreview] = useState(true);
  function previewClicked() {
    setPreview(!preview);
  }

  const pageRef = useRef(null);
  const pageContent = useRef([]);
  const [pagesHistory, setPagesHistory] = useState({
    page: [],
    type: "history",
    index: 0,
  });

  return (
    <div className="diy-canvas-home">
      <div
        className="diy-home-left"
        style={{ width: openSlider ? "320px" : "85px" }}
      >
        {preview && <SidePanel />}
      </div>
      <div
        className="diy-home-right"
        style={{
          width: openSlider ? "calc(100vw - 320px)" : "calc(100vw - 85px)",
        }}
      >
        <div className="editor-box">
          {preview && (
            <Editor
              pagesHistory={pagesHistory}
              setPagesHistory={setPagesHistory}
            />
          )}
        </div>

        <div className="diy-right-bottom">
          <div
            className="diy-main-area"
            style={{
              width: openSlider ? "calc(100vw - 440px)" : "calc(100vw - 205px)",
            }}
          >
            <Page
              previewClicked={previewClicked}
              // HideNavbar={HideNavbar}
              pageRef={pageRef}
              pageContent={pageContent}
              pagesHistory={pagesHistory}
              setPagesHistory={setPagesHistory}
            />
          </div>
          <div className="diy-right-panel-box">
            <RightSidePanel />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
