import React, { useState, useEffect } from "react";
import "./styles/canvasSize.css";
import { useDispatch, useSelector } from "react-redux";
import ntp from "./ntp.jpg";
import psav from "./psav.jpg";
import sav from "./sav.jpg";
import { setPageSize } from "../../../../../../redux/actions/pageActions";
import {
  getAllCanvasPaper,
  getAllCanvasSize,
} from "../../../../../../redux/actions/filterAction";

const CanvasSize = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCanvasSize());
    dispatch(getAllCanvasPaper());
  }, []);

  const categories = useSelector((state) => state.projects.filter.category);
  const canvasSize = useSelector((state) => state.projects.filter.canvasSize);
  const canvasPaper = useSelector((state) => state.projects.filter.canvasPaper);
  const shapeCanvas = useSelector((state) => state.projects.pages[0]);

  useEffect(() => {
    setDimension(canvasSize);
  }, [canvasSize]);

  const [dimension, setDimension] = useState(canvasSize);
  const [categorySelected, setCategorySelected] = useState("all");
  const [view, setView] = useState("less");
  const [custom, setCustom] = useState(false);
  const [customDimension, setCustomDimension] = useState(
    JSON.parse(localStorage.getItem("customDimension"))
  );
  const [inputHeight, setInputHeight] = useState(
    JSON.parse(localStorage.getItem("customDimension")).height
  );
  const [inputWidth, setInputWidth] = useState(
    JSON.parse(localStorage.getItem("customDimension")).width
  );
  const [inputHeightUpdation, setInputHeightUpdation] = useState(false);
  const [inputWidthUpdation, setInputWidthUpdation] = useState(false);
  const [previousSelectedHeight, setPreviousSelectedHeight] = useState(0);
  const [previousSelectedWidth, setPreviousSelectedWidth] = useState(0);
  console.log("customDimensions ====> ", customDimension);
  useEffect(() => {
    console.log("shapeCanvas ====> ", shapeCanvas);
    if (!shapeCanvas?.shapeCanvas) {
      setInputHeight(30);
      setInputWidth(20);
    } else {
      let height = String(shapeCanvas?.shapeCanvas?.split("x")[0]);
      let width = String(shapeCanvas?.shapeCanvas?.split("x")[1]);
      if (
        width !== "" &&
        height !== "" &&
        width !== undefined &&
        height !== undefined
      ) {
        setInputWidth(width);
        setInputHeight(height);
      }
    }
  }, [shapeCanvas]);

  useEffect(() => {
    if (
      customDimension.height != "0" &&
      customDimension.width !== 0 &&
      customDimension.height != "2" &&
      customDimension.width != "2"
    ) {
      localStorage.setItem("customDimension", JSON.stringify(customDimension));
      dispatch(
        setPageSize({
          h: customDimension.height,
          w: customDimension.width,
        })
      );
    }
  }, [customDimension]);

  const handleOrientation = (item) => {
    if (item == "Portrait") {
      dispatch(
        setPageSize({
          h: 10,
          w: 8,
        })
      );
    } else if (item == "Landscape") {
      dispatch(
        setPageSize({
          h: 8,
          w: 10,
        })
      );
    }
  };

  document.onClick = function (e) {
    console.log(previousSelectedHeight, "previsionsdfljlj");
    if (e.target.id !== "inputHeight") {
      if (inputHeightUpdation)
        document.getElementById("selectHeight").selectedIndex = "0";
      else {
        if (previousSelectedHeight == -1) {
          document.getElementById("selectHeight").selectedIndex = "0";
        } else {
          document.getElementById("selectHeight").selectedIndex =
            previousSelectedHeight;
        }
      }
      setInputHeightUpdation(false);
      document.getElementById("inputHeight").value = " ";
    } else {
      document.getElementById("inputHeight").value = customDimension.height;
      document.getElementById("selectHeight").selectedIndex = "-1";
    }

    if (e.target.id !== "inputWidth") {
      if (inputWidthUpdation)
        document.getElementById("selectWidth").selectedIndex = "0";
      else {
        if (previousSelectedWidth == -1) {
          document.getElementById("selectWidth").selectedIndex = "0";
        } else {
          document.getElementById("selectWidth").selectedIndex =
            previousSelectedWidth;
        }
      }
      setInputWidthUpdation(false);
      document.getElementById("inputWidth").value = " ";
    } else {
      document.getElementById("inputWidth").value = customDimension.width;
      document.getElementById("selectWidth").selectedIndex = "-1";
    }
  };

  useEffect(() => {
    if (inputHeight > 48) {
      setInputHeight("48");
    } else if (inputHeight < 2) {
      setInputHeight("2");
    }

    setCustomDimension({ ...customDimension, height: inputHeight });
    setInputHeightUpdation(true);
    dispatch(
      setPageSize({
        h: inputHeight,
        w: customDimension.width,
      })
    );
  }, [inputHeight]);

  useEffect(() => {
    if (inputWidth > 48) {
      setInputWidth("48");
    } else if (inputWidth < 2) {
      setInputWidth("2");
    }

    setCustomDimension({ ...customDimension, width: inputWidth });
    setInputWidthUpdation(true);
    dispatch(
      setPageSize({
        h: customDimension.height,
        w: inputWidth,
      })
    );
  }, [inputWidth]);

  return (
    <div className="canvas-sidebar" style={{ padding: "25px 15px" }}>
      <h7>Categories Standard Sizes</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "5px",
          gridRowGap: "5px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {categories.map((item) => (
          <div
            className="size-item"
            key={item._id}
            style={{
              backgroundColor:
                categorySelected === item.categoryName &&
                "rgba(255,255,255,0.3)",
            }}
            onClick={() => {
              console.log("item ===> ", item);
              setCategorySelected(
                categorySelected === item.categoryName
                  ? "all"
                  : item.categoryName
              );

              setDimension(
                canvasSize.filter((x) => x.category == item.categoryName)
              );
              if (categorySelected == item.categoryName) {
                setDimension(canvasSize);
              }
            }}
          >
            {item.categoryName}
          </div>
        ))}
      </div>
      <h7>Sizes</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "5px",
          gridRowGap: "5px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {view === "less" &&
          dimension.length >= 3 &&
          [dimension[0], dimension[1], dimension[2]].map((item) => (
            <div
              className="size-item"
              key={item}
              onClick={() => {
                dispatch(
                  setPageSize({
                    h: item.size.split("x")[0],
                    w: item.size.split("x")[1],
                  })
                );
              }}
            >
              {item.size.split("x")[0]} x {item.size.split("x")[1]} inch
            </div>
          ))}
        {view === "more" &&
          dimension.map((item) => (
            <div
              className="size-item"
              key={item}
              onClick={() => {
                dispatch(
                  setPageSize({
                    h: item.size.split("x")[0],
                    w: item.size.split("x")[1],
                  })
                );
              }}
            >
              {item.size.split("x")[0]} x {item.size.split("x")[1]} inch
            </div>
          ))}
        <div
          className="size-item"
          onClick={() => {
            setCustom(!custom);
          }}
        >
          Custom
        </div>
        <div
          className="size-item"
          style={{ gridColumn: "1/3" }}
          onClick={() => {
            view == "more" ? setView("less") : setView("more");
          }}
        >
          {view === "more" ? "View less" : "View more"}
        </div>
      </div>

      {custom && (
        <div className="custom-dimension" style={{ marginBottom: "20px" }}>
          <div style={{ marginRight: "30px" }}>
            H&nbsp;
            <span className="canva-select-editable">
              <select
                id="selectHeight"
                onChange={(e) => {
                  setPreviousSelectedHeight(
                    document.getElementById("selectHeight").selectedIndex
                  );
                  setCustomDimension({
                    ...customDimension,
                    height: `${e.target.value}`,
                  });
                }}
              >
                <option value={inputHeight}>{inputHeight}</option>
                {[
                  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,
                  34, 36, 38, 40, 42, 44, 46, 48,
                ].map((item) => {
                  <option value={item}>{item}</option>;
                })}
              </select>
              <input
                type="text"
                id="inputHeight"
                onChange={(e) => setInputHeight(e.target.value)}
              />
            </span>
          </div>
          <div style={{ marginRight: "30px" }}>
            W&nbsp;
            <span className="canva-select-editable">
              <select
                id="selectWidth"
                onChange={(e) => {
                  setPreviousSelectedWidth(
                    document.getElementById("selectWidth").selectedIndex
                  );
                  setCustomDimension({
                    ...customDimension,
                    width: `${e.target.value}`,
                  });
                }}
              >
                <option value={inputWidth}>{inputWidth}</option>
                {[
                  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,
                  34, 36, 38, 40, 42, 44, 46, 48,
                ].map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <input
                type="text"
                id="inputWidth"
                onChange={(e) => setInputWidth(e.target.value)}
              />
            </span>
          </div>
          <div>
            <select
              onChange={(e) => {
                setCustomDimension({
                  ...customDimension,
                  unit: `${e.target.value}`,
                });
              }}
            >
              <option>in</option>
              <option>cm</option>
              <option>mm</option>
            </select>
          </div>
        </div>
      )}

      <h7>Orientation</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "5px",
          gridRowGap: "5px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {["Portrait", "Landscape"].map((item) => (
          <div
            className="size-item"
            key={item}
            onClick={() => handleOrientation(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <h7>Paper Types</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "5px",
          gridRowGap: "5px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {canvasPaper.length &&
          canvasPaper
            .filter((item) => item.category === categorySelected)[0]
            .papers.map((item) => (
              <div
                style={{
                  height: "135px",
                  width: "90px",
                  border: "solid whitesmoke 1px",
                  fontSize: "small",
                  textAlign: "center",
                }}
              >
                {item.img ? <img src={item.img}></img> : item.material}
              </div>
            ))}
      </div>
    </div>
  );
};

export default CanvasSize;
