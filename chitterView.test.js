/**
 * @jest-environment jsdom
 */

const ChitterModel = require("./chitterModel");
const ChitterView = require('./chitterView');
const fs = require('fs');


describe ('ChitterView', () => {
  describe('displayPeeps()', () => {
    it('should display all peeps stored in the ChitterModel on the front page', () =>{
      document.body.innerHTML = fs.readFileSync('./index.html');
  
      model = new ChitterModel();
      view = new ChitterView(model);
  
      model.addPeep('Hey');
      model.addPeep('Hello');
  
      view.displayPeeps();
  
      expect(document.querySelectorAll('.peep').length).toEqual(2)
    })
  })

  describe('addNewPeep()', () => {
    beforeEach(() => {
      document.body.innerHTML = fs.readFileSync('./index.html');
  
      model = new ChitterModel();
      view = new ChitterView(model);

      inputEl = document.querySelector('#peep-input');
      buttonEl = document.querySelector('#add-peep-button');

      inputEl.value = 'Hey';
      buttonEl.click();
    })

    it('should add a new peep when the user clicks the button Add Peep', () => {
      expect(document.querySelector('.peep').innerText).toEqual('Hey');
    })

    it('should clear previous peeps and reload all peeps from the model with no duplications', () => {
      // second peep
      inputEl.value = 'Hello';
      buttonEl.click();

      expect(document.querySelectorAll('.peep').length).toEqual(2);
      expect(document.querySelector('.peep').innerText).toEqual('Hey')
      expect(document.querySelectorAll('.peep')[1].innerText).toEqual('Hello');
    })

    it('should clear the input field after a new peep is added', () => {
      expect(inputEl.value).toBe("")
    })
  })
})