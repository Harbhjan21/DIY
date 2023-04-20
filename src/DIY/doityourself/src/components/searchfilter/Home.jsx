import React from "react";
import { useEffect, useState, MouseEvent } from "react";
import Templates from "./Templates";
import { render } from "react-dom";
import Portrait from "./helper/Portrait";
import CreateNew from "./CreateNew";
import Button from "react-bootstrap/Button";
import "rsuite/dist/rsuite.css";
import Dropdown from "rsuite/Dropdown";
import Button2 from "rsuite/Button";
//import { Checkbox, CheckboxGroup } from "rsuite";
import Input from "rsuite/Input";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import "./styles.css";
import {
  Landscape1,
  Portrait1,
  Filter,
  Sort,
} from "../DoItYourSelf/Image/header/pic";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCategoryTemplates,
} from "../../../../../redux/actions/filterAction";
import Carousel from "react-elastic-carousel";
import posterLogo from "./img/Ellipse 25.png";
import signagesLogo from "./img/signAges (2).png";
import assetLogo from "./img/assetMarkings.png";
import floorLogo from "./img/floorGraphics.png";
import utilityLogo from "./img/utilityStickers.png";

import DIYLogo from "./img/DIY.png";
//import { elementOffset } from "@progress/kendo-drawing/dist/npm/util";
function Home({ setName, loadPageData, templates, setTemplates }) {
  const languages = ["English", "Hindi", "Bilingual"];
  const dispatch = useDispatch();
  const [sampleTemplates, setSampleTemplates] = useState(Templates);
  let filter = useSelector((state) => state.projects.filter);
  console.log(filter, "filter");
  const [ativeFilter, setActiveFilter] = useState("");
  let category = filter.category;
  const categoryTemplates = filter.categoryTemplates;
  const [categroyId, setCategoryId] = useState();
  const [filterCategoryOptions, setFilterCategoryOptions] = useState([]);
  const [checked, setChecked] = useState(false);
  const filterPortrait = () => {
    const filterData = Templates.filter((item) => {
      return item.orientationType === "Portrait";
    });
    setSampleTemplates(filterData);
    setActiveFilter("portrait");
  };
  const filterLandscape = () => {
    const filterData = Templates.filter((item) => {
      return item.orientationType === "Landscape";
    });
    setSampleTemplates(filterData);
    setActiveFilter("landscape");
  };
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },

    { width: 800, itemsToShow: 4 },

    { width: 1200, itemsToShow: 5 },
  ];
  //  console.log(templates);
  const [templateType, setTemplateType] = useState("");
  const [bool, setBool] = useState(true);
  //const [show, setShow] = useState(false);
  //const [storeCategoryName,setStoredCategoryName]=useState("");
  // function checkCategory(name) {
  //   console.log(name);
  //   if (name === "Poster") setFilterCategoryOptions(posterCategoryOptions);
  //   else if (name === "Signages")
  //     setFilterCategoryOptions(signagesCategoryOptions);
  //   else if (name === "Asset Markings")
  //     setFilterCategoryOptions(assetMarkingsCategoryOptions);
  //   else if (name === "Floor Graphics")
  //     setFilterCategoryOptions(floorGraphicsCategoryOptions);
  //   else if (name === "Utility Stickers")
  //     setFilterCategoryOptions(utilityStickersCategoryOptions);
  //   console.log(filterCategoryOptions);
  // }
  function filterTemplates(e) {
    console.log("filterTemplates is called");
    const name = e.target.name;
    //checkCategory(name);
    const filterData = Templates.filter((item) => {
      return item.category === name;
    });

    if (templateType !== "" && templateType === name) {
      setBool(!bool);
      document.getElementsByName(name)[0].style.border = !bool
        ? "2px solid black"
        : "none";
      // document.getElementsByName(name)[0].style.hover
      document.getElementsByName(name)[0].style.borderRadius = !bool
        ? "50%"
        : null;
      setTemplateType("");
      document.getElementsByClassName("allCategoriesTitle")[0].innerHTML =
        "All" + " Templates";
    } else {
      if (templateType)
        document.getElementsByName(templateType)[0].style.border = "none";
      document.getElementsByName(name)[0].style.border = "2px solid black";
      document.getElementsByName(name)[0].style.borderRadius = "50%";
      setTemplateType(name);
      document.getElementsByClassName("allCategoriesTitle")[0].innerHTML =
        "All " + name + " Templates";
    }
  }

  let showArrow = window.screen.width < 600 ? false : true;

  console.log(category, "main");

  return (
    <div className="div-home-container">
      <div className="grid grid-cols-2 gap-1 2xl:pt-4 pt-2 mx-auto max-w-screen-2xl 2xl:px-16 sm:px-14 lg:px-16 lg:grid-cols-12">
        <div className="diy-home-mid lg:col-span-7">
          <p className="headingText">
            Start creating your own designs today. Select from
            <br />
            categories with vast repository of editable templates,
            <br /> customize and get prints on a single platform.
          </p>
          <div className="categories" style={{ marginTop: "10px" }}>
            <div className="categoryWrapper">
              <img
                className="categoryLogo"
                name="Poster"
                onClick={filterTemplates}
                src={posterLogo}
                alt=""
              />
              <p className="categoryName">Posters</p>
            </div>
            <div className="categoryWrapper" onClick={filterTemplates}>
              <img
                className="categoryLogo"
                name="Signages"
                onClick={filterTemplates}
                src={signagesLogo}
                alt=""
              />
              <p className="categoryName">Signages</p>
            </div>
            <div className="categoryWrapper" onClick={filterTemplates}>
              <img
                className="categoryLogo"
                name="Asset Markings"
                onClick={filterTemplates}
                src={assetLogo}
                alt=""
              />
              <p className="categoryName">Asset Markings</p>
            </div>
            <div className="categoryWrapper" onClick={filterTemplates}>
              <img
                className="categoryLogo"
                name="Floor Graphics"
                onClick={filterTemplates}
                src={floorLogo}
                alt=""
              />
              <p className="categoryName">Floor Graphics</p>
            </div>
            <div className="categoryWrapper" onClick={filterTemplates}>
              <img
                className="categoryLogo"
                name="Utility Stickers"
                onClick={filterTemplates}
                src={utilityLogo}
                alt=""
              />
              <p className="categoryName">Utility Stickers</p>
            </div>
          </div>
        </div>

        <div className="diy-to-create lg:col-span-5">
          <p>
            Unleash your creativity by creating new
            <br />
            designs from scratch using wide variety
            <br />
            of elements, stickers and edit options.
          </p>
          <div className="diy-to-create-click">
            <img src={DIYLogo} alt="createicon" />
            <Button
              type="submit"
              onClick={() => {
                loadPageData();
              }}
            >
              Create New
            </Button>
          </div>
        </div>
      </div>

      <div className="diy-home-btm">
        <div className="btm-header">
          <p className="allCategoriesTitle">All Templates</p>
          <div className="icon-container">
            <div className={ativeFilter === "portrait" ? "activeFill" : ""}>
              <CropPortraitIcon
                onClick={() => {
                  filterPortrait();
                }}
              />
            </div>
            <div className={ativeFilter === "landscape" ? "activeFill" : ""}>
              <CropLandscapeIcon
                onClick={() => {
                  filterLandscape();
                }}
              />
            </div>
            <div className={ativeFilter === "filter" ? "activeFill" : ""}>
              <FilterAltIcon disabled={templateType === "" ? true : false} />
              {/* <Dropdown
                menuStyle={{
                  width: "225px",
                  maxHeight: "200px",
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
                icon={<FilterAltIcon />}
                placement="bottomEnd"
                disabled={templateType === "" ? true : false}
                noCaret
              >
                <Dropdown.Item panel>
                  <p
                    style={{
                      fontSize: "12px",
                      marginLeft: "15px",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    {templateType} Categories{" "}
                  </p>
                </Dropdown.Item>
                <p
                  class="dropdownSelectReset"
                  onClick={() => {
                    setChecked(!checked);
                  }}
                >
                  Select All
                </p>
                <br></br>
                {filterCategoryOptions.map((option, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",

                        width: "150px",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: "0px",
                      }}
                    >
                      <Input type="checkbox" checked={checked} />
                      <Dropdown.Item style={{ fontSize: "10px" }}>
                        {option}
                      </Dropdown.Item>
                    </div>
                  );
                })}
              </Dropdown> */}
            </div>
            <div className={ativeFilter === "sort" ? "activeFill" : ""}>
              <Dropdown
                menuStyle={{
                  width: "225px",

                  maxHeight: "200px",
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
                icon={<SortIcon />}
                placement="bottomEnd"
                noCaret
              >
                {languages.map((option, index) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "50px",
                          border: "none",
                          boxShadow: "none",
                        }}
                      >
                        <Input style={{ boxShadow: "none" }} type="checkbox" />
                        <Dropdown.Item
                          style={{ fontSize: "10px", marginLeft: "0px" }}
                        >
                          {option}
                        </Dropdown.Item>
                      </div>
                    </>
                  );
                })}
              </Dropdown>
            </div>
          </div>
        </div>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          itemPadding={[10, 10, 10, 10]}
          enableAutoPlay={true}
          showArrows={showArrow}
        >
          {templates.map((ele) => {
            return (
              <div className="portrait-box">
                <Portrait
                  id={ele._id}
                  img={ele.templateImage}
                  loadPageData={loadPageData}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
