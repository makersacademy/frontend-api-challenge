class ChitterView {
    constructor(api) {
      this.mainContainerEl = document.querySelector('#main-container');
      this.api = api
    }
  
    displayPeeps() {
      this.api.loadPeeps((peeps) => {
        peeps.forEach((peep) => {
          let div = document.createElement("div");
          div.className = "peep";
          div.innerText = peep.body;
          this.mainContainerEl.append(div);
        });
      });
    }
  }
  
  module.exports = ChitterView;