const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const { handleGithubWebhook } = require('./github-webhook');

const app = express();
const PORT = config.port || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Webhook endpoint
app.post('/webhook', handleGithubWebhook);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
