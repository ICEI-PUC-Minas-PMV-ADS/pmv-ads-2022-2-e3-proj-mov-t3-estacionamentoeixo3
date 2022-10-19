import { configureStore } from "@reduxjs/toolkit";
import rootReduces from "../reducers";
//Store aplications
const store = configureStore({
  reducer: rootReduces,
});

export default store;
