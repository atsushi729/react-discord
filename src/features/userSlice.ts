import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../Types";

const initialState: initialUserState = {
  user: null,
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

export default userSlice.reducer;
