import { moviesTypes } from "../actionTypes";
import { startLoading, finishLoading } from "./loadingAction";
import { loadingTypes } from "../loadingTypes";
import { DataProvider } from "../../utils/ApiClient";

export function getGenres() {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.GENRES_LOADING));

      const genres = await DataProvider.getCategories({
        region: "US",
        type: "movie",
      });

      dispatch({
        type: moviesTypes.GET_GENRES,
        payload: genres.results,
      });
    } catch (e) {
      dispatch({
        type: moviesTypes.GET_GENRES_FAILED,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.GENRES_LOADING));
    }
  };
}

export function changeGenres({ localGenres }) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.CHANGE_GENRES_LOADING));

      console.log(!localGenres.active)
      const changeGenres = await DataProvider.updateCatItem( localGenres.name, !localGenres.active );
      dispatch({
        type: moviesTypes.CHANGE_GENRES,
        payload: localGenres
      });
      console.log(changeGenres);
    } catch (e) {
      dispatch({
        type: moviesTypes.CHANGE_GENRES_FAILED,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.CHANGE_GENRES_LOADING));
    }
  };
}
