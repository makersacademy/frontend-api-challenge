/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const ChitterModel = require('./chitterModel');
 const ChitterView = require('./chitterView');

 describe('ChitterView', () => {
  describe('displayPeeps', () => {
    it('displays a peep on the webpage', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new ChitterModel();
    const view = new ChitterView(model);
    model.addPeep('Peep peep peep');
    view.displayPeeps();
    expect(document.querySelectorAll('div').length).toBe(2);
    });

    it('displays multiple peeps on the webpage', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
  
      const model = new ChitterModel();
      const view = new ChitterView(model);
      model.addPeep('First peep');
      model.addPeep('Second peep');
      view.displayPeeps();
      expect(document.querySelectorAll('div').length).toBe(3);
      });
  });

});