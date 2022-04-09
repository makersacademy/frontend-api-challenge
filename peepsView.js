class PeepsView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector("#main-container");
    this.peepsContainer = document.querySelector("#peeps-container");
  }

  displayPeeps() {
    this.model.getPeeps((peeps) => {
      peeps.forEach((peep) => {
        const peepEl = document.createElement("div");
        peepEl.className = "peep";

        const usernameEl = document.createElement("p");
        usernameEl.className = "peep-user";
        usernameEl.innerText = peep.user.handle;
        peepEl.append(usernameEl);

        const peepItemEl = document.createElement("p");
        peepItemEl.className = "peep-item";
        peepItemEl.innerText = peep.body;
        peepEl.append(peepItemEl);

        const dateEl = document.createElement("p");
        dateEl.className = "peep-date";
        const date = new Date(peep.created_at).toLocaleDateString("en-uk", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        dateEl.innerText = date;
        peepEl.append(dateEl);

        this.peepsContainer.append(peepEl);
      });
    });
  }
}

module.exports = PeepsView;
