class ChitterView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayPeeps() {
    const peeps = this.model.getPeeps();
    peeps.forEach((peep) => {
      const newPeepEl = document.createElement("div");
      newPeepEl.textContent = `User: ${peep.user.handle} Peep: ${peep.body}`;
      newPeepEl.className = "peep";
      this.mainContainerEl.append(newPeepEl);
    });
  }

  async displayPeepsFromApi() {
    const peeps = await this.client.loadPeeps();
    this.model.setPeeps(peeps);
    this.displayPeeps();
  }
}

module.exports = ChitterView;
