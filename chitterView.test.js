/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ApiChitter = require('./apiChitter');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

require('jest-fetch-mock').enableMocks();

describe('ChitterView', () => {
  let view;
  let model;
  let api;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    api = new ApiChitter();
    model = new ChitterModel();
    view = new ChitterView(model, api);
  });

  it('displays the peeps', () => {
    model.addPeep('first peep');
    model.addPeep('second peep');

    view.displayPeeps();

    expect(document.querySelectorAll('.headline').length).toEqual(2);
  });
});
