import { createStore, applyMiddleware } from "redux";
import { appReducer } from "./helper";
import { middleWare } from "./middleware/Middleware";

const store = createStore(appReducer, applyMiddleware(middleWare));

export default store;
