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

  it('adds peep to the model when add button clicked', () => {
    const peep = 'It is Sunday!'
    const inputEl = document.querySelector('#peep-input');
    inputEl.value = peep;
    const buttonEl = document.querySelector('#add-peep-btn')
    buttonEl.click();

    const peepEl = document.querySelectorAll('.peep');
    expect(peepEl.length).toEqual(1);
    expect(peepEl[0].textContent).toContain('It is Sunday');
  });

  it('clears existing displayed peeps before displaying again with new peep added', () => {
    model.addPeep('This is peep one');
    model.addPeep('This is peep two');
    view.displayPeeps();
    view.displayPeeps();

    const peepEl = document.querySelectorAll('.peep');
    expect(peepEl.length).toEqual(2);
  });
})  
