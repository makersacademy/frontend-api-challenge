class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  async displayPeepsFromApi() {
    const peeps = await this.api.fetchPeeps();
    this.model.setPeeps(peeps);
    this.displayPeeps();
  }

  displayPeeps() {
    let peeps = this.model.getPeeps();

    peeps.forEach((peep) => {
      this.addPeepEl(peep.body);
    });
  }

  addPeepEl(peepBody) {
    const newDiv = document.createElement("div");
    newDiv.innerText = peepBody;
    newDiv.setAttribute("class", "peep");
    this.mainContainerEl.append(newDiv);
  }
}

module.exports = ChitterView;
