import { moviesTypes } from "../actionTypes";

const initialState = {
  networks: [],
  error: "",
  update: false,
};

export default function networksReducer(state = initialState, action) {
  switch (action.type) {
    case moviesTypes.GET_NETWORKS_SUCCESS:
      return {
        ...state,
          networks: action.payload,
      };

    case moviesTypes.GET_NETWORKS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case moviesTypes.UPDATE_NETWORK_SUCCESS:
      return {
        ...state,
        update: true,
      }
    case moviesTypes.UPDATE_NETWORK_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return {
        ...state
      };
  }
}