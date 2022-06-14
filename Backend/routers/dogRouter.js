const express = require('express');
const dogController = require('../controllers/dogController');

const dogRouter = express.Router();

dogRouter.route('/admin').post(dogController.createDog);
dogRouter.route('/search').get(dogController.getAllDogs);
dogRouter.route('/search/:id').get(dogController.getDog);
module.exports = dogRouter;
