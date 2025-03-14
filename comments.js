// Create web server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory data store for comments
let comments = [];

// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    if (!comment || !comment.text) {
        return res.status(400).json({ error: 'Comment text is required' });
    }
    comments.push(comment);
    res.status(201).json(comment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});