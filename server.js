const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const autoIncrement = require('mongoose-auto-increment');

const app = express();
const db = mongoose.connect('mongodb://localhost/ContactList');


app.get('/', (req,res) => {
  res.send('Hello World');
});

// set up a port for server to listen to
// this will listen t(o any FrontEnd Calls to API
app.listen(3000, () => {
  console.log('Listening on port: 3000!');
});
module.exports = app;