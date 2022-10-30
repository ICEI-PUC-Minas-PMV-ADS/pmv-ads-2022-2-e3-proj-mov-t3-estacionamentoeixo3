import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    drawer: {
      menuOpen: false,
    },
  },
  reducers: {
    setDrawer(state, action) {
      state.drawer = action.payload;
    },
  },
});

export const { setDrawer } = drawerSlice.actions;
export const selectDrawer = (state) => state.drawer;
export default drawerSlice.reducer;
