import { combineReducers } from "redux";
import menus from "./menuReducer";

const rootReducer = combineReducers({
  menus: menus
});

export default rootReducer;
