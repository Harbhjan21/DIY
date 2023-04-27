import { combineReducers } from "redux";
import handlePage from "./handlePage";
import handleConfiguration from "./handleConfiguration";
import handleCommons from "./handleCommons";
import handleFilter from "./handlerFilter";
import sideSlider from "./openSlider";
import editor from "./editorReducer";
import text from "./textReducer";
import logoForm from "./logoReducer";
const handleDIY = combineReducers({
  pages: handlePage,
  currentPage: handleConfiguration,
  commons: handleCommons,
  filter: handleFilter,
  sideSlider: sideSlider,
  editor: editor,
  text:text,
  logo:logoForm
});

export default handleDIY;
