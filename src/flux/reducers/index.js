import message from "../slices/message";
import theme from "../slices/theme";
import user from "../slices/user";
import { combineReducers } from "redux";

export default combineReducers({ theme, message, user });
