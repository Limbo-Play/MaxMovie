import { actionTypes } from "../actionTypes";
const initialState = {
  username: "billiabend+test14@gmail.com",
  recover: false,
  error: "",
};

function recoverReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RECOVER_PASS_REQUEST:
      return {
        username: action.payload,
        error: "",
      };
    case actionTypes.RECOVER_PASS_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.RECOVER_PASS_SUCCESS:
      return {
        ...state,
        recover: true,
        error: "",
      };
    case actionTypes.RECOVER_PASS_FAILED:
      return {
        ...state,
        recover: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default recoverReducer;
