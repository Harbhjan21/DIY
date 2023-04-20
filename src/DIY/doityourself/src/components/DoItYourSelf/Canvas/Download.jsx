import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import HtmlTooltip from "../Commons/HtmlTooltip";
import Preview from "./Images/Preview.svg";
const Download = ({
  pageRef,
  previewClicked,
  SetHide,
  HideNavbar,
  backButtonClicked,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [popUp, setPopUp] = useState(localStorage.getItem("popUp"));

  // const [preview, setPreview] = useState(false);

  const printDocumentPDF = () => {
    html2canvas(pageRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 30, 25);
      pdf.save("download.pdf");
    });
  };
  return popUp === "enabled" && searchParams.get("popUp") === "popUp5" ? (
    <HtmlTooltip
      open
      arrow
      placement="bottom-end"
      title={
        <div className="tooltip_container">
          <p className="tooltip_text">
            Hasle free process to review and place order
          </p>
          <div className="tooltip_button_container">
            <button
              className="tooltip_next_button"
              onClick={() => {
                setPopUp(localStorage.setItem("popUp", "disabled"));
              }}
            >
              Finish
            </button>
          </div>
        </div>
      }
    >
      <div
        style={{
          bottom: "5vh",
          right: "10vw",
          position: "absolute",
          zIndex: 100,
        }}
      >
        {/* <button
        style={{ fontSize: "20px" }}
        onClick={() => {
          console.log("clicked");
          printDocumentPDF();
        }}
      >
        Download
      </button> */}
        <button
          style={{
            width: "max-content",
            backgroundColor: "rgba(0, 52, 89, 1)",
            color: "white",
            border: "none",
            padding: "10px 25px",
            fontSize: "14px",
            borderRadius: "5px",
          }}
        >
          {" "}
          Review & place Order
        </button>
      </div>
    </HtmlTooltip>
  ) : (
    <div
      style={{
        bottom: "2vh",
        right: "10vw",
        position: "absolute",
        zIndex: 100,
        display: "flex",
        gap: "15px",
      }}
    >
      {/* <button
        style={{ fontSize: "20px" }}
        onClick={() => {
          console.log("clicked");
          printDocumentPDF();
        }}
      >
        Download
      </button> */}

      {!backButtonClicked() && (
        <button
          type="button"
          style={{
            width: "35px",
            backgroundColor: "rgba(0, 52, 89, 1)",
            color: "white",
            border: "none",
            height: "30px",
            fontSize: "14px",
            borderRadius: "5px",
            boxShadow: "5px 10px 18px #888888",
          }}
          onClick={() => {
            previewClicked();
            HideNavbar();
            SetHide();
          }}
        >
          <img
            style={{ marginLeft: "7px", width: "20px" }}
            src={Preview}
            alt=""
          />
        </button>
      )}

      {!backButtonClicked() && (
        <Link to="/orderdiy">
          <button
            style={{
              width: "125px",
              height: "30px",
              backgroundColor: "rgba(0, 52, 89, 1)",
              color: "white",
              border: "none",

              fontSize: "11px",
              borderRadius: "5px",
              boxShadow: "5px 10px 18px #888888",
            }}
          >
            {" "}
            Review & place Order
          </button>
        </Link>
      )}
    </div>
  );
};

export default Download;
