const express = require('express');

const dogController = require('../controllers/dogController');

const dogRouter = express.Router();

dogRouter.post(
  '/admin/create',
  dogController.uploadImage,
  dogController.createDog
);
dogRouter.patch('/admin/update/:_id', dogController.updateDogById);
dogRouter.route('/search').get(dogController.getAllDogs);
dogRouter.route('/search/:id').get(dogController.getDog);
module.exports = dogRouter;
