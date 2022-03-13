class ChitterView {
  constructor(model) {
    this.model = model;
    this.peepContainerEl = document.querySelector('#peep-container');
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
}

module.exports = ChitterView