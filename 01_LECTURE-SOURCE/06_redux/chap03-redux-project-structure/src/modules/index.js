import {combineReducers} from "redux";
import menuReducer from "./MenuModules";
import userReducer from "./UserModules";

const rootReducer = combineReducers({
    menuReducer, userReducer});

export default rootReducer;