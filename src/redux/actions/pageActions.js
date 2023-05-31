// // import Template from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Templates";
// // import Logos from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Logos";
// // import Svgs from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Svgs";
// // import TextTemplate from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/TextTemplate";
// // import Text from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Text";
// import axios from "axios";
// import store from "../store";
// import { API } from "../../backend";
// //import frames from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/framesShape";
// import { useState } from "react";

// export const getTextTemplate = ({ text, pageIndex }) => {
//   return async (dispatch) => {
//     let data = store.getState();

//     data.projects.pages[pageIndex].texts.push(text);
//     let page = { ...data.projects.pages[pageIndex] };
//     console.log(page);

//     dispatch(updatePage({ page: page }));
//   };
// };
// export const getLogo = ({ logo, pageIndex }) => {
//   return async (dispatch) => {
//     let data = store.getState();

//     data.projects.pages[pageIndex].logos.push(logo);
//     let page = { ...data.projects.pages[pageIndex] };
//     console.log(page);

//     dispatch(updatePage({ page: page }));
//   };
// };
// export const updatePage = ({ page }) => {
//   return async (dispatch) => {
//     console.log(page, "to be updated page ----------------");
//     let dataStore = store.getState();
//     let pages = dataStore.projects.pages;
//     let currentPage = dataStore.projects.currentPage;
//     let obj = { ...page, operationType: 3, pageId: page._id };
//     const response = await fetch(`${API}/diy/diyaddToPage`, {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVmODAwMDJiYjg5MjJiMjRkMGE3YzciLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTUyMTM0NiwiZXhwIjoxNjc1MTIxMzQ2fQ.qAZNqayStO5pfktz-nFskDs6d8UkMvcZIasrtGakUYQ",
//       },
//     });
//     const data = await response.json();
//     //console.log(data);
//     if (data.status === 200) {
//       let page = [data.data];
//       pages = pages
//         .slice(0, currentPage)
//         .concat(page)
//         .concat(pages.slice(currentPage + 1));
//       console.log("?????????????????????page====", page, pages);
//       dispatch({
//         type: "ADD_PAGE",
//         payload: { page: pages },
//       });
//     }
//   };
// };
// export const clonePage = () => {
//   return async (dispatch) => {
//     let data = store.getState();

//     let projectId = data.projects.commons.projectID;
//     let currentPage = data.projects.currentPage;
//     let pageId = data.projects.pages[currentPage]._id;
//     //console.log(data,"data", projectId, "===",pageId,"paegId")
//     let obj = {
//       pageId: pageId,
//       projectId: projectId,
//     };
//     const response = await fetch(`${API}diy/diyclonePage`, {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVmODAwMDJiYjg5MjJiMjRkMGE3YzciLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTUyMTM0NiwiZXhwIjoxNjc1MTIxMzQ2fQ.qAZNqayStO5pfktz-nFskDs6d8UkMvcZIasrtGakUYQ",
//       },
//     });
//     const dataResponse = await response.json();
//     //console.log(data);
//     if (dataResponse.status === 200) {
//       //console.log(dataResponse.data.result[0].pageArray,"##############################");
//       let page = dataResponse.data.result[0].pageArray;
//       //console.log("?????????????????????page====", page);
//       dispatch({
//         type: "ADD_PAGE",
//         payload: { page: page },
//       });
//     }
//   };
// };
// export const getPageFromTemplate = ({ templateId }) => {
//   return async (dispatch) => {
//     console.log("dfjnsjkdnfjdn===================function page from template");
//     let d = {
//       template: templateId,
//     };
//     //console.log(d)
//     const response = await fetch(`${API}diy/diycreateProject`, {
//       method: "POST",
//       body: JSON.stringify(d),
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVmODAwMDJiYjg5MjJiMjRkMGE3YzciLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTE5ODQ5MiwiZXhwIjoxNjc0Nzk4NDkyfQ.3UfDH7xUj2ezGnvAk-LFWHw2FgHoZkUQg1DV2DSb_hw",
//       },
//     });
//     const data = await response.json();
//     // //console.log(data);

