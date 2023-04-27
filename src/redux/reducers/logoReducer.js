
const initialState={
    x:"",
    y:"",
    width:"",
    height:""
}
const logoForm=(state=initialState,action)=>{
    switch (action.type) {
        case "SET_DIY_FORM_LOGO":
          return {
            ...state,
           x:action.payload.x,
           y:action.payload.y,
           width:action.payload.width,
           height:action.payload.height
          };
          
        default:
          return state;
      }
}
export default logoForm;