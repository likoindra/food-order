const express = require("express");

const {
  getRestaurants,
  getRestaurantById
} = require("../controllers/restaurantController");

const router = express.Router();

router.get("/", getRestaurants);

router.get("/:restaurantId", getRestaurantById);

module.exports = router;