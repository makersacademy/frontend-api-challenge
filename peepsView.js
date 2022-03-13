class PeepsView {

  constructor(api) {
    this.api = api

    const viewPeepsButtonEl = document.querySelector('#view-peeps-button');
    this.peepsEl = document.querySelector('#peeps')

    viewPeepsButtonEl.addEventListener('click', () => {
      console.log('i was clicked')
      this.api.getPeeps(peepData => {
        console.log(peepData)
        this.displayPeeps(
          peepData
        )
      });
    });
  }

  displayPeeps(peepData) {
    peepData.forEach(peep => {
      let bodyEl = document.createElement('div');
      bodyEl.innerText = peep.body;
      this.peepsEl.append(bodyEl);
    })
  }

}

module.exports = PeepsView
