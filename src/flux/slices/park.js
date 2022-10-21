import { createSlice } from "@reduxjs/toolkit";

const parkSlice = createSlice({
  name: "park",
  initialState: {
    park: {
      parks: [],
    },
  },
  reducers: {
    setPark(state, action) {
      state.park = action.payload;
    },
  },
});

export const { setPark } = parkSlice.actions;
export const selectPark = (state) => state.park;
export default parkSlice.reducer;
