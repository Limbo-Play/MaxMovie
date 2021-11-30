import { moviesTypes } from "../actionTypes";
import { startLoading, finishLoading } from "../actions/loadingAction";
import { loadingTypes } from "../loadingTypes";
import { DataProvider } from "../../utils/ApiClient";

export function likeAMovie(id) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.LIKE_MOVIES_LOADING));
      const like = await DataProvider.swipeMedia(id, "like");
      dispatch({
        type: moviesTypes.LIKE_MOVIE_SUCCESS,
      });
      console.log(like);
    } catch (e) {
      dispatch({
        type: moviesTypes.LIKE_MOVIE_FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.LIKE_MOVIES_LOADING));
    }
  };
}

export function disLikeAMovie(id) {
  return async function (dispatch) {
    try {
      dispatch(startLoading(loadingTypes.DISLIKE_MOVIES_LOADING));

      const disLike = await DataProvider.swipeMedia(id, "dislike");
      dispatch({
        type: moviesTypes.DISLIKE_MOVIE_SUCCESS,
      });
      console.log(disLike);
    } catch (e) {
      dispatch({
        type: moviesTypes.DISLIKE_MOVIE_FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch(finishLoading(loadingTypes.DISLIKE_MOVIES_LOADING));
    }
  };
}

export function getLikedMovies(more = false) {
  return async function (dispatch, getState) {
    const { likedMoviesReducer, loadingReducer } = getState();
    const isLoading = loadingReducer.loadings.includes(
      loadingTypes.LIKED_MOVIES_LOADING
    );

    if (!isLoading) {
      try {
        const lastMovie = more
          ? likedMoviesReducer.likedMovies[
              likedMoviesReducer.likedMovies.length - 1
            ]?.id
          : 0;
        const lastId = more ? lastMovie : 0;
        dispatch(startLoading(loadingTypes.LIKED_MOVIES_LOADING));
        const data = await DataProvider.fetchLikedMovies(lastId, 20);
        if (data) {
          dispatch({
            type: more
              ? moviesTypes.LIKED_MORE
              : moviesTypes.LIKED_MOVIES_SUCCESS,
            payload: more
              ? [...likedMoviesReducer.likedMovies, ...data.movies]
              : data.movies,
          });
        }
      } catch (e) {
        dispatch({
          type: more
            ? moviesTypes.LIKED_MORE_FAILED
            : moviesTypes.LIKED_MOVIES_FAILURE,
          payload: e.message,
        });
      } finally {
        dispatch(finishLoading(loadingTypes.LIKED_MOVIES_LOADING));
      }
    }
  };
}
