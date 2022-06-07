class ChitterView {
  constructor(model) {
    console.log(model)
    this.chitterModel = model;
    console.log(this.chitterModel)
    this.maincontainerEl = document.querySelector('#main-container'); 
    this.addChitButtonEl = document.querySelector('#add-chit-button')
    this.addChitButtonEl.addEventListener('click', () => {
      const textInput = document.querySelector('#text-input').value;  
      this.addChit(textInput)
    });
  }

  addChit(input) {
    console.log('test10')
    this.chitterModel.addChit(input)
    console.log('test20')
    // this.api.createChit(input)
    console.log('test30')
    this.displayChits()
  }

  displayChits() {
    console.log(this.chitterModel)
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
  //   // console.log(this.chitterModel)
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