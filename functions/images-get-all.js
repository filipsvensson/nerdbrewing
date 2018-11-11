const chalk = require('chalk');
const mongoose = require('mongoose');



const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  image: {type: String},
});
const ImageModel = mongoose.model('Image', ImageSchema);


/* export our lambda function as named "handler" export */
exports.handler = async (event, context, callback) => {

  console.log(chalk.green('Function `images-get-all` invoked'))
  console.log('process.env.MONGODB_URI', process.env.MONGODB_URI);

  if(!process.env.MONGODB_URI) {
    console.log(chalk.yellow('Required MONGODB_URI enviroment variable not found.'))
  }
  await mongoose.connect(process.env.MONGODB_URI).catch((err) => {
    console.log(chalk.red('mongoose error'), err)
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify(err)
    })
  });
  console.log(chalk.green('mongoose connection success'))

  try {
    const res = await ImageModel.find({}).sort('-date').limit(10).exec();
    console.log(chalk.green('mongoose success result: '), res)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res)
    })

  } catch (err) {
    console.log(err);
  }
}