//     if (data.status === 200) {
//       let projectId = data.data.result[0]._id;
//       let page = data.data.result[0].pageArray;
//       console.log(projectId, "==================page====", page, data);
//       dispatch({
//         type: "ADD_PAGE",
//         payload: { page: page },
//       });
//       dispatch({
//         type: "CURRENT_PROJECT",
//         payload: { projectId: projectId },
//       });
//     }
//   };
// };

// export const changeTemplate = ({ template, pageIndex }) => {
//   return async (dispatch) => {
//     let dataStore = store.getState();

//     let pageId = dataStore.projects.pages[pageIndex]._id;
//     let d = {
//       template: template._id,
//       pageId: pageId,
//     };
//     //console.log(d)
//     const response = await fetch(`${API}diy/diycreateProject`, {
//       method: "POST",
//       body: JSON.stringify(d),
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVmODAwMDJiYjg5MjJiMjRkMGE3YzciLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTE5ODQ5MiwiZXhwIjoxNjc0Nzk4NDkyfQ.3UfDH7xUj2ezGnvAk-LFWHw2FgHoZkUQg1DV2DSb_hw",
//       },
//     });
//     const data = await response.json();
//     // //console.log(data);

//     if (data.status === 200) {
//       let page = data.data.result[0].pageArray;
//       console.log("==================page====", page, data);
//       dispatch({
//         type: "ADD_PAGE",
//         payload: { page: page },
//       });
//     }
//   };
// };
// export const setFrame = ({ frameNumber }) => {
//   // return async dispatch =>{
//   //     let data= store.getState();
//   //     console.log(":current page", data.projects.currentPage);
//   //     let pageUpdated = data.projects.pages[data.projects.currentPage][0];
//   //     console.log(frameNumber,")))))))))))))))0)))))))))))))))))))))");
//   //     pageUpdated.frame.frameNumber=frameNumber;
//   //     dispatch({
//   //         type:"UPDATE_PAGE",
//   //         payload:{pageUpdated, pageIndex:data.projects.currentPage}
//   //     })
//   // }
// };
// export const addNewCopyOfPage = ({ templateId }) => {
//   // return async (dispatch, getState) =>{
//   //     let data= store.getState();
//   //     console.log(data,"ppage");
//   //     dispatch({
//   //         type:"SET_CURRENT_PAGE",
//   //         payload:data.projects.pages.length
//   //     })
//   //     dispatch(getTemplate({templateId:templateId, pageIndex:data.projects.pages.length}));
//   // }
// };

// export const getTemplate = ({ templateId, pageIndex }) => {
//   // return async (dispatch, getState) =>{
//   //     let state= store.getState();
//   //     console.log(state,"after pppage", templateId);
//   //     let template = Template.filter(ele=>ele.id===templateId);
//   //     console.log(template[0],"jksdnfksndkfnkas");
//   //     dispatch({
//   //         type:"EMPTY_PAGE",
//   //         payload:{pageIndex}
//   //     })
//   //     //await (async function (){
//   //         template[0].images.forEach(logoId=>{
//   //             console.log(logoId, "sdfsd");
//   //             dispatch(getLogo({logoId, pageIndex}));
//   //         })
//   //         template[0].svgs.forEach(SvgId=>{
//   //             dispatch(getSvgs({SvgId, pageIndex}));
//   //         })
//   //         template[0].texts.forEach(TextId=>{
//   //             dispatch(getText({TextId, pageIndex}));
//   //         })
//   //         template[0].TextTemplate.forEach(textTemplateId=>{
//   //             dispatch(getTextTemplate({textTemplateId, pageIndex}));
//   //         })
//   //         //})();
//   // dispatch( {
//   //     type: "GET_TEMPLATE",
//   //     payload: {template:template[0], pageIndex:pageIndex}
//   // });
//   // }
// };
// export const setTemplateColor = ({ backgroundColor, pageIndex }) => {
//   if (pageIndex === undefined) {
//     pageIndex = 0;
//   }
//   return async (dispatch, getState) => {
//     let data = store.getState();

//     let page = data.projects.pages[pageIndex];
//     console.log(page, "bgcolor");
//     page.backgroundColor = backgroundColor;
//     console.log("template", page, backgroundColor);

//     dispatch({
//       type: "UPDATE_TEMPLATE_COLOR",
//       payload: { page, pageIndex },
//     });
//   };
// };

