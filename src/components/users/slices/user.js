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
    remove: (state, { payload }) => {
      let index = state.users.findIndex((x) => x.uid === payload);
      state.users.splice(index, 1);
    },
  },
});

export const { add, remove } = userSlice.actions;

export default userSlice.reducer;
