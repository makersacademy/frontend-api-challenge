const ChitterModel = require('./chitterModel')
const ChitterApi = require('./chitterApi')

class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-peeps-button');
 
    // this.buttonEl.addEventListener('click', () => {
      this.api.getChitterData(data => {
        console.log(data)
        console.log(this.model.getPeeps())
      });
    // }); button to only show all peeps when clicked
  }

  add() {
    // adds a peep to the server
  }

  display() {
    const peeps = this.model.getPeeps()

    peeps.forEach(element => {
      const peepEl = document.createElement('div')
      peepEl.innerText = element.body
      this.mainContainerEl.append(peepEl)
    });
  }
}

module.exports = ChitterView;