// export const setLogo = ({ propObject, index, pageIndex }) => {
//   // return async dispatch=>{
//   //     let data= store.getState();
//   //     let logo = data.projects.pages[pageIndex][0].logos;
//   //     logo[index]=propObject;
//   //     console.log(logo);
//   //     dispatch ({
//   //         type:"SET_LOGOS",
//   //         payload:{logo, pageIndex}
//   //     })
//   // }
// };
// export const getSvgs = ({ SvgId, pageIndex }) => {
//   // return async dispatch =>{
//   //    // await (async function (){
//   //         let Svg = Svgs.filter(ele=>ele.id===SvgId);
//   //         dispatch( {
//   //             type: "GET_SVGS",
//   //             payload: {Svg, pageIndex}
//   //         });
//   //     //})();
//   //     }
// };

// export const setText = ({ props, index, pageIndex }) => {
//   // return async (dispatch, getState) =>{
//   //     let data= store.getState();
//   //     let textArr = data.projects.pages[pageIndex][0].texts;
//   //     for(const key in props) {
//   //         textArr[index][key] = props[key];
//   //     }
//   //     dispatch({
//   //         type:"ADD_TEXT_STACK",
//   //         payload:{textArr, pageIndex}
//   //     });
//   //     dispatch({
//   //         type:"UPDATE_TEXTS",
//   //         payload:{textArr, pageIndex}
//   //     })
//   //}
// };
// export const getText = ({ TextId, pageIndex }) => {
//   // return async dispatch =>{
//   //     //await (async function (){
//   //         let text = Text.filter(ele=>ele.id===TextId);
//   //         console.log(text, "found any teext");
//   //         dispatch( {
//   //             type: "GET_TEXTS",
//   //             payload: {text, pageIndex}
//   //         });
//   //     //})();
//   // }
// };

//=====================================================================================

// import Template from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Templates";
// import Logos from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Logos";
// import Svgs from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Svgs";
// import TextTemplate from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/TextTemplate";
// import Text from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Text";
import axios from "axios";
import store from "../store";
import { API } from "../../backend";
//import frames from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/framesShape";
import { useState } from "react";
import { text } from "../../DIY/doityourself/src/components/DoItYourSelf/Image/header/pic";

const myuser = JSON.parse(window.localStorage.getItem("myuser"));
const canvasDimension = JSON.parse(
  window.localStorage.getItem("canvasDimension")
)
  ? JSON.parse(window.localStorage.getItem("canvasDimension"))
  : { width: 400, height: 400 };

const Text = [
  {
    id: 1901,
    fontSize: "10px",
    fontWeight: "400",
    text: "this is text box",
    color: "rgb(24,56,89,1)",
    isItalic: false,
    letterSpacing: "2px",
    lineSpacing: "5px",
    underline: false,
    x: Number(Math.floor(Number(canvasDimension.width) / 2) - 100),
    y: Number(Math.floor(Number(canvasDimension.height) / 8)),
    newText: "",
  },
  {
    id: 1902,
    fontSize: "16px",
    fontWeight: "700",
    text: "this is heading box",
    isItalic: false,
    letterSpacing: "2px",
    lineSpacing: "5px",
    underline: false,
    x: Number(Math.floor(Number(canvasDimension.width) / 2) - 100),
    y: Number(Math.floor(Number(canvasDimension.height) / 6)),
    newText: "",
  },
  {
    id: 1903,
    fontSize: "14px",
    fontWeight: "400",
    text: "this is sub-heading box",
    isItalic: false,
    letterSpacing: "2px",
    lineSpacing: "5px",
    underline: false,
    x: Number(Math.floor(Number(canvasDimension.width) / 2) - 100),
    y: Number(Math.floor(Number(canvasDimension.height) / 5)),
    newText: "",
  },
  {
    id: 1904,
    fontSize: "10px",
    fontWeight: "700",
    text: "this is body text(bold)",
    isBold: true,
    isItalic: false,
    letterSpacing: "2px",
    lineSpacing: "5px",
    underline: false,
    x: Number(Math.floor(Number(canvasDimension.width) / 2) - 100),
    y: Number(Math.floor(Number(canvasDimension.height) / 4)),
    newText: "",
  },
  {
    id: 1905,
    fontSize: "10px",
    fontWeight: "400",
    text: "this is body text",
    isBold: false,
    isItalic: false,
    letterSpacing: "2px",
    lineSpacing: "5px",
    underline: false,
    x: Number(Math.floor(Number(canvasDimension.width) / 2) - 100),
    y: Number(Math.floor(Number(canvasDimension.height) / 3)),
    newText: "",
  },
  {
    id: 1906,
    fontSize: "20px",
    family: "abel",
    text: "robots are lifeless",
    // color: "rgb(124,156,189,1)",
    isBold: true,
    isItalic: false,
    letterSpacing: "2px",
    lineSpacing: "5px",
    underline: true,
    x: Number(Math.floor(Number(canvasDimension.width) / 2) - 100),
    y: Number(Math.floor(Number(canvasDimension.height) / 2)),
    newText: "",
  },
  {
    id: 1907,
    fontSize: "20px",
    family: "abel",
    text: "tree is green",
    color: "rgb(124,156,189,1)",
    isBold: true,
    isItalic: false,
    letterSpacing: "2px",
    lineSpacing: "5px",
    underline: true,
    x: Number(Math.floor(Number(canvasDimension.width) / 2) - 100),
    y: Number(Math.floor(Number(canvasDimension.height) / 1.7)),
    newText: "",
  },
  {
    id: 1908,
    fontSize: "20px",
    family: "abel",
    text: "Life is important",
    color: "rgb(124,156,189,1)",
    isBold: true,
    isItalic: false,
    letterSpacing: "2px",
    lineSpacing: "5px",
    underline: true,
    x: Number(Math.floor(Number(canvasDimension.width) / 2) - 100),
    y: Number(Math.floor(Number(canvasDimension.height) / 1.4)),
    newText: "",
  },
];

