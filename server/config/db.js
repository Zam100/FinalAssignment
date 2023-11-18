// db.js
const mongoose = require('mongoose');

const URI = 'mongodb+srv://ayubifarzam:QXggA7C9aX6tAP62@cluster0.jtjybpe.mongodb.net/';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { URI };
