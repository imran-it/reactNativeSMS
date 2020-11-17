import actionType from "../constant/Constant";

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_ADMIN:
      return {
        ...state,
      };
    default:
      return state;
  }
};
