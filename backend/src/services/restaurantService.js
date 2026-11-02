const restaurants = [
  {
    id: "r-001",
    name: "The Green Table",
    cuisine: "Healthy · Salad · Bowls",
    rating: 4.9,
    deliveryTime: "20–30 min",
    deliveryFee: 0,
    priceLevel: "$$",
    description: "Fresh and healthy food.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "r-002",
    name: "Little Napoli",
    cuisine: "Italian · Pizza · Pasta",
    rating: 4.8,
    deliveryTime: "25–35 min",
    deliveryFee: 1.5,
    priceLevel: "$$",
    description: "Italian classics and handmade pasta.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "r-003",
    name: "Bun & Co.",
    cuisine: "Burgers · American",
    rating: 4.7,
    deliveryTime: "15–25 min",
    deliveryFee: 1,
    priceLevel: "$",
    description: "Juicy burgers and comfort food.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
  }
];

function findAll() {
  return restaurants;
}

function findById(id) {
  return restaurants.find(
    restaurant => restaurant.id === id
  );
}

module.exports = {
  findAll,
  findById
};