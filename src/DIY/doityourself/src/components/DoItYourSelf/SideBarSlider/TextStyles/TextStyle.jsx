import React from "react";
import "./TextStyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getText,
  getTextTemplate,
} from "../../../../../../../redux/actions/pageActions";
import {
  getAllText,
  getAllTextStyle,
} from "../../../../../../../redux/actions/filterAction";
import { useEffect } from "react";

const TextStyle = () => {
  const data = useSelector((state) => state);
  console.warn(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTextStyle());
    dispatch(getAllText());
  }, []);
  let texts = data.projects.filter.textStyle;
  const active = data.projects.editor;
  console.log("first----------------------", active);
  const project = useSelector((state) => state.projects);
  const pageIndex = project.currentPage;
  const textStyles = [
    {
      fontSize: "48px",
      fontWeight: 400,
      fontFamily: "'East Sea Dokdo', cursive",
    },
    {
      fontSize: "38px",
      fontWeight: 400,
      fontFamily: "'Rubik Bubbles', cursive",
    },
    {
      fontSize: "38px",
      fontWeight: 400,
      fontFamily: "'Sevillana', cursive",
    },
    {
      fontSize: "28px",
      fontWeight: 400,
      fontFamily: "'Seymour One', sans-serif",
    },
  ];
  return (
    // <div className="text_container">
    //   <div className="btn_div">
    //     <p>Upload files here</p>
    //     <button
    //       style={{ background: "#1f9fb0" }}
    //       // onClick={() => {
    //       //   setAddHeader(true);
    //       // }}
    //       onClick={() => {
    //         dispatch(getText({ TextId: 1901, pageIndex: pageIndex }));
    //       }}
    //     >
    //       Add a text box
    //     </button>
    //     <button
    //       style={{ fontSize: "16px", fontWeight: "700" }}
    //       onClick={() => {
    //         dispatch(getText({ TextId: 1902, pageIndex: pageIndex }));
    //       }}
    //     >
    //       Add a heading
    //     </button>
    //     <button
    //       style={{ fontSize: "14px", fontWeight: "400" }}
    //       onClick={() => {
    //         dispatch(getText({ TextId: 1903, pageIndex: pageIndex }));
    //       }}
    //     >
    //       Add a sub-heading
    //     </button>
    //     <button
    //       style={{ fontSize: "10px", fontWeight: "700" }}
    //       onClick={() => {
    //         dispatch(getText({ TextId: 1904, pageIndex: pageIndex }));
    //       }}
    //     >
    //       Add body text(Bold)
    //     </button>
    //     <button
    //       style={{ fontSize: "10px", fontWeight: "400" }}
    //       onClick={() => {
    //         dispatch(getText({ TextId: 1905, pageIndex: pageIndex }));
    //       }}
    //     >
    //       Add body text
    //     </button>
    //   </div>
    //   <p className="heading">Text Styles</p>
    //   <div className="font-designs">
    //     {texts.map((ele) => {
    //       return (
    //         <div
    //           style={{ cursor: "pointer" }}
    //           onClick={() => {
    //             dispatch(
    //               getTextTemplate({
    //                 text: ele,
    //                 pageIndex: pageIndex,
    //               })
    //             );
    //           }}
    //         >
    //           <p
    //             style={{
    //               fontFamily: `${ele.family}`,
    //             }}
    //           >
    //             <i>{ele.text}</i>
    //             {/* hello */}
    //           </p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="text-sidebar" style={{ padding: "25px 15px" }}>
      <h7>Add & Edit Text</h7>
      <div className="textboxes" style={{ margin: "10px 0px 20px 0px" }}>
        <div
          style={{ fontSize: "10px", fontWeight: "400" }}
          onClick={() => {
            dispatch(getText({ TextId: 1901, pageIndex: pageIndex }));
          }}
        >
          Add a text box
        </div>
        <div
          style={{ fontSize: "16px", fontWeight: "700" }}
          onClick={() => {
            dispatch(getText({ TextId: 1902, pageIndex: pageIndex }));
          }}
        >
          Add a heading
        </div>
        <div
          style={{ fontSize: "14px", fontWeight: "400" }}
          onClick={() => {
            dispatch(getText({ TextId: 1903, pageIndex: pageIndex }));
          }}
        >
          Add a sub-heading
        </div>
        <div
          style={{ fontSize: "10px", fontWeight: "700" }}
          onClick={() => {
            dispatch(getText({ TextId: 1904, pageIndex: pageIndex }));
          }}
        >
          Add body text(bold)
        </div>
        <div
          style={{ fontSize: "10px", fontWeight: "400" }}
          onClick={() => {
            dispatch(getText({ TextId: 1905, pageIndex: pageIndex }));
          }}
        >
          Add body text
        </div>
      </div>
      <h7>Text Styles</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "-15px",
          gridRowGap: "10px",
        }}
      >
        {texts.length &&
          texts.map((item) => (
            <div
              style={{
                fontFamily: item.fontFamily,
                fontSize: item.fontSize,
                fontWeight: item.fontWeight,
              }}
              onClick={() => {
                dispatch({
                  type: "EDIT_TEXT",
                  payload: {
                    fontSize: item.fontSize,
                    fontWeight: item.fontWeight,
                    fontFamily: item.fontFamily,
                    activePage: active.activePage,
                    activeElement: active.activeElementIndex,
                  },
                });
              }}
            >
              Hello
            </div>
          ))}
      </div>
    </div>
  );
};

export default TextStyle;
