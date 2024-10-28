const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = 3000;
app.use(cors())
// // Serve the "Hello World" message at /message
// app.get('/message', (req, res) => {
//     res.send('Hello World');
// });

// Determine and log the path to the 'dist' folder
// const distPath = path.join(__dirname, 'public');
// console.log('serving static files from:', distPath);

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Add a route to verify the server is running
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});