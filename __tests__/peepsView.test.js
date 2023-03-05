require('jest-fetch-mock').enableMocks();

const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

const fs = require('fs');

const PeepsView = require('../src/peepsView');
const PeepsModel = require('../src/peepsModel');
const PeepsClient = require('../src/peepsClient');

jest.mock('../src/peepsClient');

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

  it('allows the user to add a new peep', () => {
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

  it('clears previous peeps before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new PeepsModel;
    const view = new PeepsView(model);

    model.addPeep('and another peep');
    model.addPeep('peeping once more');

    view.displayPeeps();
    view.displayPeeps();

    expect(document.querySelectorAll('div.peep').length).toEqual(2);
  })

  it('displays peep data from Chitter API', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    PeepsClient.mockClear();

    const fakeClient = {loadPeeps: (callback) => callback(['mock peep'])}
    const client = new PeepsClient();
    const model = new PeepsModel();
    const view = new PeepsView(model, fakeClient);

    view.displayPeepsFromApi();
    const peepE1s = document.querySelectorAll('.peep');
    expect(peepE1s.length).toEqual(1);
    expect(peepE1s[0].textContent).toEqual('mock peep');
    done();
  });
})