// index.js
const express = require('express');

// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json

const cors = require('cors');
app.use(cors());

// Sample route to test the server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Static list of code blocks (replace with DB later)
const codeBlocks = [
    { id: 1, title: 'Async Case', template: '/* Your async code here */', solution: '/* Expected solution */' },
    { id: 2, title: 'Promise Case', template: '/* Your promise code here */', solution: '/* Expected solution */' },
    { id: 3, title: 'Callback Case', template: '/* Your callback code here */', solution: '/* Expected solution */' },
    { id: 4, title: 'Fetch API Case', template: '/* Your fetch API code here */', solution: '/* Expected solution */' },
];

// API endpoint to get code blocks
app.get('/api/codeblocks', (req, res) => {
    res.json(codeBlocks);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
