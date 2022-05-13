import { actionTypes } from "../actionTypes";

const initialState = {
  registration: false,
  userNameForVerify: "",
  verify: false,
  error: "",
};

export default function signUp(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        registration: true,
        userNameForVerify: action.payload,
      };

    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        registration: false,
        error: action.payload,
      };
    case actionTypes.VERIFY_REQUEST:
      return {
        ...state,
        verify: true,
      }
    case actionTypes.VERIFY_FAILURE:
      return {
        ...state,
        verify: false,
        error: action.payload,
      };
    
    default:
      return {
        ...state
      };
  }
}
