import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "message",
  initialState: {
    message: {
      state: false,
      type: "",
      text: "",
      status: "",
    },
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = logSlice.actions;
export const selectMessage = (state) => state.message;
export default logSlice.reducer;
