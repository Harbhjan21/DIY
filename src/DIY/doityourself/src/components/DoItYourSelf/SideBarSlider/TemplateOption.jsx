import React, { useState, useEffect } from "react";
import "./styles/Template.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getTemplate,
  changeTemplate,
  getPageFromTemplate,
} from "../../../../../../redux/actions/pageActions";
import {
  getCategoryTemplates,
  getCategory,
} from "../../../../../../redux/actions/filterAction";
import { useSearchParams } from "react-router-dom";
import HtmlTooltip from "../Commons/HtmlTooltip";
import Templates from "../../searchfilter/Templates";
import "../Commons/htmltooltip.css";

const TemplateOption = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [popUp, setPopUp] = useState(localStorage.getItem("popUp"));

  const filter = useSelector((state) => state.projects.filter);
  console.log("filter ===> ", filter);
  const categoryTemplates = filter.categoryTemplates;
  console.log("catergoryTemplates ===> ", categoryTemplates);
  const project = useSelector((state) => state.projects);
  console.log("project ===> ", project);
  const pageIndex = project.currentPage;
  let category = [
    "Posters",
    "Signages",
    "Floor Graphics",
    "Asset Markings",
    "Utility Stickers",
  ];
  console.log("category ===> ", category);
  useEffect(() => {
    dispatch(getCategoryTemplates({ categoryid: "9879878" }));
    dispatch(getCategory());
  }, []);

  const [active, setActive] = useState("Categories");

  return (
    <div className="template-sidebar" style={{ padding: "25px 15px" }}>
      {popUp === "enabled" && !searchParams.get("popUp") ? (
        <HtmlTooltip
          open
          arrow
          placement="right"
          title={
            <div className="tooltip_container">
              <p className="tooltip_text">Select or chage categories anytime</p>
              <div className="tooltip_button_container">
                <button
                  className="tooltip_skip_button"
                  onClick={() => {
                    setPopUp(localStorage.setItem("popUp", "disabled"));
                  }}
                >
                  Skip
                </button>
                <button
                  className="tooltip_next_button"
                  onClick={() => {
                    setSearchParams({ popUp: "popUp2" });
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          }
        >
          <div>
            <h7>Categories</h7>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridColumnGap: "10px",
                gridRowGap: "10px",
                margin: "10px 0px 20px 0px",
              }}
            >
              {category.map((item) => (
                <div
                  //key={index}
                  style={{
                    border: "Solid white 1px",
                    fontSize: "12px",
                    textAlign: "center",
                    padding: "3px 0px",
                    borderRadius: "2px",
                    backgroundColor: active === item && "rgba(255,255,255,0.3)",
                  }}
                  onClick={() => {
                    setActive(active === item ? "Categories" : item);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </HtmlTooltip>
      ) : (
        <>
          <h7>Categories</h7>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridColumnGap: "10px",
              gridRowGap: "10px",
              margin: "10px 0px 20px 0px",
            }}
          >
            {category.map((item) => (
              <div
                //key={index}
                style={{
                  border: "Solid white 1px",
                  fontSize: "12px",
                  textAlign: "center",
                  padding: "3px 0px",
                  borderRadius: "2px",
                  backgroundColor: active === item && "rgba(255,255,255,0.3)",
                }}
                onClick={() => {
                  setActive(active === item ? "Categories" : item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </>
      )}

      {active === "signages" && (
        <>
          <h7>Styles</h7>
          <div
            className="template-style-body"
            style={{ margin: "10px 0px 20px 0px" }}
          >
            <div className="template-style-n">N</div>
            <div className="template-style-d">D</div>
            <div className="template-style-c">C</div>
            <div className="template-style-w">W</div>
          </div>
        </>
      )}

      <h7>Recent Designs</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "5px",
          gridColumnGap: "2.5px",
          margin: "10px 0px 20px -5px",
        }}
      >
        <div className="recent-designs"></div>
        <div className="recent-designs"></div>
        <div className="recent-designs"></div>
        <div className="recent-designs"></div>
      </div>

      <h7>All {active}</h7>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "5px",
          gridColumnGap: "2.5px",
          margin: "10px 0px 20px 0px",
        }}
      >
        {Templates.map((ele) => {
          return (
            <div
              className="design"
              key={ele._id}
              onClick={() => {
                pageIndex <= 0
                  ? dispatch(getPageFromTemplate({ templateId: ele._id }))
                  : dispatch(
                      changeTemplate({ template: ele, pageIndex: pageIndex })
                    );
                console.log("page onClick === > ", pageIndex, ele);
              }}
            >
              <img src={ele.image} alt="alter" style={{ objectFit: "fill" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateOption;
