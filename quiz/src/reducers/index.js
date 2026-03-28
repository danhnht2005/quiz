import { combineReducers } from "redux";
import loginReducer from "./login";

const allReducers = combineReducers({
  loginReducer,
  //them reducers tại đây
});

export default allReducers;