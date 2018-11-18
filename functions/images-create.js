const chalk = require('chalk');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const ImageSchema = new Schema({
  src: { type: String },
  created: { type: String },
  text: { type: String },
  link: { type: String }
});
const ImageModel = mongoose.model('Image', ImageSchema);

exports.handler = async event => {
  console.log(chalk.green('Function `images-create` invoked'));

  if (!process.env.MONGODB_URI) {
    console.log(chalk.yellow('Required MONGODB_URI enviroment variable not found.'));
  }

  await mongoose.connect(process.env.MONGODB_URI).catch(err => {
    console.log(chalk.red('mongoose error'), err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  });
  console.log(chalk.green('mongoose connection success'));

  try {
    const image = new ImageModel(JSON.parse(event.body));
    const newImage = await image.save();
    console.log(chalk.green('image created', newImage));
    return {
      statusCode: 200,
      body: JSON.stringify(newImage)
    };
  } catch (err) {
    console.log(chalk.red('mongoose error'), err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
};
