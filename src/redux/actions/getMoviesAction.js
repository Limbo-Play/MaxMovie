import { moviesTypes } from "../actionTypes";
import { startLoading, finishLoading } from "./loadingAction";
import { loadingTypes } from "../loadingTypes";
import { DataProvider } from "../../utils/ApiClient";

export function getMovies(types) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.GET_MOVIES_LOADING));
      const movies = await DataProvider.getMovies({
        region: "US",
        type: types ? types : "tv",
      });

      dispatch({
        type: moviesTypes.GET_MOVIES_SUCCESS,
        payload: movies.movies,
      });
      console.log(movies);
    } catch (e) {
      dispatch({
        type: moviesTypes.GET_MOVIES_FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.GET_MOVIES_LOADING));
    }
  };
}

export const currentMovie = (obj) => ({
  type: moviesTypes.CURRENT_MOVIE,
  payload: obj,
});
