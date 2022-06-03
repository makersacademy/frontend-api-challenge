class ChitterView {
  constructor(model) {
    this.chitterModel = model;
    this.maincontainerEl = document.querySelector('#main-container'); 
    this.addChitButtonEl = document.querySelector('#add-chit-button')
    this.addChitButtonEl.addEventListener('click', () => {
      const textInput = document.querySelector('#text-input').value;  
      this.addChit(textInput)
    });
  }

  addChit(chit) {
    this.chitterModel.addChit(chit)
    this.displayChits()
  }

  displayChits() {
    document.querySelectorAll('.chit').forEach(chit => {
      chit.remove();
    });
    (this.chitterModel.getChits().forEach(chit => {
      const chitEl = document.createElement('div')
      chitEl.innerText = chit
      chitEl.className = 'chit';
      this.maincontainerEl.append(chitEl);
      document.querySelector('#text-input').value = ''
    }))
    
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