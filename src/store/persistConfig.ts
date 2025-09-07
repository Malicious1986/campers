import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { RootState } from "./store";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["favorites"], // only favorites will be persisted
};

export default persistConfig;
