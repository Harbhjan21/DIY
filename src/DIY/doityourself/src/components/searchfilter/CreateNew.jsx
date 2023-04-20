import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import posterLogo from "./img/Ellipse 25.png";
import signagesLogo from "./img/signAges (2).png";
import assetLogo from "./img/assetMarkings.png";
import floorLogo from "./img/floorGraphics.png";
import utilityLogo from "./img/utilityStickers.png";
import { render } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setPageSize } from "../../../../../redux/actions/pageActions";

function CreateNew(props) {
  //const [show,setShow]=useState(true);
  const dispatch = useDispatch();
  const [categoryCanvasSize, setCategoryCanvasSize] = useState(true);
  const [storeCategoryName, setStoredCategoryName] = useState("");
  const [dimensions, setDimensions] = useState([]);
  const [customDimension, setCustomDimension] = useState({
    height: "10",
    width: "10",
    uint: "in",
  });
  const [inputHeight, setInputHeight] = useState("");
  const [inputWidth, setInputWidth] = useState("");
  const posterDimensions = [
    "12 inch x 18 inch",
    "16 inch x 24 inch",
    "20 inch x 30 inch",
    "36 inch x 48 inch",
    "24 inch x 36 inch",
  ];
  const signageDimensions = [
    "7 inch x 10 inch",
    "10 inch x 14 inch",
    "14 inch x 10 inch",
    "10 inch x 7 inch",
  ];
  const floorGraphicDimensions = [
    "2 inch x 2 inch",
    "3.5 inch x 3.5 inch",
    "7 inch x 3.5 inch",
    "10.5 inch x 3.5 inch",
    "14 inch x 3.5 inch",
    "27.5 inch x 3.5 inch",
    "6 inch x 6 inch",
    "7.5 inch x 1 inch",
    "10 inch x 10 inch",
    "10.5 inch x 2 inch",
    "12 inch x 12 inch",
    "15 inch x 15 inch",
    "18 inch x 18 inch",
    "18 inch x 24 inch",
    "24 inch x 18 inch",
    "24 inch x 36 inch",
    "36 inch x 24 inch",
  ];
  const assetMarkingDimensions = [
    "2 inch x 2 inch",
    "3.5 inch x 3.5 inch",
    "7 inch x 3.5 inch",
    "10.5 inch x 3.5 inch",
    "14 inch x 3.5 inch",
    "27.5 inch 3.5 inch",
    "6 inch x 6 inch",
    "7.5 inch x 1 inch",
    "10 inch x 14 inch",
    "10.5 inch x 2 inch",
  ];
  const utilityStickerDimensions = [
    "2 inch x 2 inch",
    "3.5 inch x 3.5 inch",
    "7 inch x 3.5 inch",
    "10.5 inch x 3.5 inch",
    "14 inch x 3.5 inch",
    "27.5 inch x 3.5 inch",
    "6 inch x 6 inch",
    "7.5 inch x 1 inch",
    "10 inch x 14 inch",
    "10.5 inch x 2 inch",
  ];

  useEffect(() => {
    if (localStorage.getItem("customDimension")) {
      let value = JSON.parse(localStorage.getItem("customDimension"));
      console.log("value ====> ", value);
      setCustomDimension({
        height: value.height,
        width: value.width,
        uint: value.uint,
      });
    } else {
      localStorage.setItem("customDimension", JSON.stringify(customDimension));
    }
  }, []);

  //const [canvasDimensionsOptions,setCanvasDimensionsOptions]=
  function filterTemplates(e) {
    setCategoryCanvasSize(false);
    setInputisGiven(true);
    const name = e.target.name;
    //console.log(document.getElementsByName(name));
    if (name === "Posters") {
      setDimensions(posterDimensions);
      setCustomDimension({
        width: "12",
        height: "18",
        uint: "in",
      });
    } else if (name === "Signages") {
      setDimensions(signageDimensions);
      setCustomDimension({
        width: "7",
        height: "10",
        uint: "in",
      });
    } else if (name === "Asset Markings") {
      setDimensions(assetMarkingDimensions);
      setCustomDimension({
        width: "2",
        height: "2",
        uint: "in",
      });
    } else if (name === "Floor Graphics") {
      setDimensions(floorGraphicDimensions);
      setCustomDimension({
        width: "2",
        height: "2",
        uint: "in",
      });
    } else if (name === "Utility Stickers") {
      setDimensions(utilityStickerDimensions);
      setCustomDimension({
        width: "2",
        height: "2",
        uint: "in",
      });
    }
    if (storeCategoryName !== "" && storeCategoryName === name) {
      setCategoryCanvasSize(!categoryCanvasSize);
      document.getElementsByName(name)[0].style.border = categoryCanvasSize
        ? "2px solid black"
        : "none";
      document.getElementsByName(name)[0].style.borderRadius =
        categoryCanvasSize ? "50%" : null;
    } else {
      if (storeCategoryName)
        document.getElementsByName(storeCategoryName)[0].style.border = "none";
      document.getElementsByName(name)[0].style.border = "2px solid black";
      document.getElementsByName(name)[0].style.borderRadius = "50%";
      setStoredCategoryName(name);
    }
  }
  const style = {
    width: "65px",
    padding: "4px",
    marginLeft: "7px",
    marginRight: "8px",
    marginTop: "5px",
    boxShadow: categoryCanvasSize ? "0px 2px 2px rgb(0 0 0 / 25%)" : "none",
    border: "solid silver 1px",
    borderRadius: "2px",
    opacity: categoryCanvasSize ? "1" : "0.4",
  };
  const [show, setShow] = useState(props.show);
  const [inputisGiven, setInputisGiven] = useState(false);
  const [inputisGivenforHeight, setInputisGivenforHeight] = useState(false);
  const [inputisGivenforWidth, setInputisGivenforWeight] = useState(false);

  useEffect(() => {
    console.log("customDimension ======> ", customDimension);
    localStorage.setItem("customDimension", JSON.stringify(customDimension));
    dispatch(
      setPageSize({
        h: customDimension.height,
        w: customDimension.width,
      })
    );
  }, [customDimension]);

  return (
    <>
      <Modal
        //size="sm"
        show={show}
        // onHide={show}
        dialogClassName="modalSize"
        aria-labelledby="example-custom-modal-styling-title"
        className="createNewModal"
        //onHide={() => setShow(false)}
        backdrop="static"
      >
        <Modal.Header style={{ borderBottom: "none" }} closeButton>
          <Modal.Title id="createNewTitle">
            Select a Canvas Size to Proceed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="categories" style={{ marginTop: "-20px" }}>
            <div
              className="categoryWrapper"
              onClick={filterTemplates}
              style={{ marginLeft: "4px" }}
            >
              <img
                className="categoryLogo"
                name="Posters"
                onClick={filterTemplates}
                src={posterLogo}
                alt=""
              />
              <p className="categoryName">Posters</p>
            </div>
            <div className="categoryWrapper" onClick={filterTemplates}>
              <img
                className="categoryLogo"
                name="Signages"
                onClick={filterTemplates}
                src={signagesLogo}
                alt=""
              />
              <p className="categoryName">Signages</p>
            </div>
            <div className="categoryWrapper" onClick={filterTemplates}>
              <img
                className="categoryLogo"
                name="Asset Markings"
                onClick={filterTemplates}
                src={assetLogo}
                alt=""
              />
              <p className="categoryName">
                Asset <br />
                Markings
              </p>
            </div>
            <div className="categoryWrapper" onClick={filterTemplates}>
              <img
                className="categoryLogo"
                name="Floor Graphics"
                onClick={filterTemplates}
                src={floorLogo}
                alt=""
              />
              <p className="categoryName">
                Floor <br />
                Graphics
              </p>
            </div>
            <div className="categoryWrapper" onClick={filterTemplates}>
              <img
                className="categoryLogo"
                name="Utility Stickers"
                onClick={filterTemplates}
                src={utilityLogo}
                alt=""
              />
              <p className="categoryName">
                Utility <br />
                Stickers
              </p>
            </div>
          </div>
          <select
            name="dimension"
            className="chooseCanvasDimension"
            id="chooseCanvasDimensionID"
            style={{
              opacity: categoryCanvasSize ? "0.4" : "1",
              boxShadow: categoryCanvasSize
                ? "none"
                : "0px 2px 2px rgb(0 0 0 / 25%)",
              fontSize: "15px",
            }}
            disabled={categoryCanvasSize}
            onInput={(e) => {
              setInputisGiven(true);
              let height = e.target.value
                .split("x")[1]
                ?.split(" ")[1]
                ?.split(" ")[0];
              let width = e.target.value.split("x")[0].split(" ")[0];
              console.log(height);
              setCustomDimension({
                width: `${width}`,
                height: `${height}`,
                uint: "in",
              });
            }}
          >
            {dimensions.map((dimension, index) => {
              return (
                <option style={{ fontSize: "14px" }} value={`${dimension}`}>
                  {dimension}
                </option>
              );
            })}
          </select>
          <br />
          <p className="or">OR</p>
          <p
            className="customSize"
            style={{ opacity: categoryCanvasSize ? "1" : "0.4" }}
          >
            Custom Size
          </p>
          <span
            style={{
              fontWeight: "bold",
              marginLeft: "50px",
              opacity: categoryCanvasSize ? "1" : "0.4",
              marginTop: "5px",
            }}
          >
            W
          </span>
          <input
            type="text"
            style={style}
            disabled={!categoryCanvasSize}
            onChange={(e) => {
              setCustomDimension({
                ...customDimension,
                width: `${e.target.value}`,
              });
            }}
          />
          <span
            style={{
              fontWeight: "bold",
              marginLeft: "10px",
              opacity: categoryCanvasSize ? "1" : "0.4",
              marginTop: "5px",
            }}
          >
            H
          </span>
          <input
            type="text"
            style={style}
            disabled={!categoryCanvasSize}
            onChange={(e) => {
              setInputisGivenforHeight(true);
              setCustomDimension({
                ...customDimension,
                height: `${e.target.value}`,
              });
            }}
          />
          <select
            name="unit"
            style={{
              padding: "4px",
              marginLeft: "10px",
              marginRight: "8px",
              boxShadow: categoryCanvasSize
                ? "0px 2px 2px rgb(0 0 0 / 25%)"
                : "none",
              border: "solid silver 1px",
              borderRadius: "2px",
              opacity: categoryCanvasSize ? "1" : "0.4",
            }}
            disabled={!categoryCanvasSize}
            onInput={(e) => {
              setInputisGivenforWeight(true);
              setCustomDimension({ ...customDimension, uint: e.target.value });
            }}
          >
            <option value="in">in</option>
            <option value="cm">cm</option>
            <option value="ft">mm</option>
          </select>
          <button
            class="createNewButton"
            onClick={() => {
              if (
                !inputisGiven &&
                !inputisGivenforHeight &&
                !inputisGivenforWidth
              ) {
                window.location.reload();
              } else {
                setShow(false);
                setInputisGiven(false);
                setInputisGivenforHeight(false);
                setInputisGivenforWeight(false);
              }
            }}
          >
            Create New
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CreateNew;
