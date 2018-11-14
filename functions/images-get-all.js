const chalk = require('chalk');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  image: {
    type: String
  },
});
const ImageModel = mongoose.model('Image', ImageSchema);

const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = async (event, context) => {
  console.log(chalk.green('Function `images-get-all` invoked'));

  if(!process.env.MONGODB_URI) {
    console.log(chalk.yellow('Required MONGODB_URI enviroment variable not found.'))
  }

  await mongoose.connect(process.env.MONGODB_URI).catch((err) => {
    console.log(chalk.red('mongoose error'), err)
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers
    }
  });
  console.log(chalk.green('mongoose connection success'));

  try {
    const res = await ImageModel.find({}).sort('-date').limit(10).exec();
    console.log(chalk.green('mongoose success result: '), res)

    return {
      statusCode: 200,
      body: JSON.stringify(res),
      headers
    }
  } catch (err) {
    console.log(chalk.red('mongoose error'), err)
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers
    }
  }
}
