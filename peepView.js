class PeepView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    console.log(this.mainContainerEl); // showing as null
    this.peepButtonEl = document.querySelector('#add-peep-button');
    this.peepInputEl = document.querySelector('#add-peep-input');
    console.log(this.peepButtonEl); // showing as null

    this.peepButtonEl.addEventListener('click', () => {
      const peepContent = this.peepInputEl.value;
      this.displayPeeps();
    });
  };

  displayPeeps() {
    const feed = this.model.getPeeps();

    feed.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep;
      peepEl.className = 'peep';
      // console.log(this.mainContainerEl); // showing as null
      this.mainContainerEl.append(peepEl);
    });
  };
}

module.exports = PeepView;