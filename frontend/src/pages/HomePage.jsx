import React, { useEffect } from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  fetchRestaurants
} from "../features/restaurants/restaurantSlice";

export default function HomePage() {
  const dispatch = useDispatch();

  const {
    items,
    status,
    error
  } = useSelector(state => state.restaurants);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRestaurants());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading restaurants...</p>;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Discover Restaurants</h1>

      <div>
        {items.map(restaurant => (
          <article key={restaurant.id}>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              width="200"
            />

            <h2>{restaurant.name}</h2>

            <p>{restaurant.cuisine}</p>

            <p>Rating: {restaurant.rating}</p>
          </article>
        ))}
      </div>
    </main>
  );
}