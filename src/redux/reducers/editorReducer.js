const initialState = {
  activeTool: "Dimension-Tools",
  activePage: 0,
  activeElementType: "page", //page,text,shape,image,logos
  activeElementIndex: 0,
};

const editor = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TOOL":
      return {
        ...state,
        activeTool: action.payload.activeTool,
        activePage: action.payload.activePage,
        activeElementType: action.payload.activeElementType,
        activeElementIndex: action.payload.activeElementIndex,
      };
    default:
      return state;
  }
};

export default editor;
