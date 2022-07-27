import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../utils/Api";

export const registerSchool = createAsyncThunk(
  "school/register",
  async (data) => {
    console.log('register data',data)
    return await api.registerSchool(data);
  }
);

export const fetchSchool = createAsyncThunk("school/fetch", async () => {
  return await api.fetchSchool();
});

export const updateSchool = createAsyncThunk("school/update", async () => {
  return await api.updateSchool();
});

export const deleteSchool = createAsyncThunk("school/delete", async () => {
  return await api.deleteSchool();
});

export const fetchAllSchools = createAsyncThunk("school/fetchAll", async () => {
  return await api.fetchAllSchools();
});

export const schoolSlice = createSlice({
  name: "school",
  initialState: {
    loading: "idle",
  },
  extraReducers: (builder) => {
    builder
      /** start of register slice */
      .addCase(registerSchool.pending, (state, action) => {
        console.log("pending ", state, action);
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(registerSchool.fulfilled, (state, action) => {
        console.log("fulfilled ", state.loading, action);
        if (state.loading === "pending") {
          state.loading = "idle";
          state.schoolId = action.payload.schoolId;
        }
      })
      .addCase(registerSchool.rejected, (state, action) => {
        console.log("rejected ", state, action);
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      })
      /**end of register slice */

      /** start of fetch all schools slice */
      .addCase(fetchAllSchools.pending, (state, action) => {
        console.log("pending ", state, action);
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchAllSchools.fulfilled, (state, action) => {
        console.log("fulfilled ", state.loading, action.payload);
        if (state.loading === "pending") {
          state.loading = "idle";
          state.list = action.payload;
        }
      })
      .addCase(fetchAllSchools.rejected, (state, action) => {
        console.log("rejected ", state, action);
        if (state.loading === "pending") {
          state.loading = "idle";
          state.schools = action.payload.schools;
          state.error = action.error;
        }
      });
    /**end of register slice */
  },
});

export default schoolSlice.reducer;
