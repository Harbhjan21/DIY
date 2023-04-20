import React from "react";
import Icon from "../helper/Icon";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageSize } from "../../../../../../../../redux/actions/pageActions";
import "./DimensionTools.css";
import { Landscape, Portrait, share } from "../../../Image/header/pic";
import { getAllCanvasSize } from "../../../../../../../../redux/actions/filterAction";
// import { width } from "@mui/system";
const DimensionTools = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCanvasSize());
  }, []);

  const canvasSize = useSelector((state) => state.projects.filter.canvasSize);
  const shapeCanvas = useSelector((state) => state.projects.pages[0]);
  // const shapeCanvas = ""
  useEffect(() => {
    setDimension(canvasSize);
  }, [canvasSize]);

  const [dimension, setDimension] = useState(canvasSize);
  const [customDimension, setCustomDimension] = useState({
    height: "16",
    width: "24",
    uint: "in",
  });
  const [inputHeight, setInputHeight] = useState(customDimension.height);
  const [inputWidth, setInputWidth] = useState(customDimension.width);
  const [inputHeightUpdation, setInputHeightUpdation] = useState(false);
  const [inputWidthUpdation, setInputWidthUpdation] = useState(false);
  const [previousSelectedHeight, setPreviousSelectedHeight] = useState(0);
  const [previousSelectedWidth, setPreviousSelectedWidth] = useState(0);
  const [updateByFirstInput, SetUpdateByFirstInput] = useState(false);
  const style = {
    padding: "4px",
    marginLeft: "5px",
    marginRight: "8px",
    boxShadow: "0px 2px 2px rgb(0 0 0 / 25%)",
    border: "solid silver 1px",
    borderRadius: "2px",
  };

  const handleOrientation = (obj) => {
    dispatch(
      setPageSize({
        h: obj.height,
        w: obj.width,
      })
    );
  };

  // document.onclick = function (e) {
  //   if (e.target.id !== "inputHeightTools") {
  //     if (inputHeightUpdation)
  //       document.getElementById("selectHeightTools").selectedIndex = "0";
  //     else {
  //       if (previousSelectedHeight == -1) {
  //         document.getElementById("selectHeightTools").selectedIndex = "0";
  //       } else {
  //         document.getElementById("selectHeightTools").selectedIndex =
  //           previousSelectedHeight;
  //       }
  //     }
  //     setInputHeightUpdation(false);
  //     document.getElementById("inputHeightTools").value = " ";
  //   } else {
  //     console.log("Inside InputHeightTools in DimensionTools ====> ");
  //     document.getElementById("inputHeightTools").value =
  //       customDimension.height;
  //     document.getElementById("selectHeightTools").selectedIndex = "-1";
  //   }

  //   if (e.target.id !== "inputWidthTools") {
  //     if (inputWidthUpdation)
  //       document.getElementById("selectWidthTools").selectedIndex = "0";
  //     else {
  //       if (previousSelectedWidth == -1) {
  //         document.getElementById("selectWidthTools").selectedIndex = "0";
  //       } else {
  //         document.getElementById("selectWidthTools").selectedIndex =
  //           previousSelectedWidth;
  //       }
  //     }
  //     setInputWidthUpdation(false);
  //     document.getElementById("inputWidthTools").value = " ";
  //   } else {
  //     console.log("Inside InputWidthTools in DimensionTools ====> ");
  //     document.getElementById("inputWidthTools").value = customDimension.width;
  //     document.getElementById("selectWidthTools").selectedIndex = "-1";
  //   }
  // };

  useEffect(() => {
    console.log("shapeCanvas ====> ", shapeCanvas);
    if (shapeCanvas?.shapeCanvas) {
      let height = String(shapeCanvas?.shapeCanvas?.split("x")[0]);
      let width = String(shapeCanvas?.shapeCanvas?.split("x")[1]);
      if (
        width != "" &&
        height != "" &&
        width != undefined &&
        height != undefined
      ) {
        setInputHeight(height);
        setInputWidth(width);
      } else {
        setInputHeight(30);
        setInputWidth(20);
      }
    }
  }, [shapeCanvas]);

  useEffect(() => {
    localStorage.setItem("customDimension", JSON.stringify(customDimension));
    dispatch(
      setPageSize({
        h: customDimension.height,
        w: customDimension.width,
      })
    );
    if (updateByFirstInput) {
      setInputHeight(customDimension.height);
      setInputWidth(customDimension.width);
      setPreviousSelectedHeight(0);
      setPreviousSelectedWidth(0);
    }
    SetUpdateByFirstInput(false);
  }, [customDimension]);

  useEffect(() => {
    if (inputHeight > 48) {
      setInputHeight("48");
    } else if (inputHeight < 2) {
      setInputHeight("2");
    }

    if (!updateByFirstInput) {
      setCustomDimension({ ...customDimension, height: inputHeight });
    }

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

    if (!updateByFirstInput) {
      setCustomDimension({ ...customDimension, width: inputWidth });
    }

    setInputWidthUpdation(true);
    dispatch(
      setPageSize({
        h: customDimension.height,
        w: inputWidth,
      })
    );
  }, [inputWidth]);

  return (
    <div
      className="dimension-tools"
      style={{ display: "flex", alignItems: "center" }}
    >
      <select
        name="dimension"
        style={style}
        onInput={(e) => {
          console.log("value ===> ", e.target.value.split("x"));
          let width = e.target.value.split("x")[0];
          let height = e.target.value.split("x")[1];
          SetUpdateByFirstInput(true);
          setCustomDimension({
            width: `${width}`,
            height: `${height}`,
            uint: "in",
          });
        }}
      >
        {dimension.map((item) => (
          <option value={`${item.size}`}>
            {item.size.split("x")[0]} x {item.size.split("x")[1]} inch
          </option>
        ))}
      </select>
      <span style={{ fontWeight: "bold" }}>W</span>
      <div className="select-editable">
        <select
          name="width"
          id="selectWidthTools"
          style={style}
          onInput={(e) => {
            setPreviousSelectedWidth(
              document.getElementById("selectWidthTools").selectedIndex
            );
            setCustomDimension({
              ...customDimension,
              width: `${e.target.value}`,
            });
          }}
        >
          <option value={inputWidth}>
            {inputWidth} {customDimension.uint}
          </option>
          {[
            2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
            38, 40, 42, 44, 46, 48,
          ].map((item) => (
            <option value={item}>
              {item} {customDimension.uint}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="inputWidthTools"
          onChange={(e) => setInputWidth(e.target.value)}
        />
      </div>
      <span style={{ fontWeight: "bold" }}>H</span>
      <div className="select-editable">
        <select
          name="height"
          id="selectHeightTools"
          style={style}
          onInput={(e) => {
            setPreviousSelectedHeight(
              document.getElementById("selectHeightTools").selectedIndex
            );
            setCustomDimension({
              ...customDimension,
              height: `${e.target.value}`,
            });
          }}
        >
          <option value={inputHeight}>
            {inputHeight} {customDimension.uint}
          </option>
          {[
            2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
            38, 40, 42, 44, 46, 48,
          ].map((item) => (
            <option value={item}>
              {item} {customDimension.uint}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="inputHeightTools"
          onChange={(e) => setInputHeight(e.target.value)}
        />
      </div>
      <div className="select-editable">
        <select
          name="unit"
          style={style}
          onInput={(e) => {
            setCustomDimension({
              ...customDimension,
              uint: `${e.target.value}`,
            });
          }}
        >
          <option value="in">in</option>
          <option value="cm">cm</option>
          <option value="mm">mm</option>
        </select>
      </div>
      <Icon
        img={Portrait}
        desc="Portrait"
        clickHandler={() => handleOrientation({ height: 10, width: 8 })}
      />
      <Icon
        img={Landscape}
        desc="Landscape"
        clickHandler={() => handleOrientation({ height: 8, width: 10 })}
      />
    </div>
  );
};

export default DimensionTools;
