import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Camper } from "../../types/camper";

interface CampersState {
  items: Camper[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  total: number;
  currentPage: number;
}

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page = 1, limit = 4 }: { page?: number; limit?: number }) => {
    const response = await fetch(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch campers");
    }
    const data = await response.json();
    return data;
  }
)

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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
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
  }
});
export const { setCurrentPage } = campersSlice.actions;
export default campersSlice.reducer;
export const selectCampers = (state: { campers: CampersState }) => state.campers.items;
export const selectIsLoading = (state: { campers: CampersState }) => state.campers.isLoading;
export const selectIsError = (state: { campers: CampersState }) => state.campers.isError;
export const selectError = (state: { campers: CampersState }) => state.campers.error;
export const selectTotal = (state: { campers: CampersState }) => state.campers.total;
export const selectCurrentPage = (state: { campers: CampersState }) => state.campers.currentPage;
export const selectIsDone = (state: { campers: CampersState }) => state.campers.items.length === state.campers.total;