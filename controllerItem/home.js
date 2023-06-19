
//DataBase Model 
const Item = require('../models/user')



// GET /api/items - Retrieve all items from the database.
module.exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/items/:id - Retrieve a specific item by its ID.
module.exports.findbyId =  async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/items - Create a new item in the database.
module.exports.createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT /api/items/:id - Update an existing item by its ID.
module.exports.updateItem =  async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /api/items/:id - Delete an item by its ID.
module.exports.deletebyId = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/items - Retrieve all items from the database with pagination.
module.exports.getItemsbyPagination = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from the query parameters, default to 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Get the limit (items per page) from the query parameters, default to 10 if not provided

    const startIndex = (page - 1) * limit; // Calculate the starting index of items based on the page number and limit

    const totalItems = await Item.countDocuments(); // Get the total count of items

    const items = await Item.find()
      .skip(startIndex)
      .limit(limit);

    res.json({
      items,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

