import { combineReducers } from "redux";
import menus from "./menuReducer";

const rootReducer = combineReducers({
  menus
});

export default rootReducer;
