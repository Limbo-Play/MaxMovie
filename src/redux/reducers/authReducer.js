import { actionTypes } from "../actionTypes";
const initialState = {
  isAuth: false,
  user: {},
  error: "",
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        isAuth: true,
        user: action.payload,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        error: action.payload,
      };
    case actionTypes.REFRESH_SESSION_SUCCES:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case actionTypes.REFRESH_SESSION_FAILED:
      return {
        ...state,
        isAuth: false,
      };
    case actionTypes.SIGN_OUT_SUCCES:
      return {
        isAuth: false,
      };
    case actionTypes.SIGN_OUT_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default authReducer;
