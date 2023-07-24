const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://reddy:1234@cluster0.gdf3qiw.mongodb.net/REPL?retryWrites=true&w=majority');

const db = mongoose.connection;

// Handle connection error
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// Handle successful connection
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

// Export the database connection
module.exports = db;
