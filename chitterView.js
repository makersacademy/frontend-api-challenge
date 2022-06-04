class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
  }

  displayPeeps() {
    this.model.getPeeps().forEach((peep) => {
      const peepEl = this.createPeepEl(peep);
      document.querySelector('div#main-container').append(peepEl);
    });
  }

  displayPeepsFromApi() {
    this.api.loadPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    })
  }

  createPeepEl(peep) {
    const peepEl = document.createElement('div');
    peepEl.className = 'peeps';
    peepEl.innerText = peep.body;
    return peepEl
  }

}

module.exports = ChitterView;