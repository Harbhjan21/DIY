// import React, { useState } from "react";
// import { Page, AddComment, AddPage, DuplicatePage } from "./index";
// import "./styles/Frame.css";
// import HeaderPage from "./header/HeaderPage";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewCopyOfPage } from "../../../../../../redux/actions/pageActions";

// const Frame = ({ addHeader }) => {
//   let projectInfo = useSelector((state) => state.projects);
//   let currentPage = projectInfo.currentPage;
//   let pageInfo = projectInfo.pages;

//   const dispatch = useDispatch();
//   const addPageHandler = () => {
//    // console.log(pageInfo, currentPage, pageInfo[currentPage].template.id);
//     let pageNo = currentPage;
//     dispatch({
//       type: "CREATE_EMPTY_PAGE",
//       payload: { currentPage: pageNo + 1 },
//     });
//     dispatch(addNewCopyOfPage(pageInfo[pageNo - 1].template.id));
//   };
//   const [openInput, setOpenInput] = useState(false);

//   return (
//     <div className="frame_page_container">
//       {pageInfo.map((ele, index) => {
//         return (
//           <>
//             <div className="frame_main_container" style={{ marginTop: "20vh" }}>
//               <div className="frame_main_div1">
//                 <div className="frame_secondary_div1">
//                   <span
//                     onClick={() => setOpenInput(false)}
//                     style={{ border: "1px white solid" }}
//                   >
//                     {openInput ? (
//                       <span>{"ele.title"}</span>
//                     ) : (
//                       <input
//                         style={{ color: "red", fontSize: "8px" }}
//                         defaultValue={"enter something here"}
//                       />
//                     )}
//                   </span>
//                   <div className="frame_secondary_div2">
//                     <span>duplicate Page</span>
//                     <span>delete</span>
//                     <span>up</span>
//                     <span>down</span>
//                     <span onClick={addPageHandler}>Add Page </span>
//                   </div>
//                 </div>
//                 <div>
//                   <Page addHeader={addHeader} />
//                   <span
//                     onClick={addPageHandler}
//                     style={{ fontSize: "10px", color: "white" }}
//                   >
//                     {" "}
//                     Add Page{" "}
//                   </span>
//                 </div>
//               </div>
//               <span className="frame_comment">Add Comment</span>
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default Frame;

import React, { useState } from "react";
import { Page, AddComment, AddPage, DuplicatePage } from "./index";
import "./styles/Frame.css";
import HeaderPage from "./header/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { addNewCopyOfPage } from "../../../../../../redux/actions/pageActions";

const Frame = () => {
  let projectInfo = useSelector((state) => state.projects);
  let currentPage = projectInfo.currentPage;
  let pageInfo = projectInfo.pages;

  const dispatch = useDispatch();
  const addPageHandler = () => {
    // console.log(pageInfo, currentPage, pageInfo[currentPage].template.id);
    let pageNo = currentPage;
    dispatch({
      type: "CREATE_EMPTY_PAGE",
      payload: { currentPage: pageNo + 1 },
    });
    dispatch(addNewCopyOfPage(pageInfo[pageNo - 1].template.id));
  };
  const [openInput, setOpenInput] = useState(false);

  return (
    <div
      className="frame_page_container"
      style={{
        height: "calc(90vh - 50px)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div className="frame_main_container" style={{ marginTop: "20vh" }}>
        <div className="frame_main_div1">
          <div className="frame_secondary_div1">
            <span
              onClick={() => setOpenInput(false)}
              style={{ border: "1px white solid" }}
            >
              {openInput ? (
                <span>{"ele.title"}</span>
              ) : (
                <input
                  style={{ color: "red", fontSize: "8px" }}
                  defaultValue={"enter something here"}
                />
              )}
            </span>
            <div className="frame_secondary_div2">
              <span>duplicate Page</span>
              <span>delete</span>
              <span>up</span>
              <span>down</span>
              <span onClick={addPageHandler}>Add Page </span>
            </div>
          </div>
          <div>
            <Page addHeader={addHeader} />
            <span
              onClick={addPageHandler}
              style={{ fontSize: "10px", color: "white" }}
            >
              {" "}
              Add Page{" "}
            </span>
          </div>
        </div>
        <span className="frame_comment">Add Comment</span>
      </div> */}
      <Page />
    </div>
  );
};

export default Frame;
