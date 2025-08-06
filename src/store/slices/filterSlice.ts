import { createSlice } from "@reduxjs/toolkit";
import { Features } from "../../types/camper";

interface FilterState {
  equipment: Features [];
  form: string;
  location: string;
}

const folterSlise = createSlice({
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
      state.equipment = state.equipment.filter((feature) => feature !== action.payload);
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setEquipment, setForm, setLocation, removeEquipment  } = folterSlise.actions;
export default folterSlise.reducer;