import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchData } from "../../api";
import { Camper } from "../../types/camper";

interface CamperState {
  camper: Camper | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

export const getCamperById = createAsyncThunk<Camper, string>(
  "campers/getCamperById",
  async (id) => {
    return await fetchData<Camper>(id);
  }
);

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    camper: null,
    isLoading: false,
    isError: false,
    error: null,
  } as CamperState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camper = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "Failed to fetch camper";
      })
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      });
  },
});

export default camperSlice.reducer;

export const selectCamper = (state: { camper: CamperState }) =>
  state.camper.camper;
export const selectIsLoading = (state: { camper: CamperState }) =>
  state.camper.isLoading;
export const selectIsError = (state: { camper: CamperState }) =>
  state.camper.isError;
export const selectError = (state: { camper: CamperState }) =>
  state.camper.error;
