import actionType from "../constant/Constant";

const initialState = {
  loading: false,
  ThemeColor: "#FFF",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGETHEMECOLOR:
      return {
        ...state,
        ThemeColor: "#000",
      };
    default:
      return state;
  }
};
