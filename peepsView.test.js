/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PeepsModel = require('./peepsModel')
const PeepsView = require('./peepsView');

describe('Peeps View', () => {
  let model;
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new PeepsModel();
    view = new PeepsView(model);
  });

  it('displays peeps', () => {
    model.addPeep('It is Saturday!')
    view.displayPeeps();
    peepEls = document.querySelectorAll('div.peep');
    peepEls.forEach((peep) => {
      expect(peep.textContent).toContain('It is Saturday!');
    expect(document.querySelectorAll('div.peep').length).toEqual(1);
    });
  });
})
