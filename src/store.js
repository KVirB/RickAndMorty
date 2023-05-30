import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import charactersReducer from "./reducer/charactersReducer";
import episodesReducer from "./reducer/episodesReducer";

let reducers = combineReducers({
  charactersPage: charactersReducer,
  episodesPage: episodesReducer,
});

let store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
