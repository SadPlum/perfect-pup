const Dog = require('../dogModel');
const multer = require('multer');

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/dogImages');
  },
  filename: async (req, file, callback) => {
    const ext = file.mimetype.split('/')[1];
    const id = await Dog.count();

    callback(null, `${id}_${req.body.name}.${ext}`);
  },
});

const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    console.log('notimage');
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadImage = upload.single('image');

// SEARCH

// GET ALL
exports.getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.status(200).json({
      status: 'success',
      length: dogs.length,
      data: dogs,
    });
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
    const dogData = await Dog.find({ id: paramId }).exec();

    // take dog from array

    let dog = dogData[0];
    res.status(200).json({
      status: 'success',
      data: dog,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// ADMIN

// POST NEW Dog

exports.createDog = async (req, res) => {
  try {
    // first dog was count of 0,
    // second dog has count of 1, so id of 1, etc
    const dogCount = await Dog.count();
    req.body.id = dogCount;
    const id = req.body.id;

    // get file ext for file
    const ext = req.file.mimetype.split('/')[1];

    // set file path for image
    req.body.image = `${req.protocol}://${req.get('host')}/dogImages/${id}_${
      req.body.name
    }.${ext}`;

    console.log(req.body);
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
