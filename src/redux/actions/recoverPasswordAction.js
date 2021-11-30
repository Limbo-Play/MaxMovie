import { actionTypes } from "../actionTypes";
import { startLoading, finishLoading } from "../actions/loadingAction";
import { loadingTypes } from "../loadingTypes";
import { Auth } from "aws-amplify";

export function sendRecoverCode(email) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.RECOVER_PASS_LOADING));

      const data = await Auth.forgotPassword(email);
      dispatch({
        type: actionTypes.RECOVER_PASS_REQUEST,
        payload: email,
      });
      console.log(data);
    } catch (e) {
      dispatch({
        type: actionTypes.RECOVER_PASS_REQUEST_FAILED,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.RECOVER_PASS_LOADING));
    }
  };
}

export function recoverPassword({ code, newPassword }) {
  return async function (dispatch, getState) {
    const { recoverReducer } = getState();
    try {
      dispatch(startLoading(loadingTypes.RECOVER_PASS_LOADING));

      const recoverPassword = await Auth.forgotPasswordSubmit(
        recoverReducer.username,
        code,
        newPassword
      );
      console.log(recoverReducer.username, code, newPassword);
      dispatch({
        type: actionTypes.RECOVER_PASS_SUCCESS,
        payload: recoverPassword,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: actionTypes.RECOVER_PASS_FAILED,
        payload: error.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.RECOVER_PASS_LOADING));
    }
  };
}
