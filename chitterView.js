class ChitterView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#submit-peep-button').addEventListener('click', () => {
      let newPeeps = document.querySelector('#user-input').value;
      this.addNewPeeps(newPeeps);
    })
  };

  addNewPeeps(newPeeps) {
    this.model.addPeeps(newPeeps);
    this.viewPeeps();
  }

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

