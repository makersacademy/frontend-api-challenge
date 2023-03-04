class PeepsView {

  constructor (model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    this.peepButtonEl = document.querySelector('#add-peep-btn');
    this.peepButtonEl.addEventListener('click', () => {
      const input = document.querySelector('#peep-input').value;
      this.addNote(input);
      this.displayNotes();
    });
  }

  displayPeeps = () => {
    document.querySelectorAll('.peep').forEach(peep => {
      peep.remove();  
    });

    const peeps = this.model.getPeeps()
    peeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.textContent = peep;
      peepEl.className = 'peep';
      this.mainContainerEl.append(peepEl);
    });
  }
}

module.exports = PeepsView;