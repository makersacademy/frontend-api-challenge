class PeepsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayClear() {
    const peeps = document.querySelectorAll('div.peep');
    peeps.forEach(peep => peep.remove());
  }

  displayPeeps() {
    this.displayClear()
    this.model.getPeeps().forEach((peep) => {
      const divEl = document.createElement('div');
      divEl.className = 'peep';
      divEl.textContent = peep.body;
      this.mainContainerEl.append(divEl);
    })
  }

  displayFromApi() {
    this.api.loadPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    })
  }
}

module.exports = PeepsView;
