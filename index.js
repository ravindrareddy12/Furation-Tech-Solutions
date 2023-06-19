const express = require('express');
const mongoose = require('mongoose');
const db = require('./mongooseConnection/db')

const app = express();

// Connect to MongoDB

// Middleware
app.use(express.json());

// Routes

app.use('/api/items', require('./routes'));


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
