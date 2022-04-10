
class ChitterView {

  constructor(model) {
    this.model = model

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