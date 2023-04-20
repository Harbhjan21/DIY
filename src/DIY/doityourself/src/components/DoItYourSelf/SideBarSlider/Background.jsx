import React, { useState, createContext } from "react";
import { TfiPencil } from "react-icons/tfi";
import { GiPlainCircle } from "react-icons/gi";
import "./styles/background.css";
import { SevereCold } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { setTemplateColor } from "../../../../../../redux/actions/pageActions";
import { useEffect } from "react";
import { HexColorPicker } from "react-colorful";
const colorArr = [
  "#FB0D0D",
  "#E07715",
  "#E9D310",
  "#A3EB2D",
  "#43EB09",
  "#0B96FA",
  "#07F3D7",
  "#0FF185",
  "#40AE6C",
  "#17ED53",
  "#1644E8",
  "#1709B2",
  "#AA12C3",
  "#AB1770",
  "#8A1430",
];

const Background = () => {
  const data = useSelector((state) => state.projects.pages);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects);
  const pageIndex = project.currentPage;

  const [color, setColor] = useState("white");
  const hello = (e) => {
    setColor(e.target.style.background);
    // console.log(data[pageIndex].backgroundColor, "useselector");
  };
  useEffect(() => {
    dispatch(
      setTemplateColor({ backgroundColor: color, pageIndex: pageIndex })
    );
  }, [color]);
  const [openColor, setOpenColor] = useState(false);
  return (
    <div className="background-div">
      <div className="solidClr_container">
        <div className="solid-clr">
          <p className="p">Solid</p>
          <div styel={{ display: "flex" }}>
            <span>
              <TfiPencil />
            </span>
            <span>
              <GiPlainCircle
                style={{
                  color: "grey",
                  border: "solid silver 1px",
                  borderRadius: "50%",
                  marginLeft: "10px"
                }}
                onClick={() => {
                  setOpenColor(!openColor);
                }}
              />
            </span>
          </div>
        </div>
        {openColor && (
          <div style={{ margin: "0px 0px 30px 0px" }}>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        )}
        <div className="colors">
          {colorArr.map((item, i) => {
            return (
              <div
                key={i}
                onClick={hello}
                style={{ background: item, width: "27px", height: "27px" }}
              ></div>
            );
          })}
        </div>
        {/* {console.log(color)} */}
      </div>
      <div className="texture-div">
        <p className="p">Textures</p>
        <div className="textures">
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
          <div className="texture"></div>
        </div>
      </div>
      <div className="pattern-div">
        <p className="p">Pattern</p>
        <div className="patterns">
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
          <div className="pattern"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
