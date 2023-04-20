import React from 'react';
import Icon from "../helper/Icon";
import {
  twoDocs,
  addNew,
  deletePic,
  download,
  position,
  share,
} from "../../../Image/header/pic";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  clonePage,
  addPage,
  deletePage,
  getPageFromTemplate,
  addToPage,
} from "../../../../../../../../redux/actions/pageActions";
import { useDispatch, useSelector } from "react-redux";
import HtmlTooltip from "../../../Commons/HtmlTooltip";
const OtherTools = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.projects.pages);
  const [searchParams, setSearchParams] = useSearchParams();
  const [popUp, setPopUp] = useState(localStorage.getItem("popUp"));

  return (
    // <div
    //   className="other-tools flex"
    //   onClick={() => {
    //     console.log("clicked");
    //     dispatch(clonePage());
    //   }}
    // >
    //   <Icon img={addNew} desc="Add_Page" left="-5px" />
    //   <Icon img={twoDocs} desc="Copy" />
    //   <Icon img={deletePic} desc="Delete" />
    //   <Icon img={preview} desc="Preview" />
    //   <Icon img={download} desc="Download" />
    //   <Icon img={share} desc="Share" />
    // </div>
    popUp === "enabled" && searchParams.get("popUp") === "popUp4" ? (
      <HtmlTooltip
        open
        arrow
        placement="bottom-end"
        title={
          <div className="tooltip_container">
            <p className="tooltip_text">
              Easy access to Add page, Duplicate, Delete, Preview, Downlaod your
              designs
            </p>
            <div className="tooltip_button_container">
              <button
                className="tooltip_skip_button"
                onClick={() => {
                  setPopUp(localStorage.setItem("popUp", "disabled"));
                }}
              >
                Skip
              </button>
              <button
                className="tooltip_next_button"
                onClick={() => {
                  setSearchParams({ popUp: "popUp5" });
                }}
              >
                Next
              </button>
            </div>
          </div>
        }
      >
        <div
          className="other-tools flex"
          style={{
            display: "flex",
            alignItems: "center",

            marginRight: "30px",
          }}
        >
          <div
            onClick={() => {
              dispatch(addToPage());
              dispatch({
                type: "SET_CURRENT_PAGE",
                payload: currentPage.length,
              });

              console.log(1);
              dispatch({
                type: "SET_ACTIVE_TOOL",
                payload: {
                  activeTool: "Dimension-Tools",
                  activePage: currentPage.length,
                  activeElementType: "page",
                  activeElementIndex: 0,
                },
              });
              console.log("adding page");
            }}
          >
            <Icon img={addNew} desc="Add_Page" left="-5px" />
          </div>
          <div
            onClick={() => {
              console.log("clonePage page");
              dispatch(clonePage());
            }}
          >
            <Icon img={twoDocs} desc="Copy" />
          </div>
          <div
            onClick={() => {
              console.log("deleting page");
              dispatch(deletePage());
            }}
          >
            <Icon img={deletePic} desc="Delete" />
          </div>
          <Icon img={position} desc="Position" />
          <Icon img={download} desc="Download" />
          <Icon img={share} desc="Share" />
        </div>
      </HtmlTooltip>
    ) : (
      <div
        className="other-tools flex"
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "30px",
        }}
      >
        <div
          onClick={() => {
            dispatch(addToPage());
            dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage.length });

            console.log(1);
            dispatch({
              type: "SET_ACTIVE_TOOL",
              payload: {
                activeTool: "Dimension-Tools",
                activePage: currentPage.length,
                activeElementType: "page",
                activeElementIndex: 0,
              },
            });
            console.log("adding page");
          }}
        >
          <Icon img={addNew} desc="Add_Page" left="-5px" />
        </div>
        <div
          onClick={() => {
            console.log("clonePage page");
            dispatch(clonePage());
          }}
        >
          <Icon img={twoDocs} desc="Copy" />
        </div>
        <div
          onClick={() => {
            console.log("deleting page");
            dispatch(deletePage());
          }}
        >
          <Icon img={deletePic} desc="Delete" />
        </div>
        <Icon img={position} desc="Position" />
        <Icon img={download} desc="Download" />
        <Icon img={share} desc="Share" />
      </div>
    )
  );
};

export default OtherTools;
