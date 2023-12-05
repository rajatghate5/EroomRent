import { combineReducers } from "redux";
import detailReducer from "./detailsReducer";

const rootReducers = combineReducers({ detailReducer });

export default rootReducers;
