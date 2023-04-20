const initialState = {
  posterList: [],
  posterSubcategoryList: [],
  count: 0,
  languageVariantPosters: [],
  colorVariantPosters: [],
  cndVariantPosters: [],
};

if (localStorage.getItem("poster")) {
  initialState.poster = JSON.parse(localStorage.getItem("poster"));
} else {
  initialState.poster = {
    posterList: [],
    posterSubcategoryList: [],
  };
}

const handlePoster = (state = initialState, action) => {
  // console.log(state.cart);
  switch (action.type) {
    case "GET_POSTER_CATEGORY":
      return { ...state, posterList: [...action.payload] };

    case "GET_POSTER_SUBCATEGORY":
      return { ...state, posterSubcategoryList: [...action.payload] };

    case "GET_POSTER_COUNT":
      return {
        ...state,
        count: action.payload,
      };

    case "LANGUAGE_VARIANT_POSTERS":
      return { ...state, languageVariantPosters: [...action.payload] };

    case "COLOR_VARIANT_POSTERS":
      return { ...state, colorVariantPosters: [...action.payload] };

    case "CND_VARIANT_POSTERS":
      return { ...state, cndVariantPosters: [...action.payload] };

    default:
      return state;
  }
};

export default handlePoster;
