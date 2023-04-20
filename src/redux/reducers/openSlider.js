let initialState = false;

const sideSlider = (state = initialState, action) => {
  switch (action.type) {
    case "SLIDER_ON":
      // console.log("SLIDER_ON");
      return true;
    case "SLIDER_OFF":
      // console.log("SLIDER_OFF");
      return false;
    default:
      return state;
  }
};

export default sideSlider;
