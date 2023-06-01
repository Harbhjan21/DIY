// const pageEmpty=[{
//     template:null,
//     svgs:[],
//     logos:[],
//     texts:[],
//     textTemplate:[],
//     backgroundColor:"white",
//     comment:"",
//     notes:"",
//     title:"",
//     frame:{

//         frameNumber:0
//     }
// }]
// const initialState = [];

// const handlePage = (state = initialState, action) => {
//     // console.log(state.cart);

//     let page =null;
//     switch (action.type) {
//         case 'ADD_PAGE':return [...action.payload.page];
//         case 'CREATE_EMPTY_PAGE':

//                         return [...state, pageEmpty];

//         case 'EMPTY_PAGE' :

//             return state.slice(0, action.payload.pageIndex).concat([pageEmpty]).concat(state.slice(action.payload.pageIndex+1));
//          case "UPDATE_PAGE":
//             return state.slice(0, action.payload.pageIndex).concat([action.payload.pageUpdated]).concat(state.slice(action.payload.pageIndex+1));

//         case 'GET_TEMPLATE':

//         // console.log(state,"------");

//             page ={...state[action.payload.pageIndex], template:action.payload.template}
//             const obj= state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));
//         //    console.log(obj,"=====");
//            return obj
//         case 'UPDATE_TEMPLATE_COLOR':
//                 return  state.slice(0, action.payload.pageIndex).concat([action.payload.page]).concat(state.slice(action.payload.pageIndex+1));
//         case 'GET_SVGS' :
//             page = {
//                 ...state[action.payload.pageIndex], svgs:[...state[action.payload.pageIndex][0].svgs, ...action.payload.Svg]
//             }
//             return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

//         case 'GET_LOGOS':
//             page =  {
//                 ...state[action.payload.pageIndex][0],
//                 logos:[...state[action.payload.pageIndex][0].logos,...action.payload.logo]
//             }
//             return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

//         case 'SET_LOGOS':
//             page =   {
//                 ...state[action.payload.pageIndex], logos:action.payload.logo
//             }
//             return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

//         case 'GET_TEXTS':
//             page =  {
//                 ...state[action.payload.pageIndex][0], texts:[...state[action.payload.pageIndex][0].texts ,...action.payload.text]
//             }
//             return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

//         case 'UPDATE_TEXTS':
//                page =   {
//                     ...state[action.payload.pageIndex], texts:[...action.payload.textArr]
//                 }
//                 console.log(page,"#################################");
//                // return [...state]
//                 return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

//         case 'GET_TEXT_TEMPLATE':
//             page = {
//                 ...state[action.payload.pageIndex], textTemplate:[...state[action.payload.pageIndex][0].textTemplate, ...action.payload.textTemplate]
//             }
//             return  state.slice(0, action.payload.pageIndex).concat([page]).concat(state.slice(action.payload.pageIndex+1));

//         default: return state
//     }
// }
// export default handlePage;

// =======================================================================================================

const pageEmpty = [
  {
    template: null,
    svgs: [],
    logos: [],
    texts: [],
    textTemplate: [],
    backgroundColor: "white",
    comment: "",
    notes: "",
    title: "",
    frame: {
      frameNumber: 0,
    },
    shapeCanvas: "",
  },
];
const initialState = [];
const textBox = { pageIndex: "", index: "" };

