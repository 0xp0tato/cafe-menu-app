import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices";

import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const reducers = combineReducers({ cart: cartSlice });

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export default store;
