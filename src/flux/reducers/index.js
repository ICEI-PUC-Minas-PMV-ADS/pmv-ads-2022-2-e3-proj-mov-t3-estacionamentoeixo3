import message from "../slices/message";
import theme from "../slices/theme";
import user from "../slices/user";
import park from "../slices/park";
import detailNavigation from "../slices/detailNav";

import { combineReducers } from "redux";

export default combineReducers({
  theme,
  message,
  user,
  park,
  detailNavigation,
});
