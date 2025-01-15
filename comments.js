// Create web server
// Create a new Express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create a new array to store comments
const comments = [];
// Create a new route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Create a new route to create a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});