// require('jest-fetch-mock').enableMocks();

// @jest-environment jsdom

const fs = require('fs');

const PeepsView = require('../src/peepsView');
const PeepsModel = require('../src/peepsModel');

describe('Peeps view', () => {
  it('displays two peeps', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new PeepsModel;
    const view = new PeepsView(model);
    model.addPeep('my first peep');
    model.addPeep('my second peep');

    view.displayPeeps();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
})