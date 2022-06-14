const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const database = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(database).then(() => console.log('connected to database'));

const port = process.env.PORT || 3030;

console.log('test');

app.listen(port, () => {
  console.log(`app on port ${port}`);
  console.log(`app listening on port ${port}`);
});
