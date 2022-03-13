/**
 * @jest-environment jsdom
 */

const PeepView = require('./peepView');
const PeepModel = require('./peepModel');
const fs = require('fs');

describe('PeepView', () => {
  let view;
  let model;
  beforeEach(() => {
    view = new PeepView;
    model = new PeepModel;
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays three peeps', () => {
    model.addPeep('Hello, world');
    model.addPeep('Its a sunny day!');
    model.addPeep('Plants are great :)');

    view.displayPeeps();

    expect(view.displayPeeps('div.peep').length).toBe(3);
  });
});