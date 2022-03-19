class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    // const likeButtonEl = document.querySelector('#likeButtonEl');
    // likeButtonEl.addEventListener('click', () => {
    //   this.model.addLike();
    //   this.dmodel.getLikeCounter();
    // });
    // Need to think about how to add specific counter to each peep & where to store this.
  }

  displayPeeps() {
    const peeps = this.model.getPeeps();

    peeps.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep.body;
      peepEl.className = 'block subtitle is-4 box has-text-primary-dark';
      this.mainContainerEl.append(peepEl);

      const likeButtonEl = document.createElement('button');
      likeButtonEl.className += 'button block';
      likeButtonEl.innerHTML = 'like';
      this.mainContainerEl.append(likeButtonEl);

      const unlikeButtonEl = document.createElement('button');
      unlikeButtonEl.className += 'button block';
      unlikeButtonEl.innerHTML = 'unlike';
      this.mainContainerEl.append(unlikeButtonEl);
    })
  }
}

module.exports = ChitterView;