//import { createStore, applyMiddleware } from "redux";
import * as redux from "redux";
import reducers, { initialState } from "./reducers";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = redux.createStore(
  reducers,
  initialState,
  composeWithDevTools(redux.applyMiddleware(thunkMiddleware))
);

console.log("Initial State", store.getState());
