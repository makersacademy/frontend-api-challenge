class PeepsView {
    constructor(model) {
      this.model = model;
      this.mainContainerEl = document.querySelector('#main-container');
    }
    
    displayPeeps() {
      const peeps = this.model.getPeeps()
      peeps.forEach(peep => {
        const peepEl = document.createElement('div');
        peepEl.innerText = peep;
        peepEl.className = 'peep';
        this.mainContainerEl.append(peepEl);
      })
    }
  }
  
  module.exports = PeepsView;