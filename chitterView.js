class ChitterView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  };

  viewPeeps() {
    let displayPeeps = this.model.getPeeps();
    displayPeeps.forEach(peep => {
      let div = document.createElement('div');
      div.innerText = peep;
      div.className = 'peep';
      this.mainContainerEl.append(div);
    });
  };
};

module.exports = ChitterView;

