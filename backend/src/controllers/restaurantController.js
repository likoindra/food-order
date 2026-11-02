const restaurantService = require("../services/restaurantService.js");

function getRestaurants(req, res) {
  const restaurants = restaurantService.findAll();

  res.status(200).json({
    success: true,
    data: restaurants
  });
}

function getRestaurantById(req, res, next) {
  const restaurant = restaurantService.findById(
    req.params.restaurantId
  );

  if (!restaurant) {
    const error = new Error("Restaurant not found");
    error.status = 404;

    return next(error);
  }

  return res.status(200).json({
    success: true,
    data: restaurant
  });
}

module.exports = {
  getRestaurants,
  getRestaurantById
};