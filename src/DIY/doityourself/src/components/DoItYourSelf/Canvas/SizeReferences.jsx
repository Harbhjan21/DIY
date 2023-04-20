import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Human from "./Images/Human.svg";
import Coffeecup from "./Images/Coffeecup.svg";
import Scale from "./Images/Scale.svg";
import Sizesheet from "./Images/Sizesheet.svg";
import "./styles/SizeReferences.css";
import { GiCoffeeCup } from "react-icons/gi";
function SizeReferences(props) {
  const style = {
    position: "absolute",
    width: "1034px",
    height: "494px",
    left: "250px",
    top: "-50px",

    /* Text Fill */

    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  };
  return (
    <>
      <Modal
        //size="sm"
        show={true}
        size="xl"
        // onHide={show}
        style={style}
        aria-labelledby="example-custom-modal-styling-title"
        className="createNewModal"
        onHide={() => {
          props.SetShowPopUp();
        }}
        backdrop="static"
      >
        <Modal.Header
          style={{
            borderBottom: "none",
            marginTop: "-30px",
            marginRight: "-15px",
          }}
          closeButton
        ></Modal.Header>
        <Modal.Body style={{ marginTop: "-20px" }}>
          <ul className="description">
            <li>
              Refer this sheet to get an idea of the <br />
              various print dimensions with respect
              <br /> to objects.
            </li>
            <br />
            <li>All dimensions are in inches.</li>
          </ul>
          <div
            style={{
              position: "absolute",
              display: "flex",
              marginLeft: "270px",
              marginTop: "0px",
              gap: "10px",
            }}
          >
            <div className="firstsize">
              <p className="sameBox">15"x15"</p>
            </div>
            <div className="secondsize">
              <p className="sameBox">12"x18"</p>
            </div>
            <div className="thirdsize">
              <p className="sameBox">16"x24"</p>
            </div>
            <div className="fourthsize">
              <p className="sameBox">18"x24"</p>
            </div>
            <div className="fifthsize">
              <p className="sameBox">20"x30"</p>
            </div>
            <div>
              <img src={Human} alt="" />
            </div>
            <div className="sixthsize">
              <p className="sameBox">36"x48"</p>
            </div>
            <div className="seventhsize">
              <p className="sameBox">24"x36"</p>
            </div>
            <div className="eighthsize">
              <p className="sameBox">18"x18"</p>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              marginLeft: "63px",
              marginTop: "175px",
            }}
            src={Human}
            alt=""
          />
          <img
            style={{
              position: "absolute",
              marginLeft: "150px",
              marginTop: "270px",
            }}
            src={Sizesheet}
            alt=""
          />
          <div
            style={{
              position: "absolute",

              display: "flex",
              marginTop: "270px",
              marginLeft: "400px",
              gap: "10px",
            }}
          >
            <div className="ninthsize">
              <p className="sameBox2">2x2</p>
            </div>
            <div className="tenthsize">
              <p className="sameBox2">3.5x3.5</p>
            </div>
            <img src={Coffeecup} style={{ marginTop: "-70px" }} alt="" />
            <div className="eleventhsize">
              <p className="sameBox2">6x6</p>
            </div>
            <div className="twelvethsize">
              <p className="sameBox2">7x10</p>
            </div>
            <div className="thirteenthsize">
              <p className="sameBox2">10x10</p>
            </div>
            <img src={Scale} style={{ marginTop: "-15px" }} alt="" />
            <div className="fourteenthsize">
              <p className="sameBox2">12x12</p>
            </div>
            <div className="fifteenthsize">
              <p className="sameBox2">10x14</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default SizeReferences;
