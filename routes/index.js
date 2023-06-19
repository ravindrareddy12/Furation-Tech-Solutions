const express = require('express');
const router = express.Router();

const itemController = require('../controllerItem/home');

// GET /api/items - Retrieve all items from the database.
router.get('/', itemController.getItems);

// GET /api/items/:id - Retrieve a specific item by its ID.
router.get('/:id', itemController.findbyId);

// POST /api/items - Create a new item in the database.
router.post('/', itemController.createItem);

// PUT /api/items/:id - Update an existing item by its ID.
router.put('/:id', itemController.updateItem);

// DELETE /api/items/:id - Delete an item by its ID.
router.delete('/:id', itemController.deletebyId);
//api/items?page=2&limit=5 pagination

router.get('/pagination',itemController.getItemsbyPagination)

module.exports = router;
