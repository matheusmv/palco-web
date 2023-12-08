import { createSlice } from '@reduxjs/toolkit';

const userState = {
  user: undefined,
  admin: false,
};

const slice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload.user;
      state.admin = action.payload.user.role === 'ADMIN';
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.admin = action.payload.role === 'ADMIN';
    },
    clearUser: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      state.admin = false;
    },
  },
});

export const { authUser, setUser, clearUser } = slice.actions;

export default slice.reducer;
