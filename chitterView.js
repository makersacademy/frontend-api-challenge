class ChitterView {
  constructor(model, api) {
    this.api = api;
    this.model = model;
    this.peepContainerEl = document.querySelector('#peep-container');
    this.peepButtonEl = document.querySelector('#add-peep-button');

    this.peepButtonEl.addEventListener('click', () => {
      const newPeep = document.querySelector('#peep-input').value;
      
      this.api.createPeep(newPeep, (data) => {
        this.addNewPeep(newPeep)
      })
    })
  }

  displayPeeps() {
    const peeps = this.model.getPeeps()

    peeps.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep;
      peepEl.className = 'peep';
      this.peepContainerEl.append(peepEl);
    })
  }

  addNewPeep(newPeep) {
    this.model.addPeep(newPeep);
    this.displayPeeps();
  }
}

module.exports = ChitterView