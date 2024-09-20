// index.js
const express = require('express');

// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json

// Sample route to test the server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
