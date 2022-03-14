/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ChitterModel = require('./chitterModel')
const ChitterView = require('./chitterView')

describe('ChitterView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new ChitterModel;
    view = new ChitterView(model)
  });

  it('displays 2 peeps', () => {
    model.addPeep('peet test1')
    model.addPeep('peep test2')
    view.displayPeeps();

    expect(document.querySelectorAll('div.peep').length).toBe(2);
  })
}) 