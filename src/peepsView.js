class PeepsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerE1 = document.querySelector('#main-container');

    document.querySelector('#add-peep-btn').addEventListener('click', () => {
      const newPeep = document.querySelector('#add-peep-input').value;
      this.addNewPeep(newPeep);
    });
  }

  displayPeeps() {
    document.querySelectorAll('.peep').forEach(element => {
      element.remove();
    });

    const peeps = this.model.getPeeps();

    peeps.forEach(peep => {
      const peepE1 = document.createElement('div');
      peepE1.textContent = peep;
      peepE1.className = 'peep';
      this.mainContainerE1.append(peepE1);
    });
  }

  addNewPeep(newPeep) {
    this.model.addPeep(newPeep);
    this.displayPeeps();
  }
  
  displayPeepsFromApi() {
    return this.client.loadPeeps().then((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    });
  }
}

module.exports = PeepsView;