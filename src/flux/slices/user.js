import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      authenticate: false,
      nome: "",
      email: "",
      menuOpen: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuhtenticate: (state, action) => {
      state.user.authenticate = action.payload;
    },
  },
});

export const { setUser, setIsAuhtenticate } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
