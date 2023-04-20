import {getTemplateData} from "../actions/commonAction";
import {getTemplateDataByID} from "../actions/commonAction";
const initialState ={
    templates:[],
    templateDataByID:null,
    projectID:""
};

const handleCommons = (state = initialState, action) => {
    switch(action.type){    
    case "GET_ALL_TEMPLATES" :
            let templateData = getTemplateData();
            return {...state, templates:templateData};
    case "GET_TEMPLATE_BY_ID":
          let templateDataByID =getTemplateDataByID();
          return {...state, templateDataByID:templateDataByID}
    case "CURRENT_PROJECT"://console.log(action)
        return {...state, projectID:action.payload.projectId        }

    default :    return state;
    }
}

export default handleCommons