export const getTextTemplate = ({ text, pageIndex }) => {
  return async (dispatch) => {
    let data = store.getState();

    data.projects.pages[pageIndex].texts.push(text);
    let page = { ...data.projects.pages[pageIndex] };
    // console.log(page);

    dispatch(updatePage({ page: page }));
  };
};
export const getLogo = ({ logo, pageIndex }) => {
  return async (dispatch) => {
    let data = store.getState();
    dispatch({ type: "SET_LOGOS", payload: { logo, pageIndex } });

    /* data.projects.pages[pageIndex].logos.push({ ...logo, rotate: 0 });
    let page = { ...data.projects.pages[pageIndex] };
    console.log(page);

    dispatch(updatePage({ page: page }));*/
  };
};
export const updatePage = ({ page }) => {
  return async (dispatch) => {
    // console.log(page, "to be updated page ----------------");
    let dataStore = store.getState();
    let pages = dataStore.projects.pages;
    let currentPage = dataStore.projects.currentPage;
    let obj = { ...page, operationType: 3, pageId: page._id };
    let myuser = localStorage.getItem("myuser")
      ? JSON.parse(localStorage.getItem("myuser"))
      : "";
    const response = await fetch(`${API}/diy/diyaddToPage`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": myuser.token,
      },
    });
    const data = await response.json();
    //console.log(data);
    if (data.status === 200) {
      let page = [data.data];
      pages = pages
        .slice(0, currentPage)
        .concat(page)
        .concat(pages.slice(currentPage + 1));
      // console.log("?????????????????????page====", page, pages);
      dispatch({
        type: "ADD_PAGE",
        payload: { page: pages },
      });
    }
  };
};

export const clonePage = () => {
  // console.log("cloning page");
  return async (dispatch) => {
    let data = store.getState();

    let projectId = data.projects.commons.projectID;
    let currentPage = data.projects.currentPage;
    let pageId = data.projects.pages[currentPage]._id;
    //console.log(data,"data", projectId, "===",pageId,"paegId")
    let obj = {
      pageId: pageId,
      projectId: projectId,
    };
    let myuser = localStorage.getItem("myuser")
      ? JSON.parse(localStorage.getItem("myuser"))
      : "";
    const response = await fetch(`${API}diy/diyclonePage`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": myuser.token,
      },
    });
    const dataResponse = await response.json();
    //console.log(data);
    if (dataResponse.status === 200) {
      console.log(
        dataResponse.data.result[0].pageArray,
        "##############################"
      );
      let page = dataResponse.data.result[0].pageArray;
      //console.log("?????????????????????page====", page);
      dispatch({
        type: "ADD_PAGE",
        payload: { page: page },
      });
    }
  };
};

