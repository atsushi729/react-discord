import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../Types";

const initialState: initialUserState = {
  user: null, // Initial user state is null
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // change user state based on dispatched event
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
