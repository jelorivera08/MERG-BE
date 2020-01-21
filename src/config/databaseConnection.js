const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
  const uri =
    'mongodb+srv://jelo:pass123@cluster0-voope.mongodb.net/test?retryWrites=true&w=majority';

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('MERG-BE');

      if (err) {
        return callback(err);
      } else {
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };
