import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slices/campersSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
