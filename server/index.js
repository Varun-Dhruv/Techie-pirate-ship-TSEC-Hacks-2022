const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api_route = require('./routes/api');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Connect to the database
//connect to mongoDB
mongoose.connect('mongodb://127.0.0.1');

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use('/api', api_route);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
