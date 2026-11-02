import { configureStore } from "@reduxjs/toolkit";

import restaurantReducer from "../features/restaurants/restaurantSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer
  }
});