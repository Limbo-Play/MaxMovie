import { actionTypes } from "../actionTypes";
import { Auth } from "aws-amplify";
import { startLoading, finishLoading } from "./loadingAction";
import { loadingTypes } from "../loadingTypes";

export function signUp({ email, password, name }) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.SIGN_UP_LOADING));
      const userData = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          name: name,
        },
      });
      console.log(userData);
      dispatch({
        type: actionTypes.SIGN_UP_REQUEST,
        payload: email,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.SIGN_UP_FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.SIGN_UP_LOADING));
    }
  };
}

export function verifySubmit(payload) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.VERIFY_LOADING));
      const confirmData = await Auth.confirmSignUp(
        payload.userNameForVerify,
        payload.confirmCode
      );
      console.log(confirmData);
      dispatch({
        type: actionTypes.VERIFY_REQUEST,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.VERIFY_FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.VERIFY_LOADING));
    }
  };
}

export function reSendVerify(payload) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.RESEND_LOADING));

      const resendConfirmCode = await Auth.resendSignUp(
        payload.userNameForVerify
      );
      console.log("wait a message on email");
      console.log(resendConfirmCode);
      dispatch({
        type: actionTypes.VERIFY_RE_SEND,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.RE_SEND_FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.RESEND_LOADING));
    }
  };
}


export function signOut(){
  return async function (dispatch){
    try {
      dispatch(startLoading(loadingTypes.SIGN_OUT_LOADING));
      const signOut = await Auth.signOut();
      console.log(signOut)
      dispatch({
        type: actionTypes.SIGN_OUT_SUCCES,
      })
    } catch (error) {
      console.log('error signing out: ', error);
       dispatch({
        type: actionTypes.SIGN_OUT_FAILED,
        payload: error.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.SIGN_OUT_LOADING));
    }
  }
}