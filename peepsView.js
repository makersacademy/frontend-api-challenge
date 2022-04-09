class PeepsView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector("#main-container");
    this.peepsContainer = document.querySelector("#peeps-container");
  }

  displayPeeps() {
    this.model.getPeeps((peeps) => {
      peeps.forEach((peep) => {
        //console.log(peep);
        const peepEl = document.createElement("div");
        peepEl.className = "peep";

        const usernameEl = document.createElement("p");
        usernameEl.innerText = peep.user.handle;
        peepEl.append(usernameEl);

        const peepItemEl = document.createElement("p");
        peepItemEl.className = "peep-item";
        peepItemEl.innerText = peep.body;
        peepEl.append(peepItemEl);

        const dateEl = document.createElement("p");
        dateEl.innerText = peep.created_at;
        peepEl.append(dateEl);

        this.peepsContainer.append(peepEl);
      });
    });
  }
}

module.exports = PeepsView;
