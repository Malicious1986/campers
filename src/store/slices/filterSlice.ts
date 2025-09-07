import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  equipment: string[];
  form: string;
  location: string;
}

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    equipment: [],
    form: "",
    location: "",
  } as FilterState,
  reducers: {
    setEquipment: (state, action) => {
      state.equipment.push(action.payload);
    },
    removeEquipment: (state, action) => {
      state.equipment = state.equipment.filter(
        (equipment) => equipment !== action.payload
      );
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    removeForm: (state) => {
      state.form = "";
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    resetFilters: (state) => {
      state.equipment = [];
      state.form = "";
      state.location = "";
    },
  },
});

export const {
  setEquipment,
  setLocation,
  removeEquipment,
  setForm,
  removeForm,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
