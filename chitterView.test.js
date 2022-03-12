/**
 * @jest-environment jsdom
 */

const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');
const fs = require('fs');

describe(ChitterView, () => {
  describe('viewPeeps', () => {
    it('Shows all peeps', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      let chittermodel = new ChitterModel;
      chittermodel.addPeep('Hello, world');
      chittermodel.addPeep("It's great here");

      let chitterview = new ChitterView(chittermodel);
      chitterview.viewPeeps();

      expect(document.querySelectorAll('div.peep').length).toEqual(2);
    });
  });
});