import { combineReducers } from "redux";
import postReducer from "./getReducer";

export default combineReducers({
  posts: postReducer
});
