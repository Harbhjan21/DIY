import React, { useState } from "react";
import "./styles/canvasSize.css";

import { FileDrop } from "react-file-drop";
import { useDispatch, useSelector } from "react-redux";

const UploadFile = ({ setOpenSlider }) => {
  const data = useSelector((state) => state.projects);
  const currentPage = data.currentPage;
  console.log(data);
  const dispatch = useDispatch();
  const [recent, setrecent] = useState();
  const [src, setsrc] = useState(null);
  const [files, setfiles] = useState(null);

  const handleChange = (file) => {
    setfiles(file[0]);
    const url = URL.createObjectURL(file[0]);
    setrecent(
      recent
        ? [...recent, { file: file[0], url: url }]
        : [{ file: file[0], url: url }]
    );
    setsrc(url);
  };
  const dropHandler = (files, event) => {
    // console.log("onDrop!", files, event);
  };
  return (
    // <div className="canvas_size">
    //   <div className="categories-div-panel">
    //     <p className="heading">Upload files here</p>
    //     <button onClick={handleChange}> Select from Device</button>
    //     <div className="drag-drop">
    //       <FileDrop onDrop={(files, event) => dropHandler(files, event)}>
    //         Drag & Drop Image here
    //       </FileDrop>
    //     </div>
    //   </div>
    // </div>
    <div className="upload-sidebar" style={{ padding: "25px 15px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h7>Upload files here</h7>
        <input
          type="file"
          id="upload-sidebar-input"
          // style={{ display: "none" }}
          onChange={(e) => {
            handleChange(e.target.files);
            /*  dispatch({
              type: "UPLOAD_IMG",
              payload: { file: e.target.files[0], pageIndex: currentPage },
            });*/
          }}
        ></input>
        <label
          htmlFor="upload-sidebar-input"
          style={{
            border: "solid white 1px",
            fontSize: "small",
            textAlign: "center",
            padding: "7px 0px",
            width: "100%",
            margin: "10px 0px",
            borderRadius: "2px",
          }}
        >
          Select from device
        </label>
        <label
          htmlFor="upload-sidebar-input"
          style={{
            border: "solid white 1px",
            fontSize: "small",
            textAlign: "center",
            padding: "7px 0px",
            width: "100%",
            margin: "0px",
            borderRadius: "2px",
          }}
        >
          Upload from drive
        </label>
      </div>
      <div
        style={{
          border: "solid white 1px",
          margin: "10px 0px 20px 0px",
          height: "250px",
          borderRadius: "2px",
        }}
      >
        <div
          onClick={() =>
            // dropHandler(files, event)
            dispatch({
              type: "UPLOAD_IMG",
              payload: { file: files, pageIndex: currentPage },
            })
          }
        >
          {src && <img src={src} alt="loading..." width={160} height={220} />}
          <lable>Click on Image to Add</lable>
        </div>
      </div>
      <h7>Recent Uploads</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "5px",
          gridRowGap: "7px",
          marginTop: "10px",
        }}
      >
        {recent &&
          recent.map((item, index) => {
            return (
              <div
                style={{
                  height: "90px",
                  width: "90px",
                  backgroundColor: "whitesmoke",
                }}
                onClick={() => {
                  dispatch({
                    type: "UPLOAD_IMG",
                    payload: { file: item.file, pageIndex: currentPage },
                  });
                }}
              >
                <img
                  src={item.url}
                  alt="..."
                  key={index}
                  height={90}
                  width={90}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UploadFile;
