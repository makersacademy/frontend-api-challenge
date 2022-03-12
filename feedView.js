class FeedView {

  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.feedContainerEl = document.querySelector('#feed-container')
    this.displayPeeps()
  };

  displayPeeps() {
    const peeps = this.model.getPeeps()

    peeps.forEach(peep => {
      const peepEl = document.createElement('feed')
      const br = document.createElement('br');
      peepEl.innerText = `${peep.body}, by ${peep.user.handle}`
      peepEl.className = 'peep';
      this.feedContainerEl.append(peepEl)
      this.feedContainerEl.append(br)
    })
  }
}

module.exports = FeedView