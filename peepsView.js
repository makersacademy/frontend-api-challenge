class PeepsView {
    constructor(model, api) {
      this.model = model;
      this.api = api;
      this.mainContainerEl = document.querySelector('#main-container');
      const peeps = this.model.setPeeps()
      this.api.loadPeeps(peeps => {
        this.display(peeps);
      });
    }
    
    display(peeps) {
     peeps.forEach(peep => {
        console.log(peep);
        const peepEl = document.createElement('div');
        peepEl.innerText = peep.body;
        peepEl.className = 'peep';
        this.mainContainerEl.append(peepEl);
    })
    }
  }
  
  module.exports = PeepsView;