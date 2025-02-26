const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  // Serve static files
  if (req.method === 'GET' && req.url.startsWith('/styles')) {
    const filePath = path.join(__dirname, '..', 'styles', req.url.replace('/styles', ''));
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send('CSS file not found');
    }
  }
  // Serve other static assets like images and HTML files
  else if (req.method === 'GET' && req.url.startsWith('/img')) {
    const filePath = path.join(__dirname, '..', 'img', req.url.replace('/img', ''));
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send('Image not found');
    }
  } else if (req.method === 'GET' && req.url.startsWith('/public')) {
    const filePath = path.join(__dirname, '..', 'public', req.url.replace('/public', ''));
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send('HTML file not found');
    }
  } else {
    // Default route to handle requests and serve the main HTML page
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  }
};
