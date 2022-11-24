import { createSlice } from "@reduxjs/toolkit";

const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    userId: {
      id: undefined,
    },
  },
  reducers: {
    setUserId(state, action) {
      console.log(action);
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userIdSlice.actions;
export const selectUserId = (state) => state.userId;
export default userIdSlice.reducer;
