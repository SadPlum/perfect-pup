const express = require('express');
const dogRouter = require('./routers/dogRouter');

const app = express();
app.use(express.json());
// Middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

// Routers
app.use('/api/v1/dogs', dogRouter);

module.exports = app;
