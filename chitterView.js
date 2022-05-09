class ChitterView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#submit-peep-button').addEventListener('click', () => {
      let newPeep = document.querySelector('#user-input').value;
      this.addNewPeeps(newPeep);

      const clearInputField = document.getElementById('user-input');
      const btn = document.getElementById('#submit-peep-button');
      clearInputField.value = " ";
    })
  };

  addNewPeeps(newPeeps) {
    this.model.addPeeps(newPeeps);
    this.viewPeeps();
  }

  viewPeeps() {
    document.querySelectorAll('.peep').forEach(element => {
      element.remove();
    })
    let displayPeeps = this.model.getPeeps();
    displayPeeps.forEach(peep => {
      let div = document.createElement('div');
      div.innerText = peep;
      div.className = 'peep';
      this.mainContainerEl.append(div);
    });
  };
};

module.exports = ChitterView;

