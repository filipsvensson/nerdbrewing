const chalk = require('chalk')
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    image: {type: String},
});
const ImageModel = mongoose.model('Image', ImageSchema);


exports.handler = async (event, context, callback) => {
  console.log(chalk.green('Function `images-create` invoked'));

  if(!process.env.MONGODB_URI) {
    console.log(chalk.yellow('Required MONGODB_URI enviroment variable not found.'))
  }

  await mongoose.connect(process.env.MONGODB_URI).catch((err) => {
    console.log(chalk.red('mongoose error'), err)
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  });
  console.log(chalk.green('mongoose connection success'));

  try {
    const image = new ImageModel(JSON.parse(event.body));
    const newImage = await image.save();
    return {
      statusCode: 200,
      body: JSON.stringify(newImage)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }
}
