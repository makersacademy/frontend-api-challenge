class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayPeeps() {
    // remove old peeps first

    const peeps = this.model.getPeeps();

    peeps.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep.body;
      peepEl.classname = 'peep';
      this.mainContainerEl.append(peepEl);
    })
  }
}

module.exports = ChitterView;