import { moviesTypes } from "../actionTypes";
const initialState = {
  movies: [],
  genres: [],
  error: "",
  currentMovies: {}
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case moviesTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
      case moviesTypes.GET_MOVIES_FAILURE:
          return {
              ...state,
              error: action.payload,
      }
    case moviesTypes.GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      }
    case moviesTypes.GET_GENRES_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    case moviesTypes.CHANGE_GENRES:
      const genres = state.genres.map((el) => ({
        ...el,
        active:
          el.id === action.payload.id
            ? !action.payload.active
            : el.active,
      }))
      return {
        ...state,
        genres,
      }
    case moviesTypes.CHANGE_GENRES_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    case moviesTypes.CURRENT_MOVIE:
      return {
        ...state,
        currentMovies: action.payload
      }
     default:
      return state;
  }
}

export default moviesReducer;