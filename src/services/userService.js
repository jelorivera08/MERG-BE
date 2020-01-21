const MongoDbRepo = require('../repository/mongoDbRepository');

class UserService {
  constructor() {
    this.UserRepository = new MongoDbRepo('Users');
  }

  getAllUsers() {
    return this.UserRepository.getAll();
  }

  getUserById(id) {
    return this.UserRepository.geById(id);
  }

  updateUser(_id, opt) {
    return this.UserRepository.updateOne(_id, opt);
  }

  deleteUser(_id) {
    return this.UserRepository.deleteOne(_id);
  }

  createUser(opt) {
    return this.UserRepository.create(opt);
  }
}

module.exports = UserService;
