import { moviesTypes } from "../actionTypes";
import { startLoading, finishLoading } from "./loadingAction";
import { loadingTypes } from "../loadingTypes";
import { DataProvider } from "../../utils/ApiClient";

export function getNetworks() {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.NETWORKS_LOADING));

      const networks = await DataProvider.getFreeNetworkStates();
      dispatch({
        type: moviesTypes.GET_NETWORKS_SUCCESS,
        payload: networks,
      });
    } catch (e) {
      dispatch({
        type: moviesTypes.GET_NETWORKS_FAILED,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.NETWORKS_LOADING));
    }
  };
}

export function updateNetworkState({ localNetwork }) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.UPDATE_NETWORK_LOADING));

      const updatedNetwork = await DataProvider.updateNetworkState(
        localNetwork.id,
        !localNetwork.isActive
      );
      console.log(updatedNetwork);
      dispatch({
        type: moviesTypes.UPDATE_NETWORK_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: moviesTypes.UPDATE_NETWORK_FAILED,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.UPDATE_NETWORK_LOADING));
    }
  };
}
