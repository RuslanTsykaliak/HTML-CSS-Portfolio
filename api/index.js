// api/index.js
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'src')));
app.use(express.static(path.join(__dirname, '..', 'styles')));

app.use('/img', express.static(path.join(__dirname, '..', 'img')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
});

module.exports = (req, res) => {
  app(req, res);
};