const handlePage = (state = initialState, action) => {
  // console.log(state.cart);

  let page = null;
  let tB = null;
  switch (action.type) {
    case "ADD_PAGE":
      // console.log("before adding page", ...action.payload.page);
      return [...action.payload.page];
    case "CREATE_EMPTY_PAGE":
      return [...state, pageEmpty];
    // switch (action.type) {
    //   case "ADD_PAGE":
    //     return [...action.payload.page];
    //   case "CREATE_EMPTY_PAGE":
    //     return [...state, pageEmpty];

    case "EMPTY_PAGE":
      return state
        .slice(0, action.payload.pageIndex)
        .concat([pageEmpty])
        .concat(state.slice(action.payload.pageIndex + 1));
    case "UPDATE_PAGE":
      return state
        .slice(0, action.payload.pageIndex)
        .concat([action.payload.pageUpdated])
        .concat(state.slice(action.payload.pageIndex + 1));

    case "GET_TEMPLATE":
      // console.log(state,"------");

      page = {
        ...state[action.payload.pageIndex],
        template: action.payload.template,
      };
      const obj = state
        .slice(0, action.payload.pageIndex)
        .concat([page])
        .concat(state.slice(action.payload.pageIndex + 1));
      //    console.log(obj,"=====");
      return obj;
    case "UPDATE_TEMPLATE_COLOR":
      return state
        .slice(0, action.payload.pageIndex)
        .concat([action.payload.page])
        .concat(state.slice(action.payload.pageIndex + 1));
    case "GET_SVGS":
      page = {
        ...state[action.payload.pageIndex],
        svgs: [
          ...state[action.payload.pageIndex][0].svgs,
          ...action.payload.Svg,
        ],
      };
      return state
        .slice(0, action.payload.pageIndex)
        .concat([page])
        .concat(state.slice(action.payload.pageIndex + 1));

    case "GET_LOGOS":
      page = {
        ...state[action.payload.pageIndex][0],
        logos: [
          ...state[action.payload.pageIndex][0].logos,
          ...action.payload.logo,
        ],
      };
      return state
        .slice(0, action.payload.pageIndex)
        .concat([page])
        .concat(state.slice(action.payload.pageIndex + 1));

    case "SET_LOGOS":
      page = {
        ...state[action.payload.pageIndex],
        logos: [
          ...(state[action.payload.pageIndex].logos
            ? [...state[action.payload.pageIndex].logos, action.payload.logo]
            : [action.payload.logo]),
        ],
      };
      return state
        .slice(0, action.payload.pageIndex)
        .concat([page])
        .concat(state.slice(action.payload.pageIndex + 1));

    case "GET_TEXTS":
      page = {
        ...state[action.payload.pageIndex],
        texts: [
          ...(Array.isArray(state[action.payload.pageIndex].texts)
            ? state[action.payload.pageIndex].texts
            : []),
          ...action.payload.text,
        ],
      };
      state[action.payload.pageIndex].texts = page.texts;

      return state
        .slice(0, action.payload.pageIndex)
        .concat([page])
        .concat(state.slice(action.payload.pageIndex + 1));

    case "UPDATE_TEXTS":
      page = {
        ...state[action.payload.pageIndex],
        texts: [...action.payload.textArr],
      };
      console.log(page, "#################################");
      // return [...state]
      return state
        .slice(0, action.payload.pageIndex)
        .concat([page])
        .concat(state.slice(action.payload.pageIndex + 1));

    case "GET_TEXT_TEMPLATE":
      page = {
        ...state[action.payload.pageIndex],
        textTemplate: [
          ...state[action.payload.pageIndex][0].textTemplate,
          ...action.payload.textTemplate,
        ],
      };
      return state
        .slice(0, action.payload.pageIndex)
        .concat([page])
        .concat(state.slice(action.payload.pageIndex + 1));
    case "UPDATE_PAGE_SHAPE":
      return (state[action.payload.pageIndex].shapeCanvas =
        action.payload.shape);
    case "CHANGE_TEMPLATE":
      // console.log("updating-----------------------------------");
      // console.log(
      //   state
      //     .slice(0, action.payload.pageIndex)
      //     .concat(action.payload.pageUpdated)
      //     .concat(state.slice(action.payload.pageIndex + 1))
      // );
      return state
        .slice(0, action.payload.pageIndex)
        .concat(action.payload.pageUpdated)
        .concat(state.slice(action.payload.pageIndex + 1));

    case "SET_TEXTBOX":
      // console.log(
      //   "------------------------------------------------------------",
      //   state[action.payload.pageIndex].texts[action.payload.textboxIndex]
      // );
      textBox.pageIndex = action.payload.pageIndex;
      textBox.index = action.payload.textboxIndex;
      return state;

    case "EDIT_TEXT":
      tB = {
        ...state[action.payload.activePage].texts[action.payload.activeElement],
        fontSize: action.payload.fontSize,
        fontWeight: action.payload.fontWeight,
        family: action.payload.fontFamily,
      };
      let p = {
        ...state[action.payload.activePage],
        texts: state[action.payload.activePage].texts
          .slice(0, action.payload.activeElement)
          .concat(tB)
          .concat(
            state[action.payload.activePage].texts.slice(
              action.payload.activeElement + 1
            )
          ),
      };

      // console.log(
      //   "State:",
      //   state,
      //   "updated: ",
      //   state
      //     .slice(0, textBox.pageIndex)
      //     .concat(p)
      //     .concat(state.slice(textBox.pageIndex + 1))
      // );

      return state
        .slice(0, textBox.pageIndex)
        .concat(p)
        .concat(state.slice(textBox.pageIndex + 1));

    case "UPLOAD_IMG":
      state[action.payload.pageIndex].images
        ? (page = {
            ...state[action.payload.pageIndex],
            images: [
              ...state[action.payload.pageIndex].images,
              {
                file: action.payload.file,
                height: "100px",
                width: "100px",
                x: "50px",
                y: "50px",
                rotate: 0,
              },
            ],
          })
        : (page = {
            ...state[action.payload.pageIndex],
            images: [
              {
                file: action.payload.file,
                height: "100px",
                width: "100px",
                x: "50px",
                y: "50px",
                rotate: 0,
              },
            ],
          });
      return state
        .slice(0, action.payload.pageIndex)
        .concat(page)
        .concat(state.slice(action.payload.pageIndex + 1));

    case "ROTATE_IMG":
      state[action.payload.pageIndex].images[action.payload.Eindex].rotate =
        action.payload.rotate;
      return state;

    case "EDIT_FONT_BOLD":
      state[action.payload.pageIndex].texts[
        action.payload.elementIndex
      ].isBold = action.payload.bold;
      return state;

    case "EDIT_FONT_ITALICS":
      state[action.payload.pageIndex].texts[
        action.payload.elementIndex
      ].isItalic = action.payload.italics;
      return state;

    case "EDIT_FONT_UNDERLINE":
      state[action.payload.pageIndex].texts[
        action.payload.elementIndex
      ].underline = action.payload.underline;
      return state;

    case "EDIT_FONT_FAMILY":
      state[action.payload.pageIndex].texts[
        action.payload.elementIndex
      ].family = action.payload.family;
      return state;

    case "EDIT_FONT_SIZE":
      state[action.payload.pageIndex].texts[
        action.payload.elementIndex
      ].fontSize = action.payload.fontSize;
      return state;

    case "EDIT_FONT_COLOR":
      state[action.payload.pageIndex].texts[action.payload.elementIndex].color =
        action.payload.color;
      console.log(state);
      return state;

    case "EDIT_FONT_ZINDEX":
      state[action.payload.pageIndex].texts[action.payload.elementIndex].zIndex =
        action.payload.ZINDEX;
      // console.log("inside Zindex of Texts ",state,"page index => ",action.payload.pageIndex ,"Element index => ",action.payload.elementIndex);
      return state;

    case "EDIT_SHAPE_BGCOLOR":
      state[action.payload.pageIndex].shapes[
        action.payload.elementIndex
      ].background = action.payload.color;
      return state;

    case "EDIT_SHAPE_ZINDEX":
      state[action.payload.pageIndex].shapes[
        action.payload.elementIndex
      ].zIndex = action.payload.index;
      return state;

    case "DELETE_PAGE":
      return (state.page = null);

    default:
      return state;
  }
};

export default handlePage;
