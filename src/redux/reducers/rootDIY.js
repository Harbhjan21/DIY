import { combineReducers } from "redux";
import handlePage from "./handlePage";
import handleConfiguration from "./handleConfiguration";
import handleCommons from "./handleCommons";
import handleFilter from "./handlerFilter";
import sideSlider from "./openSlider";
import editor from "./editorReducer";
const handleDIY = combineReducers({
  pages: handlePage,
  currentPage: handleConfiguration,
  commons: handleCommons,
  filter: handleFilter,
  sideSlider: sideSlider,
  editor: editor,
});

export default handleDIY;
