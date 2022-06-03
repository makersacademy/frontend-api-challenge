class ChitterView {
  constructor(model) {
    this.chitterModel = model;
    this.maincontainerEl = document.querySelector('#main-container'); 
    console.log('hello10')
  }

  displayChits() {
    (this.chitterModel.getChits().forEach(chit => {
      const chitEl = document.createElement('div')
      chitEl.innerText = chit
      chitEl.className = 'chit';
      this.maincontainerEl.append(chitEl);
    }))
    console.log('hello11')
    
  }

  // displayChits() {
  //   this.chitterModel.getChits()
  //   chits = this.chitterModel.getChits()
  //   chits.forEach(chit => {
  //     const chitEl = document.createElement('div')
  //     chitEl.innerText = chit
  //     chitEl.className = 'chit';
  //     this.maincontainerEl.append(chitEl);
  //   })
  // }

  testChits() {
    this.maincontainerEl.append('hello')
  }

  testModel() {
    chits = this.chitterModel.chits
    this.maincontainerEl.append(chits)
  }
  
}

module.exports = ChitterView;