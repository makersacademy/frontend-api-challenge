
class ChitterView {

  constructor(model) {
    this.model = model

    this.buttonEl = document.querySelector('#add-peep-button')
    this.inputEl = document.querySelector('#peep-input')

    this.buttonEl.addEventListener('click', () => {
      if (this.inputEl) {this.addNewPeep(this.inputEl.value)};

      this.displayPeeps()
    })
  }

  addNewPeep(peep) {
    this.model.addPeep(peep);
  }

  displayPeeps() {
    const mainContainerEl = document.querySelector('#main-container')

    this.model.getPeeps().forEach(peep => {
      const div = document.createElement('div');
      div.setAttribute('class', 'peep');
      div.innerText = peep;

      mainContainerEl.append(div);
    })
  }
}

module.exports = ChitterView;