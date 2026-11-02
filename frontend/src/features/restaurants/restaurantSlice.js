import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import { api } from "../../services/api";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",

  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/restaurants");

      return response.data.data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
        "Failed to fetch restaurants"
      );
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",

  initialState: {
    items: [],
    status: "idle",
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })

      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export default restaurantSlice.reducer;