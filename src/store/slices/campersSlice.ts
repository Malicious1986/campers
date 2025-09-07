import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchData } from "../../api";
import { Camper } from "../../types/camper";
import { RootState } from "../store";

interface CampersState {
  items: Camper[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  total: number;
  currentPage: number;
}

type FetchCampersRequest = {
  limit?: number;
};

type FetchCampersResponse = {
  items: Camper[];
  total: number;
};

export const fetchCampers = createAsyncThunk<
  FetchCampersResponse,
  FetchCampersRequest,
  { state: RootState }
>(
  "campers/fetchCampers",
  async ({ limit = 4 }: FetchCampersRequest, thunkAPI) => {
    const state = thunkAPI.getState();
    const { filter, campers } = state;
    const filteredEquipment = filter.equipment.filter(
      (eq) => eq !== "automatic"
    );
    const equipmentQuery = filteredEquipment.reduce((acc, eq) => {
      return `${acc}&${eq}=true`;
    }, "");
    const automatic = filter.equipment.find((eq) => eq === "automatic");

    const url = `?page=${campers.currentPage}&limit=${limit}&form=${filter.form}&location=${filter.location}${
      filteredEquipment.length ? equipmentQuery : ""
    }${automatic ? `&transmission=${automatic}` : ""}`;
    return await fetchData<FetchCampersResponse>(url);
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
    total: 0,
    currentPage: 1,
  } as CampersState,
  reducers: {
    setCurrentPage: (state) => {
      state.currentPage += 1;
    },
    resetCampers: (state) => {
      state.items = [];
      state.total = 0;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload.items];
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "Failed to fetch campers";
      });
  },
});
export const { setCurrentPage, resetCampers } = campersSlice.actions;
export default campersSlice.reducer;

export const selectCampers = (state: { campers: CampersState }) =>
  state.campers.items;
export const selectIsLoading = (state: { campers: CampersState }) =>
  state.campers.isLoading;
export const selectIsError = (state: { campers: CampersState }) =>
  state.campers.isError;
export const selectError = (state: { campers: CampersState }) =>
  state.campers.error;
export const selectTotal = (state: { campers: CampersState }) =>
  state.campers.total;
export const selectCurrentPage = (state: { campers: CampersState }) =>
  state.campers.currentPage;
export const selectIsDone = (state: { campers: CampersState }) =>
  state.campers.items.length === state.campers.total;
export const selectCurrentCamper = (
  state: { campers: CampersState },
  id: string
) => {
  return state.campers.items.find((camper) => camper.id === id);
};
