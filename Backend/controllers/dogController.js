const Dog = require('../dogModel');

// ADMIN

// POST ONE
exports.createDog = async (req, res) => {
  try {
    const newDog = await Dog.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { dog: newDog },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// SEARCH

// GET ALL
exports.getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.status(200).json({
      status: 'success',
      length: dogs.length,
      data: { dogs },
    });
    console.log(dogs);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// GET ONE, BY ID
exports.getDog = async (req, res) => {
  try {
    const paramId = Number(req.params.id);
    const dog = await Dog.find({ id: paramId }).exec();
    res.status(200).json({
      status: 'success',
      dog: { dog },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
