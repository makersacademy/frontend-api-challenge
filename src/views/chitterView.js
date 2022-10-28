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

  displayPeeps() {
    const allPeeps = this.model.getPeeps();

    allPeeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.className = 'peep';

      const peepBody = document.createElement('p');
      peepBody.textContent = `${peep.body} @${peep.user.handle}`;
      peepBody.className = 'peep-body';

      const createdTimeEl = document.createElement('div');
      createdTimeEl.textContent = peep.updated_at;
      createdTimeEl.className = 'peep-updated-time';
      
      peepEl.append(peepBody);
      peepEl.append(createdTimeEl);
      this.mainContainerEl.append(peepEl);
    });
  }

  displayPeepsFromAPI() {
    this.client.loadPeeps((response) => {
      this.model.setPeep(response);
      this.displayPeeps();
    });
  }
}

module.exports = ChitterView;