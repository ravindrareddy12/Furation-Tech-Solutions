const mongoose = require('mongoose');

// Define the item schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create the Item model based on the item schema
const Item = mongoose.model('Item', itemSchema);

// Export the Item model
module.exports = Item;
