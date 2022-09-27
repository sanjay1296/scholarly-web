import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../utils/Api";

export const registerUser = createAsyncThunk("user/register", async (data) => {
  console.log("register data", data);
  return await api.registerUser(data);
});

export const fetchUser = createAsyncThunk("user/fetch", async (uid) => {
  return await api.displayProfile(uid);
});

export const updateUser = createAsyncThunk("user/update", async () => {
  return await api.updateUser();
});

export const deleteUser = createAsyncThunk("user/delete", async () => {
  return await api.deleteUser();
});

export const fetchAllUsers = createAsyncThunk("user/fetchAll", async () => {
  return await api.fetchAllUsers();
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: "idle",
  },
  extraReducers: (builder) => {
    builder
      /** start of register slice */
      .addCase(registerUser.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.userId = action.payload.userId;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      })
      /**end of register slice */

      /** start of fetch all users slice */
      .addCase(fetchAllUsers.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.list = action.payload;
        }
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.user = action.payload;
          state.error = action.error;
        }
      })
      /**end of fetch all users slice */
      
      /**Fetch user info */
      .addCase(fetchUser.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          console.log(action.payload);
          state.user = action.payload;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.user = action.payload;
          state.error = action.error;
        }
      });
    /**End Fetch user info */
  },
});

export default userSlice.reducer;
