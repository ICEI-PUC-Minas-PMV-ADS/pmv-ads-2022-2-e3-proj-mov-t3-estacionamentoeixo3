import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authenticate: false,
    nome: "",
    email: "",
    id: 0,
  },
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    setIsAuhtenticate: (state, action) => {
      state.authenticate = action.payload;
    },
  },
});

export const { setUser, setIsAuhtenticrate, setIdUser } = userSlice.actions;
export const selectUser = (state) => state;
export default userSlice.reducer;
