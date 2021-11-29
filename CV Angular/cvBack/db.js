const mongoose = require('mongoose');

const urlMongo = 'mongodb+srv://keivn-user:1234@cluster0.suf4z.mongodb.net/kevin-db?retryWrites=true&w=majority';

const config = {

  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(urlMongo, config);