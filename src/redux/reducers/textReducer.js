

const initialState={
  x: "",
  y: "",
  fontSize: "",
  fontFamily: "",
  // text: "",
  // color: "",
  isBold:Boolean,
  isItalic:Boolean,
  // letterSpacing: "",
  // lineSpacing: "",
  underLine:Boolean,
}
const textForm=(state=initialState,action)=>{
    switch (action.type) {
        case "SET_DIY_FORM_TEXT_MARGIN":
          return {
            ...state,
           x:action.payload.x,
           y:action.payload.y
          };
          case "SET_DIY_FORM_FONT_SIZE":
            return {
              ...state,
              fontSize:action.payload.fontSize
            }
            case "SET_DIY_FORM_FONT_FAMILY":
              return{
                ...state,
                fontFamily:action.payload.fontFamily
              }
              case "SET_DIY_FORM_ISBOLD":
                return{
                  ...state,
                  isBold:action.payload.isBold
                }
                case "SET_DIY_FORM_ISITALIC":
                  return{
                    ...state,
                    isItalic:action.payload.isItalic
                  }
                  case "SET_DIY_FORM_UNDERLINE":
                    return{
                      ...state,
                      underLine:action.payload.underLine
                    }
        default:
          return state;
      }
}
export default textForm;