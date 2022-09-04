class PeepView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.body = document.querySelector("body");
    this.peepList = document.querySelector("#peep-list");
  }
  displayPeeps() {
    let peeps = this.model.getPeeps();
    peeps.forEach((peep) => {
      let createPeep = document.createElement("div");
      createPeep.className = "peep";
      createPeep.innerText = peep["body"] + " - " + peep["user"]["handle"];
      this.peepList.append(createPeep);
    });
  }
  displayPeepsFromApi() {
    this.api.loadAllPeeps((data) => {
      this.model.setPeeps(data);
      this.displayPeeps();
    });
  }
}

module.exports = PeepView;
