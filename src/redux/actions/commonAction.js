// import Template from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Templates";
// import Logos from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Logos";
// import Svgs from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Svgs";
// import Text from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/Text";
//import TextTemplate from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/TextTemplate";
import store from "../store";
//import frames from "../../components/doityourself/src/components/DoItYourSelf/FakeData/data/framesShape";

export const getTemplateDataByID = (templateid) => {
  // let templateData = null;
  // Template.forEach((ele) => {
  //   if (ele.id === templateid) {
  //     const obj = {
  //       id: ele.id,
  //       images: [],
  //       texts: [],
  //       TextTemplate: [],
  //       svgs: [],
  //       backgroundColor: ele.backgroundColor,
  //     };

  //     ele.images.forEach((logoid) => {
  //       Logos.find((logoele) => {
  //         if (logoele.id === logoid) {
  //           obj.images.push(logoele);
  //         }
  //         return null;
  //       });
  //     });

  //     ele.texts.forEach((textid) => {
  //       Text.find((textele) => {
  //         if (textele.id === textid) {
  //           obj.texts.push(textele);
  //         }
  //         return null;
  //       });
  //     });

  //     templateData = obj;
  //   }
  // });
  // return templateData;
};

export const getTemplateData = () => {
  // let templateData = [];
  // Template.forEach((ele) => {
  //   const obj = {
  //     id: ele.id,
  //     images: [],
  //     texts: [],
  //     TextTemplate: [],
  //     svgs: [],
  //     backgroundColor: ele.backgroundColor,
  //   };

  //   ele.images.forEach((logoid) => {
  //     Logos.find((logoele) => {
  //       if (logoele.id === logoid) {
  //         obj.images.push(logoele);
  //       }
  //       return null;
  //     });
  //   });

  //   ele.texts.forEach((textid) => {
  //     Text.find((textele) => {
  //       if (textele.id === textid) {
  //         obj.texts.push(textele);
  //       }
  //       return null;
  //     });
  //   });

  //   templateData.push(obj);
  // });
  // return templateData;
};
export const openSliderOn = () => {
  return async (dispatch) => {
    dispatch({
      type: "SLIDER_ON",
      payload: true,
    });
  };
};
export const openSliderOff = () => {
  return async (dispatch) => {
    dispatch({
      type: "SLIDER_OFF",
      payload: false,
    });
  };
};