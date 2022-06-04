class ChitterView {
  constructor(model) {
    this.model = model;
  }

  displayPeeps() {
    this.model.getPeeps().forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.className = 'peeps';
      peepEl.innerText = peep;

      document.querySelector('div#main-container').append(peepEl);
    });
  }

}

module.exports = ChitterView;