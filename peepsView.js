class PeepsView {

  constructor(api, model) {
    this.api = api
    this.model = model

    const viewPeepsButtonEl = document.querySelector('#view-peeps-button');
    this.peepsEl = document.querySelector('#peeps')

    viewPeepsButtonEl.addEventListener('click', () => {
      console.log('i was clicked')
      this.api.getPeeps(peepData => {
        console.log(peepData)
        this.displayPeeps()
      });
    });
  }

  displayPeeps() {
    const peeps = this.model.getPeeps()

    peeps.forEach(peep => {
      let bodyEl = document.createElement('div');
      bodyEl.innerText = peep.body;
      this.peepsEl.append(bodyEl);
    })
  }

}

module.exports = PeepsView
