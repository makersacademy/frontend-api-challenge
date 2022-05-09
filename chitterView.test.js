/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

describe(ChitterView, () => {
  describe('viewPeeps', () => {
    it('displays all peeps', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const chitterModel = new ChitterModel;

      chitterModel.addPeeps('Hope you like my peep!');
      chitterModel.addPeeps('I like Javascript!');
      chitterModel.addPeeps('I really should go to bed!');

      const chitterView = new ChitterView(chitterModel);
      chitterView.viewPeeps();

      expect(document.querySelectorAll('div.peep').length).toEqual(3);
    });
  });

  describe('adds a new peep', () => {
    it('displays a new peep on Chitter page', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const chitterModel = new ChitterModel;
      const chitterView = new ChitterView(chitterModel);

      const input = document.querySelector('#user-input');
      input.value = 'Here is a new peep!';
      const button = document.querySelector('#submit-peep-button');
      button.click();

      expect(document.querySelectorAll('div.peep').length).toEqual(1);
      expect(document.querySelectorAll('div.peep')[0].innerText).toEqual('Here is a new peep!');
    });
  });
});
