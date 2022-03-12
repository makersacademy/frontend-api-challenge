class ChitterView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayPeeps() {
    const peeps = this.model.getPeeps()

    peeps.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep;
      peepEl.classname = 'peep';
      this.mainContainerEl.append(peepEl);
    })
  }
}

module.exports = ChitterView;