import { actionTypes } from "../actionTypes";

export function startLoading(actionType) {
  return async (dispatch, getState) => {
    try {
      const { loadingReducer } = getState();

      dispatch({
        type: actionTypes.START_LOADING,
        payload: [...loadingReducer.loadings, actionType],
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function finishLoading(actionType) {
  return async (dispatch, getState) => {
    try {
      const { loadingReducer } = getState();

      dispatch({
        type: actionTypes.FINISH_LOADING,
        payload: loadingReducer.loadings.filter((el) => el !== actionType),
      });
    } catch (e) {
      console.log(e);
    }
  };
}
