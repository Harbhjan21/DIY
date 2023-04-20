import React, { useState, useEffect } from "react";
import Home from "./Home";
import Items from "./Items";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCategoryTemplates,
} from "../../../../../redux/actions/filterAction";

const Main = ({ loadPageData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryTemplates());
    dispatch(getCategory());
  }, []);

  let filter = useSelector((state) => state.projects.filter);
  console.log(filter);
  const [name, setName] = useState("");
  const [templates, setTemplates] = useState(filter.categoryTemplates);
  useEffect(() => {
    setTemplates(filter.categoryTemplates);
  }, [filter]);
  console.log(" Main.js templates", templates);
  return (
    <div>
      <div className=" max-w-screen-2xl mx-auto 2xl:px-16 sm:px-14 lg:px-16">
        <div className="inputBox ">
          <SearchIcon id="icon-diy" />
          <input
            className="textInput"
            type="text"
            placeholder="Search category"
          />
        </div>
      </div>

      {name ? (
        <Items itemName={name} setName={setName} loadPageData={loadPageData} />
      ) : (
        <Home
          setName={setName}
          loadPageData={loadPageData}
          templates={templates}
          setTemplates={setTemplates}
        />
      )}
    </div>
  );
};

export default Main;
