import { actionTypes } from "../actionTypes";
import { Auth } from "aws-amplify";
import { startLoading, finishLoading } from "../actions/loadingAction";
import { loadingTypes } from "../loadingTypes";

export function login({ login, password }) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.AUTH_LOADING));

      const user = await Auth.signIn(login, password);
      dispatch({
        type: actionTypes.LOGIN_REQUEST,
        payload: {
          name: user.attributes.name,
          email: user.attributes.email,
          jwtToken: user.signInUserSession.accessToken.jwtToken,
        },
      });
    } catch (e) {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.AUTH_LOADING));
    }
  };
}

export function refreshSession() {
  return async (dispatch) => {
    try {
      dispatch(startLoading(loadingTypes.REFRESH_SESSION_LOADING));

      const cognitoUser = await Auth.currentAuthenticatedUser();
      const currentSession = await Auth.currentSession();
      cognitoUser.refreshSession(
        currentSession.getRefreshToken(),
        (error, session) => {
          if (error) {
            dispatch({
              type: actionTypes.REFRESH_SESSION_FAILED,
            });
          } else {
            dispatch({
              type: actionTypes.REFRESH_SESSION_SUCCES,
              payload: {
                name: session.idToken.payload.name,
                email: session.idToken.payload.email,
                jwtToken: session.idToken.jwtToken,
              },
            });
            dispatch(finishLoading(loadingTypes.REFRESH_SESSION_LOADING));
          }
        }
      );
    } catch (e) {
      console.log("Unable to refresh Token:", e);
      dispatch({
        type: actionTypes.REFRESH_SESSION_FAILED,
      });
      dispatch(finishLoading(loadingTypes.REFRESH_SESSION_LOADING));
    }
  };
}
