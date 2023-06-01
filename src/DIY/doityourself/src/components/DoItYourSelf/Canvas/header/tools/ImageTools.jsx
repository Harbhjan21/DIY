import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";

import {
  crop,
  expand,
  Landscape,
  Portrait,
  rLeft,
  rRight,
} from "../../../Image/header/pic";
import Icon from "../helper/Icon";
import { Delete } from "@mui/icons-material";
import { Delete_Img } from "../../../../../../../../redux/actions/pageActions";
const ImageTools = () => {
  const degree = useRef();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.projects);
  const Page = useSelector((state) => state.projects.pages);
  let currentPage = data.currentPage;
  var Eindex = data.editor?.activeElementIndex;
  // var rotate = data.pages[currentPage].images[Eindex].rotate;
  const [rotate, setrotate] = useState(0);
  degree.current = rotate;

  return (
    <>
      <div
        className="tools flex"
        style={{ display: "Flex", alignItems: "Center" }}
      >
        <div
          onClick={() => {
            dispatch({
              type: "SET_CURRENT_PAGE",
              payload: Page.length,
            });
            dispatch({
              type: "SET_ACTIVE_TOOL",
              payload: {
                activeTool: "Dimension-Tools",
                activePage: currentPage.length,
                activeElementType: "page",
                activeElementIndex: 0,
              },
            });
            dispatch(Delete_Img({ Eindex }));
          }}
        >
          <Delete />
        </div>
        <Icon img={crop} desc="Crop" left="-5px" />
        <Icon
          img={rLeft}
          desc="Rotate Left"
          degree={degree}
          setrotate={setrotate}
        />
        <Icon
          img={rRight}
          desc="Rotate Right"
          degree={degree}
          setrotate={setrotate}
        />
      </div>
    </>
  );
};

export default ImageTools;
