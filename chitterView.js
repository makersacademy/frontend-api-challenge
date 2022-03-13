const ChitterApi = require('./chitterApi');

class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.user = user;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#submit-peep-button').addEventListener('click', () => {
      let newPeep = document.querySelector('#user-input').value;
      this.addNewPeep(newPeep);
      // this.api.createPeep(peep);
      

      const clearInputField = document.getElementById("user-input");
        const btn = document.getElementById("submit-peep-button");
        clearInputField.value = " ";
    })
  };

  viewPeeps(){
    document.querySelectorAll('.peep').forEach(element => {
      element.remove();
    });

    let allPeeps = this.model.getPeeps();
    allPeeps.forEach(peep => {
      let div = document.createElement('div');
      div.innerText = peep;
      div.className = 'peep';
      this.mainContainerEl.append(div);
    });
    
  };

  addNewPeep(newPeep) {
    this.model.addPeep(newPeep);
    this.viewPeeps();
  };
};










module.exports = ChitterView;