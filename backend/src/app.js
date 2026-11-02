const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();

app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_ORIGIN ||
    "http://localhost:3000"
}));

app.use(express.json({ limit: "1mb" }));

app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FoodOrder API is healthy",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/restaurants", restaurantRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal server error"
  });
});

module.exports = app;