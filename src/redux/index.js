import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authReducer";
import loadingReducer from "./reducers/loadingReducer";
import signUpReducer from "./reducers/signUpReducer";
import moviesReducer from "./reducers/moviesReducer";
import networksReducer from "./reducers/networkReducer";
import recoverReducer from "./reducers/recoverPasswodReducer";
import likedMoviesReducer from "./reducers/likedMovieReducer";

const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  signUpReducer,
  moviesReducer,
  networksReducer,
  recoverReducer,
  likedMoviesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const persistor = persistStore(store);

export { persistor, store };
