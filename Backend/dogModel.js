const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    adopted: {
      type: Boolean,
      default: false,
    },
    waiting: {
      type: Boolean,
      default: false,
    },
    vaccinated: {
      type: Boolean,
      required: true,
    },
    // dog: {
    name: { type: String, required: [true, 'A dog must have a name'] },
    breed: { type: String, required: [true, 'A dog must have a breed'] },
    sex: { type: String, required: [true, 'A dog must have a sex'] },
    age: { type: Number, required: [true, 'A dog must have an age'] },
    image: {
      type: String,
      required: [true, 'A dog must have an image source'],
    },
    size: {
      type: String,
      required: [true, 'A dog must have a size (small, medium, large)'],
      enum: ['small', 'medium', 'large'],
    },
    temperament: { type: String },
    description: { type: String },
  }
  // },
);

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
