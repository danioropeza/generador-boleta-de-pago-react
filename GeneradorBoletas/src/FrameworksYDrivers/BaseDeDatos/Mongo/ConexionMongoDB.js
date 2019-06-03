var MongoClient = require('mongodb').MongoClient;
class ConexionMongoDB {
    constructor() {
      this.url = 'mongodb://localhost/resthub';
      this.mongoose=MongoClient;
      this.mongoose.connect(this.url, { useNewUrlParser: true })
        .then(db => console.log("DB conectada"))
        .catch(err => console.log(err));
    }
  }
  module.exports = { ConexionMongoDB };
