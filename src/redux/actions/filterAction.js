import axios from "axios";
import { API } from "../../backend";

export const getAllLogo = () => {
  return async (dispatch) => {
    const getLogo = async () => {
      return await axios
        .post(`${API}diy/getLogos`, { limit: 100 })
        .then((res) => res)
        .catch((err) => {
          return [];
        });
    };
    const res = await getLogo();
    let logo = res.data.data.logos;
    dispatch({
      type: "LOGO",
      payload: logo,
    });
  };
};

export const getAllText = () => {
  return async (dispatch) => {
    const getText = async () => {
      return await axios
        .post(`${API}diy/getAllText`)
        .then((res) => res)
        .catch((err) => {
          return [];
        });
    };
    const res = await getText();
    let text = res.data.data.texts;
    dispatch({
      type: "TEXT",
      payload: text,
    });
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    const getCat = async () => {
      return await axios
        .get(`${API}diy/diygetcategory`)
        .then((res) => res)
        .catch((err) => {
          return [];
        });
    };
    const res = await getCat();
    let category = res.data.data.category;
    dispatch({
      type: "CATEGORY",
      payload: category,
    });
  };
};

export const getCategoryTemplates = (obj) => {
  return async (dispatch) => {
    const getAllTemplates = async () => {
      return await axios
        .post(`${API}diy/getTemplatesByCategory`, {
          categroyId: "63996efd78fd5f71f85385a1",
        })
        .then((res) => res)
        .catch((err) => {
          return [];
        });
    };
    const res = await getAllTemplates();
    let templates = res.data.data;
    //console.log(templates);
    dispatch({
      type: "ALL_TEMPLATES",
      payload: templates,
    });
  };
};

export const getAllCanvasSize = () => {
  return async (dispatch) => {
    const res = await axios.get(`${API}diy/diygetcategorysize`);
    dispatch({
      type: "ALL_CANVAS_SIZE",
      payload: res.data.data,
    });
  };
};

export const getAllCanvasPaper = () => {
  return async (dispatch) => {
    const res = await axios.get(`${API}diy/diygetcanvaspaper`);
    dispatch({
      type: "ALL_CANVAS_PAPER",
      payload: res.data.data,
    });
  };
};

export const getAllTextStyle = () => {
  return async (dispatch) => {
    const res = await axios.get(`${API}diy/diygettextstyle`);
    dispatch({
      type: "ALL_TEXT_STYLE",
      payload: res.data.data,
    });
  };
};
