const Dog = require('../dogModel');

exports.countDogs = () => {
  Dog.count({}, function (err, count) {
    if (err) console.log(err);
    return count;
  });
};
