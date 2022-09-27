import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "./../../utils/Api";
export const getDashboardCount = createAsyncThunk(
  "dashboard/getDashboardCount",
  async () => {
    return await api.getDashboardCount();
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    schoolsCount: 0,
    studentsCount: 0,
    staffsCount: 0,
    coursesCount: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardCount.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getDashboardCount.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.schoolsCount = action.payload.schoolsCount;
          state.studentsCount = action.payload.studentsCount;
          state.staffsCount = action.payload.staffsCount;
          state.coursesCount = action.payload.coursesCount;
        }
      })
      .addCase(getDashboardCount.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});

export default dashboardSlice.reducer;
