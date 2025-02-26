const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the 'styles' and 'img' directories
app.use('/styles', express.static(path.join(__dirname, '..', 'styles')));
app.use('/img', express.static(path.join(__dirname, '..', 'img')));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

// Handle all requests by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
