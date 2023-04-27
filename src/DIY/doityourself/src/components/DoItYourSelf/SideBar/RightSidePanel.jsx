import React, { useState } from "react";
import "./rightPanel.css";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import axios from "axios";
import { API } from "../../../../../../backend";
export default function RightSidePanel() {
  const textForm = useSelector((state) => state.projects.text);
  const logoForm = useSelector((state) => state.projects.logo);
  // const editor = useSelector((state) => state.projects.editor);
  // const data = useSelector((state) => state.projects.pages);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setTextFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  const handleTextSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}diy/uploadTextStyle`, textForm)
      .then((response) => {
        console.log(response);
        // handle success response here
      })
      .catch((error) => {
        console.error(error);
        // handle error response here
      });
  };
  const handleLogoSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}diy/uploadLogo`, logoForm)
      .then((response) => {
        console.log(response);
        // handle success response here
      })
      .catch((error) => {
        console.error(error);
        // handle error response here
      });
  };
  function getNumber(str) {
    let a = typeof str === "string" ? str.split("p") : str;
    if (typeof a === "number") return a;
    let num = Number(a[0]);
    return num;
  }

  return (
    <div class="right-panel">
      <form onSubmit={handleTextSubmit}>
        <h3>For Text</h3>
        {/* <input type="text" placeholder="Width" />
        <input type="text" placeholder="Height" /> */}
        <input
          value={textForm.x}
          type="text"
          name="x"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.y}
          type="text"
          name="y"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.fontSize}
          type="text"
          name="fontSize"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.fontFamily}
          type="text"
          name="fontFamily"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.isBold}
          type="text"
          name="isBold"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.isItalic}
          type="text"
          name="isItalic"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.underLine}
          type="text"
          name="underLine"
          // onChange={handleInputChange}
        />
        {/* <input
          value={textForm.color}
          type="text"
          name="color"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.text}
          type="text"
          name="text"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.lineSpacing}
          type="text"
          name="lineSpacing"
          // onChange={handleInputChange}
        />
        <input
          value={textForm.letterSpacing}
          type="text"
          name="letterSpacing"
          // onChange={handleInputChange} */}
        {/* //  /> */}
        <br />
        <button class="finish-text" type="submit">
          Submit
        </button>
      </form>
      <form onSubmit={handleLogoSubmit}>
        <h3>For logo</h3>
        <input value={logoForm.width} type="text" placeholder="Width" />
        <input value={logoForm.height} type="text" placeholder="Height" />
        <input value={logoForm.x} type="text" placeholder="Marginx" />
        <input value={logoForm.y} type="text" placeholder="Marginy" />
        <br />
        <button class="finish-logo" type="submit">
          Submit
        </button>
      </form>
      <button class="finish-template">Finish Template</button>
    </div>
    // <div className="right-sidebar">
    //   {data
    //     ?.map((item, index) => (
    //       <div
    //         className="right-sidebar-item"
    //         key={index}
    //         onClick={() => {
    //           dispatch({ type: "SET_CURRENT_PAGE", payload: index });
    //           console.log(index);
    //           dispatch({
    //             type: "SET_ACTIVE_TOOL",
    //             payload: {
    //               activeTool: "Dimension-Tools",
    //               activePage: index,
    //               activeElementType: "page",
    //               activeElementIndex: 0,
    //             },
    //           });
    //         }}
    //       >
    //         {item?.logos?.map((ele, i) => (
    //           <Rnd
    //             className="d-flex"
    //             default={{
    //               x: getNumber(ele.x) / 4,
    //               y: getNumber(ele.y) / 4,
    //               width: getNumber(ele.width) / 4,
    //               height: getNumber(ele.height) / 4,
    //             }}
    //             lockAspectRatio={true}
    //             key={ele._id}
    //             disableDragging={true}
    //             enableResizing={false}
    //           >
    //             <div
    //               style={{
    //                 height: "100%",
    //                 width: "100%",
    //                 backgroundImage: `url(${ele.logoURL})`,
    //                 backgroundSize: "100% 100%",
    //                 overflow: "hidden",
    //               }}
    //             ></div>
    //           </Rnd>
    //         ))}
    //       </div>
    //     ))
    //     .reverse()}
    // </div>
  );
}
