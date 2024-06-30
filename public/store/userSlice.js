import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
