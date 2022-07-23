import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";

const rootReducer = combineReducers({
  catalogReducer: catalogReducer,
});

export default rootReducer;
