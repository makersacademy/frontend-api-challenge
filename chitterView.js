class ChitterView {

  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.peepContainerEl = document.querySelector('#peep-container');
  }

  importPeepsFromServer() {
    this.api.fetchPeeps(peeps => {
      console.log('Peeps retrieved from server:');
      console.log(peeps);
      this.model.loadPeeps(peeps);
      this.displayPeeps();
    })
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
