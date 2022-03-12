const { listenerCount } = require("process");

class ChitterView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  };

  viewPeeps(){
    let allPeeps = this.model.getPeeps();
    allPeeps.forEach(peep => {
      let div = document.createElement('div');
      div.innerText = peep;
      div.className = 'peep';
      this.mainContainerEl.append(div);
    });
  };
};










module.exports = ChitterView;