class ChitterView {

  constructor(model) {
    this.model = model;
    this.peepContainerEl = document.querySelector('#peep-container');
  }

  displayPeeps() {
    let peeps = this.model.returnLoadedPeeps();
    peeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep.body;
      peepEl.className = 'peep';
      this.peepContainerEl.append(peepEl);
    });
  };

}

module.exports = ChitterView;