export const addToPage = () => {
  return async (dispatch) => {
    let data = store.getState();

    let currentPage = data.projects.currentPage;
    let pageId = data.projects.pages[currentPage]._id;
    // console.log(data,"data", projectId, "===",pageId,"paegId")
    let obj = {
      pageId: pageId,
    };
    let myuser = localStorage.getItem("myuser")
      ? JSON.parse(localStorage.getItem("myuser"))
      : "";
    const response = await fetch(`${API}diy/diyaddToPage`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": myuser.token,
      },
    });
    const dataResponse = await response.json();
    //console.log(data);
    if (dataResponse.status === 200) {
      console.log(dataResponse.data, "##############################");
      let page = dataResponse.data;
      console.log("?????????????????????page====", page);
      dispatch({
        type: "CREATE_EMPTY_PAGE",
        payload: { page: page },
      });
    }
  };
};

export const deletePage = () => {
  return async (dispatch) => {
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    let pageId = data.projects.pages[currentPage]._id;
    // console.log(data,"data", projectId, "===",pageId,"paegId")
    let obj = {
      pageId: pageId,
    };
    console.log(pageId);
    console.log(data, "data deletePage");

    const response = await fetch(`${API}diy/diydeletePage`, {
      method: "DELETE",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        //changed
        "x-access-token": "dummy@123",
      },
    });
    const dataResponse = await response.json();
    // console.log(data);
    if (dataResponse.status === 200) {
      console.log(dataResponse.data, "##############################");
      let page = dataResponse.data;
      console.log("?????????????????????page====", page);
      dispatch({
        type: "DELETE_PAGE",
      });
    }
  };
};

export const getPageFromTemplate = ({ templateId }) => {
  return async (dispatch) => {
    // console.log("dfjnsjkdnfjdn===================function page from template");
    let d = {
      template: templateId,
    };
    // console.log(d)
    let myuser = localStorage.getItem("myuser")
      ? JSON.parse(localStorage.getItem("myuser"))
      : "";
    // console.log("myuser ====> ", myuser);
    const response = await fetch(`${API}diy/diycreateProject`, {
      method: "POST",
      body: JSON.stringify(d),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": myuser.token,
      },
    });
    const data = await response.json();
    console.log("checking templates", data);

    if (data.status === 200) {
      let projectId = data.data.result[0]._id;
      let page = data.data.result[0].pageArray;
      console.log(projectId, "==================page====", page, data);
      dispatch({
        type: "ADD_PAGE",
        payload: { page: page },
      });
      dispatch({
        type: "CURRENT_PROJECT",
        payload: { projectId: projectId },
      });
    }
  };
};

export const changeTemplate = ({ template, pageIndex }) => {
  return async (dispatch) => {
    let dataStore = store.getState();

    let pageId = dataStore.projects.pages[pageIndex]._id;
    let d = {
      template: template._id,
      pageId: pageId,
    };
    let myuser = localStorage.getItem("myuser")
      ? JSON.parse(localStorage.getItem("myuser"))
      : "";
    const response = await fetch(`${API}diy/diycreateProject`, {
      method: "POST",
      body: JSON.stringify(d),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": myuser.token,
      },
    });
    const data = await response.json();

    if (data.status === 200) {
      let page = data.data.result[0].pageArray;

      dispatch({
        type: "CHANGE_TEMPLATE",
        payload: { pageIndex: pageIndex, pageUpdated: page },
      });
    }
  };
};
export const setFrame = ({ frameNumber }) => {
  return async (dispatch) => {
    let data = store.getState();
    // console.log(":current page", data.projects.currentPage);
    let pageUpdated = data.projects.pages[data.projects.currentPage][0];
    // console.log(frameNumber, ")))))))))))))))0)))))))))))))))))))))");
    pageUpdated.frame.frameNumber = frameNumber;
    dispatch({
      type: "UPDATE_PAGE",
      payload: { pageUpdated, pageIndex: data.projects.currentPage },
    });
  };
};
export const addNewCopyOfPage = ({ templateId }) => {
  // return async (dispatch, getState) =>{
  //     let data= store.getState();
  //     console.log(data,"ppage");
  //     dispatch({
  //         type:"SET_CURRENT_PAGE",
  //         payload:data.projects.pages.length
  //     })
  //     dispatch(getTemplate({templateId:templateId, pageIndex:data.projects.pages.length}));
  // }
};

