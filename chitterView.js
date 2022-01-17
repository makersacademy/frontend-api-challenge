/* eslint-disable require-jsdoc */
const ChitterApi = require('./chitterApi');

class ChitterView {
  constructor(api) {
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.viewButton = document.querySelector('#view-peeps-button');

    this.viewButton.addEventListener('click', () => {
      this.api.loadPeeps((this.displayPeeps));
    });
  }

  displayPeeps(peeps) {
    // document.querySelectorAll('.peep').forEach((peep) => {
    //   peep.remove();
    // });
    console.log(peeps);
    peeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep.body + peep.user.handle;
      console.log(peepEl.innerHTML);
      peepEl.className = 'peep';
      document.querySelector('#main-container').append(peepEl);
      console.log(document.querySelector('.peep').innerHTML);
    });
  }
}

module.exports = ChitterView;
