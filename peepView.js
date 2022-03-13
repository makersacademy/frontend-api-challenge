class PeepView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    this.displayPeeps();
  };

  displayPeeps() {
    const feed = this.model.getPeeps();

    feed.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep;
      peepEl.className = 'peep';
      this.mainContainerEl.append(peepEl);
    });
  };
}

module.exports = PeepView;