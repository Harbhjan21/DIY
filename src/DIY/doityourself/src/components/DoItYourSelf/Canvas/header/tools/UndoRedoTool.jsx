import React from "react";
import Icon from "../helper/Icon";

import { undo, redo } from "../../../Image/header/pic";
const UndoRedoTool = ({ pagesHistory, setPagesHistory }) => {
  return (
    <div
      className="flex back-forward"
      style={{
        backgroundColor: "#cecece",
      }}
    >
      <button
        type="button"
        onClick={() => setPagesHistory({ ...pagesHistory, type: "undo" })}
      >
        <Icon img={undo} desc="Undo" left="" />
      </button>
      <button
        type="button"
        onClick={() => setPagesHistory({ ...pagesHistory, type: "redo" })}
      >
        <Icon img={redo} desc="Redo" />
      </button>
    </div>
  );
};

export default UndoRedoTool;
