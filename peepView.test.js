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
    model = new PeepModel();
    view = new PeepView(model);
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays three peeps', () => {
    model.addPeep('Hello, world');
    model.addPeep('Its a sunny day!');
    model.addPeep('Plants are great :)');

    view.displayPeeps();

    expect(view.displayPeeps('div.peep').length).toBe(3);
  });

  it('Adds a peep when the button is clicked', () => {
    const peepInputEl = document.querySelector('#add-peep-input');
    peepInputEl.value = 'Goodnight London';

    const peepButtonEl = document.querySelector('#add-peep-button');
    peepButtonEl.click()

    expect(document.querySelectorAll('div.peep')[0]).toEqual('Goodnight London');
    expect(document.querySelectorAll('div.peep').length).toBe(1);
  })
});