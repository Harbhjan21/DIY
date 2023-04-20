import React from "react";
import "./rightPanel.css";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";

export default function RightSidePanel() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.projects.pages;
  });

  function getNumber(str) {
    let a = typeof str === "string" ? str.split("p") : str;
    if (typeof a === "number") return a;
    let num = Number(a[0]);
    return num;
  }

  return (
    <div class="right-panel">
      <form>
        <input type="number" placeholder="Width" />
        <input type="number" placeholder="Height" />
        <input type="number" placeholder="Marginx" />
        <input type="number" placeholder="Marginy" />
        <input type="text" placeholder="fontSize" />
        <input type="text" placeholder="fontFamily" />
        <button type="submit">Submit</button>
      </form>
      <form>
        <input type="number" placeholder="Width" />
        <input type="number" placeholder="Height" />
        <input type="number" placeholder="Marginx" />
        <input type="number" placeholder="Marginy" />
        <button type="submit">Submit</button>
      </form>
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
