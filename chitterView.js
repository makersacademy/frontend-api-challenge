const ChitterModel = require("./chitterModel.js");

class ChitterView {
  constructor(model = new ChitterModel()) {
    this.model = model;
    this.peepsListEl = document.querySelector("#peep-list");
  }

  displayPeeps() {
    this.peepsListEl.innerHTML = "";
    let peeps = this.model.peeps;
    peeps.forEach((peepObject) => {
      let peepHTML = this.generatePeep(peepObject);
      this.peepsListEl.append(peepHTML);
    });
  }

  generatePeep(peepObject) {
    let peepContainer = document.createElement("div");
    let peepBody = document.createElement("p");
    let peepAuthor = document.createElement("p");
    Object.assign(peepContainer, {
      className: "peep",
      id: peepObject.id,
    });
    Object.assign(peepBody, {
      innerText: peepObject.body,
    });
    Object.assign(peepAuthor, {
      innerText: peepObject.user.handle,
    });
    peepContainer.append(peepBody);
    peepContainer.append(peepAuthor);
    return peepContainer;
  }
}

module.exports = ChitterView;