export const getTemplate = ({ templateId, pageIndex }) => {
  // return async (dispatch, getState) =>{
  //     let state= store.getState();
  //     console.log(state,"after pppage", templateId);
  //     let template = Template.filter(ele=>ele.id===templateId);
  //     console.log(template[0],"jksdnfksndkfnkas");
  //     dispatch({
  //         type:"EMPTY_PAGE",
  //         payload:{pageIndex}
  //     })
  //     //await (async function (){
  //         template[0].images.forEach(logoId=>{
  //             console.log(logoId, "sdfsd");
  //             dispatch(getLogo({logoId, pageIndex}));
  //         })
  //         template[0].svgs.forEach(SvgId=>{
  //             dispatch(getSvgs({SvgId, pageIndex}));
  //         })
  //         template[0].texts.forEach(TextId=>{
  //             dispatch(getText({TextId, pageIndex}));
  //         })
  //         template[0].TextTemplate.forEach(textTemplateId=>{
  //             dispatch(getTextTemplate({textTemplateId, pageIndex}));
  //         })
  //         //})();
  // dispatch( {
  //     type: "GET_TEMPLATE",
  //     payload: {template:template[0], pageIndex:pageIndex}
  // });
  // }
};
export const setTemplateColor = ({ backgroundColor, pageIndex }) => {
  if (pageIndex === undefined) {
    pageIndex = 0;
  }
  return async (dispatch, getState) => {
    let data = store.getState();

    let page = data.projects.pages[pageIndex];
    // console.log(page, "bgcolor");
    page.backgroundColor = backgroundColor;
    // console.log("template", page, backgroundColor);

    dispatch({
      type: "UPDATE_TEMPLATE_COLOR",
      payload: { page, pageIndex },
    });
  };
};

export const setLogo = ({ propObject, index, pageIndex }) => {
  // return async dispatch=>{
  //     let data= store.getState();
  //     let logo = data.projects.pages[pageIndex][0].logos;
  //     logo[index]=propObject;
  //     console.log(logo);
  //     dispatch ({
  //         type:"SET_LOGOS",
  //         payload:{logo, pageIndex}
  //     })
  // }
};
export const getSvgs = ({ SvgId, pageIndex }) => {
  // return async dispatch =>{
  //    // await (async function (){
  //         let Svg = Svgs.filter(ele=>ele.id===SvgId);
  //         dispatch( {
  //             type: "GET_SVGS",
  //             payload: {Svg, pageIndex}
  //         });
  //     //})();
  //     }
};

export const setText = ({ props, index, pageIndex }) => {
  // return async (dispatch, getState) =>{
  //     let data= store.getState();
  //     let textArr = data.projects.pages[pageIndex][0].texts;
  //     for(const key in props) {
  //         textArr[index][key] = props[key];
  //     }
  //     dispatch({
  //         type:"ADD_TEXT_STACK",
  //         payload:{textArr, pageIndex}
  //     });
  //     dispatch({
  //         type:"UPDATE_TEXTS",
  //         payload:{textArr, pageIndex}
  //     })
  // }
};
export const getText = ({ TextId, pageIndex }) => {
  return async (dispatch) => {
    // console.log(Text);
    //await (async function (){
    let text = Text.filter((ele) => ele.id === TextId);
    console.log(text, "found any text");
    dispatch({
      type: "GET_TEXTS",
      payload: { text, pageIndex },
    });
    //})();
  };
};

// export const deletePage = () => {
//   return async (dispatch) => {
//     let data = store.getState();

