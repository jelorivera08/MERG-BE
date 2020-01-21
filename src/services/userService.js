const { getDB } = require('../config/databaseConnection');
const ObjectId = require('mongodb').ObjectId;

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

  geById(opt) {
    return new Promise((resolve, reject) => {
      this.collection.findOne({ _id: ObjectId(opt._id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  updateUser(_id, opt) {
    return new Promise((resolve, reject) => {
      this.collection.findOneAndUpdate(
        { _id: ObjectId(_id) },
        { $set: opt },
        { returnOriginal: false },
        (err, data) => {
          if (err) {
            reject(err);
          }

          resolve(data.value);
        }
      );
    });
  }

  deleteUser(opt) {
    return new Promise((resolve, reject) => {
      this.collection.findOneAndDelete(
        { _id: ObjectId(opt._id) },
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        }
      );
    });
  }

  createUser(opt) {
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
