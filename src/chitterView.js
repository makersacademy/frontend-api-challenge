class ChitterView {
  constructor() {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
  }
}

module.exports = ChitterView;

constructor(model, client);
this.model = model;
this.client = client;

this.mainContainerEl = document.querySelector("#main-container");

this.mainContainer(() => {
  const allPeeps = document.querySelector("main-container".body);
  this.addPeeps(allPeeps);
});