//     let projectId = data.projects.commons.projectID;
//     let currentPage = data.projects.currentPage;
//     let pageId = data.projects.pages[currentPage]._id;
//     let obj = {
//       pageId: pageId,
//     };
//     const response = await fetch(`${API}diy/diydeletePage`, {
//       method: "DELETE",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVmODAwMDJiYjg5MjJiMjRkMGE3YzciLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTUyMTM0NiwiZXhwIjoxNjc1MTIxMzQ2fQ.qAZNqayStO5pfktz-nFskDs6d8UkMvcZIasrtGakUYQ",
//       },
//     });
//     const dataResponse = await response.json();
//     if (dataResponse.status === 200) {
//       // //console.log(dataResponse.data.result[0].pageArray,"##############################");
//       // let page = dataResponse.data.result[0].pageArray;
//       // //console.log("?????????????????????page====", page);
//       // dispatch({
//       //   type: "ADD_PAGE",
//       //   payload: { page: page },
//       // });
//       // console.log(dataResponse);
//     }
//   };
// };

export const addPage = () => {
  return async (dispatch) => {
    let data = store.getState();

    let projectId = data.projects.commons.projectID;
    let currentPage = data.projects.currentPage;
    let pageId = data.projects.pages[currentPage]._id;
    //console.log(data,"data", projectId, "===",pageId,"paegId")
    let obj = {
      projectId: projectId,
    };
    const response = await fetch(`${API}diy/diycreatePage`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": myuser.token,
      },
    });
    const dataResponse = await response.json();
    //console.log(data);
    if (dataResponse.status === 200) {
      // //console.log(dataResponse.data.result[0].pageArray,"##############################");
      // let page = dataResponse.data.result[0].pageArray;
      // //console.log("?????????????????????page====", page);
      // dispatch({
      //   type: "ADD_PAGE",
      //   payload: { page: page },
      // });
      // console.log(dataResponse);
    }

    // dispatch({
    //   type: "CREATE_EMPTY_PAGE",
    // });
  };
};

export const setPageSize = ({ h, w }) => {
  return async (dispatch) => {
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    // console.log("not updated page", data.projects.pages[currentPage]);
    let page = {
      ...data.projects.pages[currentPage],
      shapeCanvas: `${h}x${w}`,
    };
    console.log("updatedPage", page);
    dispatch({
      type: "CHANGE_TEMPLATE",
      payload: {
        pageUpdated: page,
        pageIndex: currentPage,
      },
    });
  };
};

export const addShape = ({ shape }) => {
  return async (dispatch) => {
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    if (data.projects.pages[currentPage]?.shapes) {
      var page = {
        ...data.projects.pages[currentPage],
        shapes: [...data.projects.pages[currentPage].shapes, shape],
      };
    } else {
      var page = {
        ...data.projects.pages[currentPage],
        shapes: [shape],
      };
    }
    console.log(page);
    dispatch({
      type: "CHANGE_TEMPLATE",
      payload: {
        pageUpdated: page,
        pageIndex: currentPage,
      },
    });
  };
};

