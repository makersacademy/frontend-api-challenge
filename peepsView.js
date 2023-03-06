class PeepsView {

  constructor (model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');

    this.peepButtonEl = document.querySelector('#add-peep-btn');

    this.peepButtonEl.addEventListener('click', () => {
      const input = document.querySelector('#peep-input').value;
      this.model.addPeep(input);
      this.displayPeeps();
    });
  }

  displayPeeps = () => {
    document.querySelectorAll('.peep').forEach(peep => {
      peep.remove();  
    });

    const peeps = this.model.getPeeps()
    peeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.textContent = peep;
      peepEl.className = 'peep';
      this.mainContainerEl.append(peepEl);
    });
  } 

  displayPeepsFromApi = async () => {
    await this.client.loadPeeps((data) => {
      this.model.setPeeps(data);
      this.displayPeeps();
    });
  }

  displayError = (error)  => {
    this.mainContainerEl.append('Oops, something went wrong!');
  }
}

module.exports = PeepsView;