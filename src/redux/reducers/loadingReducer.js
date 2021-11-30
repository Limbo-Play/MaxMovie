import { actionTypes } from "../actionTypes";

const initialState = {
  loadings: [],
};

function loadingsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        loadings: action.payload,
      };
    case actionTypes.FINISH_LOADING:
      return {
        loadings: action.payload,
      };
    default:
      return state;
  }
}

export default loadingsReducer;
