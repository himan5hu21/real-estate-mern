import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    requestFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    requestCancelled: (state) => {
      state.loading = false;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      state.loading = false;
      state.error = null;
    },
    signUpSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      state.loading = false;
      state.error = null;
    },
    updatePasswordSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      state.loading = false;
      state.error = null;
    },
    signOutSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.currentUser = null;
    },
  },
});

export const {
  requestStart,
  requestFailure,
  requestCancelled,
  signInSuccess,
  signUpSuccess,
  updateUserSuccess,
  updatePasswordSuccess,
  signOutSuccess,
} = userSlice.actions;

export default userSlice.reducer;
