const express = require('express');
const mongoose = require('mongoose');
const db = require('./mongooseConnection/db');
const cors = require('cors');

const app = express();

// Connect to MongoDB

// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.use('/api/items', require('./routes'));


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
