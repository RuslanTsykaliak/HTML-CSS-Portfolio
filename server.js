const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3026;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'styles')));



app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});