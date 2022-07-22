const express = require('express');
const bodyParser = require('body-parser');
const dogRouter = require('./routers/dogRouter');
const path = require('path');
const { db } = require('./dogModel');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,HEAD');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routers
app.use('/api/v1/dogs', dogRouter);

module.exports = app;
