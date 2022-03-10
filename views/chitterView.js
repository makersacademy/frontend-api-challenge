class ChitterView{
  
  constructor(ChitterModel, api){
    this.model = ChitterModel;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayPeeps() {
      const peeps = this.model.getPeeps()

      document.querySelectorAll('.peep').forEach(e => e.remove());

      peeps.forEach(peep => {
        const peepEl = document.createElement('div')
        peepEl.innerText = peep.body
        peepEl.className = 'peep'
        this.mainContainerEl.append(peepEl)
      })
  }
}

module.exports = ChitterView;