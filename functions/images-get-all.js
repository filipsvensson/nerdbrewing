const chalk = require('chalk');
const mongoose = require('mongoose');
const dateFns = require('date-fns');

const formateDate = date => {
  const difference = dateFns.differenceInDays(Date.now(), new Date(date * 1000));

  if (difference === 0) {
    return 'today';
  }

  if (difference === 1) {
    return '1 day ago';
  }

  if (difference < 6) {
    return `${difference} days ago`;
  }

  return dateFns.format(new Date(date * 1000), 'D MMMM');
};

const { Schema } = mongoose;
const ImageSchema = new Schema({
  src: { type: String },
  created: { type: String },
  text: { type: String },
  link: { type: String }
});
const ImageModel = mongoose.model('Image', ImageSchema);

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
};

exports.handler = async () => {
  console.log(chalk.green('Function `images-get-all` invoked'));

  if (!process.env.MONGODB_URI) {
    console.log(chalk.yellow('Required MONGODB_URI enviroment variable not found.'));
  }

  await mongoose.connect(process.env.MONGODB_URI).catch(err => {
    console.log(chalk.red('mongoose error'), err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers
    };
  });
  console.log(chalk.green('mongoose connection success'));

  try {
    const res = await ImageModel.find({})
      .sort({ created: -1 })
      .limit(6)
      .exec();
    console.log(chalk.green('mongoose success result: '), res);

    res.sort((a, b) => new Date(b.created * 1000) - new Date(a.created * 1000));
    res.forEach(d => {
      // eslint-disable-next-line no-param-reassign
      d.created = formateDate(d.created);
    });
    return {
      statusCode: 200,
      body: JSON.stringify(res),
      headers
    };
  } catch (err) {
    console.log(chalk.red('mongoose error'), err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers
    };
  }
};
