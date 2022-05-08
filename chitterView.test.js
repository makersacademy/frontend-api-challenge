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
});
