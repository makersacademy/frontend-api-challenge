// require('jest-fetch-mock').enableMocks();

const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

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

    expect(document.querySelectorAll('div.peep').length).toEqual(2);
  });

  it('adds a new peep', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new PeepsModel;
    const view = new PeepsView(model);

    const input = document.querySelector('#add-peep-input');
    input.value = 'another peep';

    const button = document.querySelector('#add-peep-btn');
    button.click();

    expect(document.querySelectorAll('div.peep').length).toEqual(1);
    expect(document.querySelectorAll('div.peep')[0].textContent).toEqual('another peep');
  })
})