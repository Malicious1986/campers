import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import camperReducer from "./slices/camperSlice";
import campersReducer from "./slices/campersSlice";
import favoritesReducer from "./slices/favoritesSlice";
import filterReducer from "./slices/filterSlice";

const favoritesConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  campers: campersReducer,
  camper: camperReducer,
  favorites: persistReducer(favoritesConfig, favoritesReducer),
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
