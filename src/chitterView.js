class ChitterView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayPeeps() {
    document.querySelectorAll(".peep").forEach((element) => {
      element.remove();
    });

    const peeps = this.model.getPeeps();

    peeps.forEach((peep) => {
      const newPeepEl = document.createElement("div");
      newPeepEl.textContent = peep;
      newPeepEl.className = "peep";
      this.mainContainerEl.append(newPeepEl);
    });
  }

  async displayPeepsFromApi() {
    const peeps = await this.client.loadPeeps();
    await this.model.setPeeps(peeps);
    this.displayPeeps();
  }
}

module.exports = ChitterView;
