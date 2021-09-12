class CreateViews {
  constructor() {
    this.peepContainer = document.querySelector("#basePeep");
    this.container = document.querySelector("#peepContainer");
  }
  add(peep) {
    this.peepBlock = this.peepContainer.cloneNode(true);
    this.fillFields(peep);
    this.container.insertAdjacentElement("beforeend", this.peepBlock);
  }

  fillFields(peep) {
    this.peepBlock.setAttribute("data-peep-message", true);
  }
}
