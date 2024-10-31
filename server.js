const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || '3001'

// // Root route serves the HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




  