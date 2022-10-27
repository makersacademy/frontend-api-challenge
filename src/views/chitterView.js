const NotesClient = require("../../../note-app/notesClient");

class ChitterView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  addNewPeep(newPeep) {
    this.model.addNote(newPeep);
  }

  displayPeep() {
    const allPeeps = this.model.getPeeps();

    allPeeps.forEach((note) => {
      const peepEl = document.createElement('div');
      peepEl.textContent = note
      peepEl.className = 'peep';

      document.querySelector('#peep-input').vallue = '';
      this.mainContainerEl.append(peepEl);
    })
  }
}

module.exports = ChitterView;