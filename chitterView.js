class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayPeeps() {
    const peeps = this.model.getPeeps();

    peeps.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep.body;
      peepEl.classname = 'peep';
      this.mainContainerEl.append(peepEl);

      const likeButtonEl = document.createElement('button');
      likeButtonEl.className = 'block';
      likeButtonEl.innerHTML = '<strong>like</strong>';
      this.mainContainerEl.append(likeButtonEl);

      const unlikeButtonEl = document.createElement('button');
      unlikeButtonEl.classname = 'button';
      unlikeButtonEl.innerHTML = '<strong>unlike</strong>';
      this.mainContainerEl.append(unlikeButtonEl);
    })
  }
}

module.exports = ChitterView;