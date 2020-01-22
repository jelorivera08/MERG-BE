const { noteType } = require('../nodeTypes');
const { GraphQLList } = require('graphql');
const NoteService = require('../../services/NoteService');

const NotesQuery = {
  type: GraphQLList(noteType),
  args: {},
  resolve: async () => {
    const noteService = new NoteService();
    const notes = await noteService.getAllNotes();

    return notes;
  }
};

module.exports = { NotesQuery };
