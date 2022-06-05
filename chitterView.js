class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayPeeps() {
    const headlines = this.model.getPeeps();

    console.log(headlines); // <- for dev tools

    headlines.forEach((headline) => {
      const headlineEl = document.createElement('p');
      headlineEl.className = 'headline';

      this.mainContainerEl.append(headlineEl);
    });
  }
}

module.exports = ChitterView;
