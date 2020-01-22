const MongoDbRepo = require('../repository/mongoDbRepository');

class NoteService {
  constructor() {
    this.NoteRepository = new MongoDbRepo('Notes');
  }

  getAllNotes() {
    return this.NoteRepository.getAll();
  }

  updateNote(_id, opt) {
    return this.NoteRepository.updateOne(_id, opt);
  }

  deleteNote(_id) {
    return this.NoteRepository.deleteOne(_id);
  }

  createNote(opt) {
    return this.NoteRepository.create(opt);
  }
}

module.exports = NoteService;
