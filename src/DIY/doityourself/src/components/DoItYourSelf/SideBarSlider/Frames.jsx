import React, { useEffect, useState } from "react";
import "./styles/frames.css";
import frames from "./frameShape";
import { useDispatch } from "react-redux";
import {
  changeShape,
  setFrame,
  addShape,
} from "../../../../../../redux/actions/pageActions";
const Frames = () => {
  const dispatch = useDispatch();
  const styles = ["Circle", "Triangle", "Square", "Polygon", "Lines", "Arrows"];
  const [active, setActive] = useState("all");
  const [shapes, setShapes] = useState(frames);
  return (
    <div className="shape-sidebar" style={{ padding: "25px 15px" }}>
      <h7>Styles</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "10px",
          gridRowGap: "10px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {styles.map((item, index) => (
          <div
            key={index}
            style={{
              border: "Solid white 1px",
              fontSize: "12px",
              textAlign: "center",
              padding: "3px 0px",
              borderRadius: "2px",
              backgroundColor: active === item && "rgba(255,255,255,0.3)",
            }}
            onClick={() => {
              setActive(active === item ? "all" : item);

              setShapes(frames.filter((x) => x.style == item));
              if (active == item) {
                setShapes(frames);
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className="shapes-list"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "10px",
          gridRowGap: "15px",
          placeItems: "center",
          padding: "0px 20px",
        }}
      >
        {shapes.map((item) => (
          <div
            style={{
              height: "70px",
              width: "70px",
              backgroundColor: "whitesmoke",
              clipPath: item.clipPath,
            }}
            onClick={() => {
              dispatch(addShape({ shape: item }));
            }}
          >
            {/* {console.log(item)} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frames;

// const FramesOption = () => {
//   const [frameIndex, setFrameIndex] = React.useState(0);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(setFrame({ frameNumber: frameIndex }));
//   }, [frameIndex]);
//   return (
//     <div className="frame-container">
//       <div className="frames">
//         {frames.map((item, i) => {
//           return (
//             <div
//               className="frame-item"
//               style={{
//                 clipPath: item,
//                 backgroundColor: "rgba(217, 217, 217, 1)",
//               }}
//               // onClick={() => {
//               //   setFrameIndex(i);
//               //   dispatch(changeShape({ shape: item }));
//               // }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
