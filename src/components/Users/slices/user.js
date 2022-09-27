import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    add: (state, { payload }) => {
      state.users.push(payload);
    },
    view: (state, { payload }) => {
      state.user[payload.uid] = payload;
    },
    remove: (state, { payload }) => {
      let index = state.users.findIndex((x) => x.uid === payload);
      state.users.splice(index, 1);
    },
  },
});

export const { add, remove, view } = userSlice.actions;

export default userSlice.reducer;
