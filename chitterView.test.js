/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

describe ('ChitterView class ', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('there is no peeps when starting the view', () => {
    const view = new ChitterView;

    expect(document.querySelectorAll('il.peeps').length).toBe(0);
  })

  describe('displayPeeps ', () => {
    it('displays peeps on the page', () => {
      const model = new ChitterModel;
      const view = new ChitterView(model);

      model.addPeep('This is a test peep');
      model.addPeep('This is a second test peep');

      view.displayPeeps();

      expect(document.querySelectorAll('il.peeps').length).toBe(2);
      expect(document.querySelector('il.peeps').innerText).toBe('This is a test peep');
    });
  })
})