export const removeShape = ({ Eindex }) => {
  return async (dispatch) => {
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    // console.log("current page ---> " , currentPage , "shapes---------->",data.projects.pages)
    // const [shape , ...remaining] = data.projects.pages[currentPage-1].shapes;
    // console.log("passed shape---> ", shape ,  "shape------> ",Shape ,"remaining------> ",remaining)
    if (data.projects.pages[currentPage - 1]?.shapes.length > 1) {
      const shapes = data.projects.pages[currentPage - 1].shapes;
      let remaining = [];
      /*  for (const index of shapes) {
        if (index !== shape) remaining.push(index);
      }*/
      remaining = shapes.filter((item, index) => {
        return index != Eindex;
      });
      var page = {
        ...data.projects.pages[currentPage - 1],
        shapes: remaining,
      };
    } else {
      var page = {
        ...data.projects.pages[currentPage - 1],
        shapes: [],
      };
    }
    // console.log(page);
    dispatch({
      type: "CHANGE_TEMPLATE",
      payload: {
        pageUpdated: page,
        pageIndex: currentPage,
      },
    });
  };
};
export const removeText = ({ Eindex }) => {
  return async (dispatch) => {
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    // let Eindex = data.projects.editor.activeElementIndex;
    console.log(
      "currentpage in removetext",
      currentPage,
      "activeelementindex",
      Eindex
    );

    // console.log("current page ---> " , currentPage , "shapes---------->",data.projects.pages)
    // const [shape , ...remaining] = data.projects.pages[currentPage-1].shapes;
    // console.log("passed shape---> ", shape ,  "shape------> ",Shape ,"remaining------> ",remaining)
    if (data.projects.pages[currentPage - 1]?.texts.length > 1) {
      console.log("in if");
      const texts = data.projects.pages[currentPage - 1].texts;
      let remaining = [];
      /* for (const index of texts) {
        if (index !== text) remaining.push(index);
      }*/
      remaining = texts.filter((item, index) => {
        return index != Eindex;
      });
      var page = {
        ...data.projects.pages[currentPage - 1],
        texts: remaining,
      };
    } else {
      console.log("in else");
      var page = {
        ...data.projects.pages[currentPage - 1],
        texts: [],
      };
    }
    console.log("afte remove", page);
    dispatch({
      type: "CHANGE_TEMPLATE",
      payload: {
        pageUpdated: page,
        pageIndex: currentPage,
      },
    });
  };
};
export const updateText = ({ Utext }) => {
  return async (dispatch) => {
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    let Eindex = data.projects.editor.activeElementIndex;
    console.log(
      "currentpage in updatetext",
      currentPage,
      "activeelementindex",
      Eindex
    );
    // console.log("current page ---> " , currentPage , "shapes---------->",data.projects.pages)
    // const [shape , ...remaining] = data.projects.pages[currentPage-1].shapes;
    // console.log("passed shape---> ", shape ,  "shape------> ",Shape ,"remaining------> ",remaining)

    const texts = data.projects.pages[currentPage].texts;
    console.log(texts);
    if (texts) {
      //let remaining = [];
      var newtexts = [...texts];
      /* for (const index of texts) {
        if (index !== text) remaining.push(index);
      }*/
      // newtexts[Eindex].text = Utext;
      newtexts[Eindex].newText = Utext;
      console.log(newtexts);
      var page = {
        ...data.projects.pages[currentPage],
        texts: newtexts,
      };
      // console.log("previous texts", texts);

      console.log("afte updatef", page);
      dispatch({
        type: "CHANGE_TEMPLATE",
        payload: {
          pageUpdated: page,
          pageIndex: currentPage,
        },
      });
    }
  };
};

export const TranslateFont = ({ code }) => {
  return async (dispatch) => {
    console.log("in translatefont", code);
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    let Eindex = data.projects.editor.activeElementIndex;

    const string = data.projects.pages[currentPage].texts[Eindex].newText;

    var res = await fetch("http://localhost:3030/translate", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ q: string, language: code }),
    });
    res = await res.json();

    if (!res.error) {
      console.log(res);
      const trans = res.translations.toString();

      const texts = data.projects.pages[currentPage].texts;

      if (texts) {
        let newtext = [...texts];
        newtext[Eindex].newText = trans;

        var page = {
          ...data.projects.pages[currentPage],
          texts: newtext,
        };

        console.log("previous texts", texts);

        console.log("afte updatef", page);
        dispatch({
          type: "CHANGE_TEMPLATE",
          payload: {
            pageUpdated: page,
            pageIndex: currentPage,
          },
        });
      }
    } else {
      console.log(res.error);
    }
  };
};

export const Rotate_Img = ({ rotate }) => {
  return (dispatch) => {
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    let Eindex = data.projects.editor.activeElementIndex;

    if (data.projects.pages[currentPage].images) {
      dispatch({
        type: "ROTATE_IMG",
        payload: { rotate: rotate, pageIndex: currentPage, Eindex: Eindex },
      });
    }
  };
};
export const Delete_Img = ({ Eindex }) => {
  return (dispatch) => {
    let data = store.getState();
    let currentPage = data.projects.currentPage;
    // let Eindex = data.projects.editor.activeElementIndex;
    if (data.projects.pages[currentPage - 1]?.images.length > 1) {
      const images = data.projects.pages[currentPage - 1].images;
      let remaining = [];
      /* for (const index of texts) {
        if (index !== text) remaining.push(index);
      }*/
      remaining = images.filter((item, index) => {
        return index != Eindex;
      });
      var page = {
        ...data.projects.pages[currentPage - 1],
        images: remaining,
      };
    } else {
      var page = {
        ...data.projects.pages[currentPage - 1],
        images: [],
      };
    }
    dispatch({
      type: "CHANGE_TEMPLATE",
      payload: {
        pageUpdated: page,
        pageIndex: currentPage,
      },
    });
  };
};
