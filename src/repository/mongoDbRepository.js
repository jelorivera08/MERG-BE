const { getDB } = require('../config/databaseConnection');
const ObjectId = require('mongodb').ObjectId;

class MongoDbRepo {
  constructor(collectionName) {
    this.collection = getDB().collection(collectionName);
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

  geById(_id) {
    return new Promise((resolve, reject) => {
      this.collection.findOne({ _id: ObjectId(_id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  updateOne(_id, opt) {
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

  deleteOne(_id) {
    return new Promise((resolve, reject) => {
      this.collection.findOneAndDelete({ _id: ObjectId(_id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  create(opt) {
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

module.exports = MongoDbRepo;
