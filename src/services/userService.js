const { getDB } = require('../config/databaseConnection');

class UserService {
  constructor() {
    this.collection = getDB().collection('Users');
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.collection.find({}).toArray((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  save(opt) {
    return new Promise((resolve, reject) => {
      this.collection.insertOne(opt, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data.ops[0]);
      });
      1;
    });
  }
}

module.exports = UserService;
