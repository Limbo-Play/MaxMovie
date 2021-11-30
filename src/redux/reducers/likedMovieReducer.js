import { moviesTypes } from "../actionTypes";
const initialState = {
    likedMovies: [],
    like: "",
    error: "",
};

function likedMoviesReducer(state = initialState, action) {
  switch (action.type) {
    
    case moviesTypes.LIKE_MOVIE_SUCCESS:
      return {
        ...state,
        like: "liked",
      }
    case moviesTypes.LIKE_MOVIE_FAILURE:
      return {
        ...state,
        like: "",
        error: action.payload,
      }
    case moviesTypes.DISLIKE_MOVIE_SUCCESS:
      return {
        ...state,
        like: "disliked"
      }
    case moviesTypes.DISLIKE_MOVIE_FAILURE:
      return {
        ...state,
        like: "",
        error: action.payload,
      }
    case moviesTypes.LIKED_MOVIES_SUCCESS:
      return {
        ...state,
        likedMovies: action.payload,
      }
    case moviesTypes.LIKED_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case moviesTypes.LIKED_MORE:
      return {
        ...state,
        likedMovies: action.payload,
      }
    case moviesTypes.LIKED_MORE_FAILED:
      return {
        ...state,
        error: action.payload,
      }
     default:
      return state;
  }
}

export default likedMoviesReducer;