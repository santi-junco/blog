import { combineReducers } from "redux";
import blog  from "./blog";
import categorires from "./categories";

export default combineReducers({
    blog,
    categorires
})