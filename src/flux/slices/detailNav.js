import { createSlice } from "@reduxjs/toolkit";

const DetailNavSlice = createSlice({
  name: "detailNavigation",
  initialState: {
    detailNavigation: {
      state: false,
    },
  },
  reducers: {
    setDetailNavigation(state, action) {
      state.detailNavigation = action.payload;
    },
  },
});

export const { setDetailNavigation } = DetailNavSlice.actions;
export const selectDetailNavigation = (state) => state.detailNavigation;
export default DetailNavSlice.reducer;
