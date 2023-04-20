import React, { useState } from "react";

const FontSize = ({ finalFontSize, setFinalFontSize }) => {
 
  const [display, setDisplay] = useState(false);
  const increment = () => {
    setDisplay(false);
    if (finalFontSize < 36) {
      setFinalFontSize(finalFontSize + 2);
    } else if (finalFontSize < 70) {
      setFinalFontSize(finalFontSize + 12);
    }
  };
  const decrement = () => {
    setDisplay(false);
    if (finalFontSize > 36) {
      setFinalFontSize(finalFontSize - 12);
    } else if (finalFontSize > 8) {
      setFinalFontSize(finalFontSize - 2);
    }
  };
  const fontSizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
  return (
    <div className="font-size" onMouseLeave={() => setDisplay(false)}>
      <button onClick={decrement} className="size-changer" style={{cursor:"pointer"}}>
        -
      </button>
      {/* <input type="text" value={size} /> */}
      <div className="dropdown">
        <button onClick={() => setDisplay(!display)} className="dropbtn">
          {finalFontSize}
        </button>
        {display && (
          <div
            className="dropdown-content"
            onMouseLeave={() => setDisplay(false)}
          >
            {fontSizes.map((item, i) => {
              return (
                <p
                  key={i}
                  onClick={() => {
                    setDisplay(false);
                    setFinalFontSize(item);
                  }}
                >
                  {item}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <button onClick={increment} className="size-changer" style={{cursor:"pointer"}}>
        +
      </button>
    </div>
  );
};

export default FontSize;