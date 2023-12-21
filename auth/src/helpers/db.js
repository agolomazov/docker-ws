const mongoose = require('mongoose');
const { db } = require('../configuration');

module.exports.connectDb = () => {
  console.log(`DB connection ${db}`);
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

  return mongoose.connection;
}