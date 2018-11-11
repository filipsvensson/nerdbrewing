const chalk = require('chalk');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    image: {type: String},
});
const ImageModel = mongoose.model('Image', ImageSchema);


/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  if(!process.env.MONGODB_URI) {
    console.log(chalk.yellow('Required MONGODB_URI enviroment variable not found.'))
  }

  /* Set up mongoose connection */
  mongoose.connect(process.env.MONGODB_URI);
  mongoose.Promise = global.Promise;
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  /* parse the string body into a useable JS object */
  ImageModel.find({}).sort('-date').limit(10).exec(function (err, images) {
    if (err) {
        console.log(err);
    }
    /* Success! return the response with statusCode 200 */
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(images)
    })
  })
}
