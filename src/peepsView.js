class PeepsView {
  constructor(model) {
    this.model = model;
    this.mainContainerE1 = document.querySelector('#main-container');
  }

  displayPeeps() {
    const peeps = this.model.getPeeps();

    peeps.forEach(peep => {
      const peepE1 = document.createElement('div');
      noteE1.textContent = peep;
      noteE1.className = 'peep';
      this.mainContainerE1.append(peepE1);
    });
  }
}

module.exports = PeepsView;