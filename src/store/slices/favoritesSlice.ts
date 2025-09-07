import { createSelector, createSlice } from "@reduxjs/toolkit";

interface FavoritesState {
  favorites: string[];
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] } as FavoritesState,
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

export const selectFavorites = (state: { favorites: FavoritesState }) =>
  state.favorites.favorites;

export const selectIsFavorite = (camperId: string) =>
  createSelector([selectFavorites], (favorites) =>
    favorites.includes(camperId)
  );
