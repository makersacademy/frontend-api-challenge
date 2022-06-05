/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const ChitterView = require('./chitterView');
const ChitterModel = require('./chitterModel')
const ChitterApi = require('./chitterApi')

const apiMock = {
  loadPeeps: () => [
    'This is a peep coming from the server',
    'This is another peep.',
  ],
  createPeep: (input) => console.log(input)
};

describe(`ChitterView`, () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  describe(`#displayPeeps`, () => {
    it(`can start with no peeps`, () => {
      const model = new ChitterModel();
      const view = new ChitterView(model, apiMock);

      expect(document.querySelectorAll('div.peep').length).toBe(0);
    });

    it(`can display two notes`, () => {
      const model = new ChitterModel();
      const view = new ChitterView(model, apiMock);

      model.addPeep('A first note');
      model.addPeep('A second note');

      view.displayPeeps();

      expect(document.querySelectorAll(`div.peep`).length).toEqual(2);
    })

    it(`clicks a button and adds a new peep`, () => {
      const model = new ChitterModel();
      const view = new ChitterView(model, apiMock);

      const inputEl = document.querySelector(`#peep-input`);
      inputEl.value = "This is a new test peep."

      const buttonEl = document.querySelector(`#peep-button`);
      buttonEl.click();

      expect(document.querySelectorAll(`div.peep`).length).toEqual(1);
      expect(document.querySelectorAll(`div.peep`)[0].innerText).toEqual("This is a new test peep.");
    })

    it(`clear the list of previous peeps before displaying`, () => {
      const model = new ChitterModel();
      const view = new ChitterView(model, apiMock);

      const inputEl = document.querySelector(`#peep-input`);
      inputEl.value = "This is a new test peep."

      const buttonEl = document.querySelector(`#peep-button`);
      buttonEl.click();

      const inputEl2 = document.querySelector(`#peep-input`);
      inputEl2.value = "Another Test peep."

      const buttonEl2 = document.querySelector(`#peep-button`);
      buttonEl2.click();

      view.displayPeeps();
      view.displayPeeps();

      expect(document.querySelectorAll(`div.peep`).length).toEqual(2);
      expect(document.querySelectorAll(`div.peep`)[0].innerText).toEqual("This is a new test peep.");
      expect(document.querySelectorAll(`div.peep`)[1].innerText).toEqual("Another Test peep.");
    })
  });

});