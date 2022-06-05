class ChitterView {
  constructor(model, api) {
    this.api = api;
    this.model = model;
    this.peepButtonEl = document.querySelector('#peep-button');
    this.peepInputEl = document.querySelector('#peep-input');
    this.mainContainerEl = document.querySelector('#main-container');
    
    this.peepButtonEl.addEventListener('click', () => {
      const newPeep = this.peepInputEl.value;
      this.addNewPeep(newPeep);
    });

  }

  addNewPeep(peep) {
    this.model.addPeep(peep);
    this.displayPeeps();
  }

  async displayPeepsFromApi() {
    const peeps = await this.api.loadPeeps();
    this.model.setPeeps(peeps);
    this.displayPeeps();
  }

  displayPeeps() {

    document.querySelectorAll('.peep').forEach(element => {
      element.remove();
      document.querySelector('#peep-input').value = "";
    });
    
    const peeps = this.model.getPeeps()

    peeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep.body;
      peepEl.className = 'peep';
      this.mainContainerEl.append(peepEl);
    })

  }
}

module.exports = ChitterView;