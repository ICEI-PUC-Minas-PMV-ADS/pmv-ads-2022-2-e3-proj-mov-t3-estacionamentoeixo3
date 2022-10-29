import { createSlice } from "@reduxjs/toolkit";

const parkAuthSlice = createSlice({
  name: "parkAuth",
  initialState: {
    parkAuth: {
      authenticate: false,
      razao: "",
      email: "",
    },
  },
  reducers: {
    setParkAuth: (state, action) => {
      state.parkAuth = action.payload;
    },
    setIsParkAuhtenticate: (state, action) => {
      state.parkAuth.authenticate = action.payload;
    },
  },
});

export const { setParkAuth, setIsParkAuhtenticate } = parkAuthSlice.actions;
export const selectParkAuth = (state) => state.parkAuth;
export default parkAuthSlice.reducer;
