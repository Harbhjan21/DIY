import React, { useEffect, useState } from "react";
import "./styles/logosOption.css";
import { useSelector, useDispatch } from "react-redux";
import { getLogo } from "../../../../../../redux/actions/pageActions";
import { getAllLogo } from "../../../../../../redux/actions/filterAction";
const LogosOption = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects);
  const pageIndex = project.currentPage;
  const Logos = project.filter.logo;
  function clickHandler(ele) {
    dispatch(getLogo({ logo: ele, pageIndex: pageIndex }));
  }
  useEffect(() => {
    dispatch(getAllLogo());
  }, []);
  const [moreEnvironmentStickers, setmoreEnvironmentStickers] = useState(false);
  const [moreHealthStickers, setmoreHealthStickers] = useState(false);
  const [moreSafetyStickers, setmoreSafetyStickers] = useState(false);
  const [moreElements, setMoreElements] = useState(false);
  const healthlogos = Logos.filter((ele) => {
    return ele.name === "health";
  });
  const safetylogos = Logos.filter((ele) => {
    return ele.name === "safety";
  });
  const environmentlogos = Logos.filter((ele) => {
    return ele.name === "environment";
  });
  return (
    <div className="stickers-sidebar" style={{ padding: "25px 15px" }}>
      {/* <h6 style={{ marginTop: "-10px" }}>Elements</h6> */}
      <h7>Environment</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridColumnGap: "10px",
          gridRowGap: "10px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {!moreEnvironmentStickers &&
          environmentlogos.length >= 3 &&
          [environmentlogos[0], environmentlogos[1], environmentlogos[2]].map(
            (ele) => {
              return (
                <div
                  key={ele._id}
                  onClick={() => {
                    clickHandler(ele);
                  }}
                >
                  <img
                    src={ele.logoURL}
                    alt="#$44"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              );
            }
          )}
        {moreEnvironmentStickers &&
          environmentlogos.map((ele) => {
            return (
              <div
                key={ele._id}
                onClick={() => {
                  clickHandler(ele);
                }}
              >
                <img
                  src={ele.logoURL}
                  alt="#$44"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            );
          })}
      </div>
      {!moreEnvironmentStickers && (
        <div
          onClick={() => {
            setmoreEnvironmentStickers(true);
          }}
          style={{ fontSize: "small", textAlign: "right", marginTop: "-15px" }}
        >
          View More
        </div>
      )}
      {moreEnvironmentStickers && (
        <div
          onClick={() => {
            setmoreEnvironmentStickers(false);
          }}
          style={{ fontSize: "small", textAlign: "right", marginTop: "-15px" }}
        >
          View Less
        </div>
      )}
      <h7>Health</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridColumnGap: "10px",
          gridRowGap: "10px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {!moreHealthStickers &&
          healthlogos.length >= 3 &&
          [healthlogos[0], healthlogos[1], healthlogos[2]].map((ele) => {
            return (
              <div
                key={ele._id}
                onClick={() => {
                  clickHandler(ele);
                }}
              >
                <img
                  src={ele.logoURL}
                  alt="#$44"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            );
          })}
        {moreHealthStickers &&
          healthlogos.map((ele) => {
            return (
              <div
                key={ele._id}
                onClick={() => {
                  clickHandler(ele);
                }}
              >
                <img
                  src={ele.logoURL}
                  alt="#$44"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            );
          })}
      </div>
      {!moreHealthStickers && (
        <div
          onClick={() => {
            setmoreHealthStickers(true);
          }}
          style={{ fontSize: "small", textAlign: "right", marginTop: "-15px" }}
        >
          View More
        </div>
      )}
      {moreHealthStickers && (
        <div
          onClick={() => {
            setmoreHealthStickers(false);
          }}
          style={{ fontSize: "small", textAlign: "right", marginTop: "-15px" }}
        >
          View Less
        </div>
      )}
      <h7>Safety</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridColumnGap: "10px",
          gridRowGap: "10px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {!moreSafetyStickers &&
          safetylogos.length >= 3 &&
          [safetylogos[0], safetylogos[1], safetylogos[2]].map((ele) => {
            return (
              <div
                key={ele._id}
                onClick={() => {
                  clickHandler(ele);
                }}
              >
                <img
                  src={ele.logoURL}
                  alt="#$44"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            );
          })}
        {moreSafetyStickers &&
          safetylogos.map((ele) => {
            return (
              <div
                key={ele._id}
                onClick={() => {
                  clickHandler(ele);
                }}
              >
                <img
                  src={ele.logoURL}
                  alt="#$44"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            );
          })}
      </div>
      {!moreSafetyStickers && (
        <div
          onClick={() => {
            setmoreSafetyStickers(true);
          }}
          style={{ fontSize: "small", textAlign: "right", marginTop: "-15px" }}
        >
          View More
        </div>
      )}
      {moreSafetyStickers && (
        <div
          onClick={() => {
            setmoreSafetyStickers(false);
          }}
          style={{ fontSize: "small", textAlign: "right", marginTop: "-15px" }}
        >
          View Less
        </div>
      )}
      {/* <h7>Elements</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridColumnGap: "10px",
          gridRowGap: "10px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {!moreElements &&
          ["", "", ""].map((ele) => {
            return (
              <div
                key={ele._id}
                style={{
                  backgroundColor: "whitesmoke",
                  height: "60px",
                  width: "60px",
                }}
              ></div>
            );
          })}
        {moreElements &&
          ["", "", "", "", "", ""].map((ele) => {
            return (
              <div
                key={ele._id}
                style={{
                  backgroundColor: "whitesmoke",
                  height: "60px",
                  width: "60px",
                }}
              ></div>
            );
          })}
      </div>
      {!moreElements && (
        <div
          onClick={() => {
            setMoreElements(true);
          }}
          style={{ fontSize: "small", textAlign: "right", marginTop: "-15px" }}
        >
          View More
        </div>
      )}
      {moreElements && (
        <div
          onClick={() => {
            setMoreElements(false);
          }}
          style={{ fontSize: "small", textAlign: "right", marginTop: "-15px" }}
        >
          View Less
        </div>
      )} */}
    </div>
  );
};

export default LogosOption;
