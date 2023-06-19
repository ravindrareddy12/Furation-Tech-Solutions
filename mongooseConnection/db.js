const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/crudApi');

const db = mongoose.connection;

// Handle connection error
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// Handle successful connection
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

// Export the database connection
module.exports = db;
