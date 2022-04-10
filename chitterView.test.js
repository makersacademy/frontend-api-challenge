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
    it('should add a new peep when the user clicks the button Add Peep', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
  
      model = new ChitterModel();
      view = new ChitterView(model);

      inputEl = document.querySelector('#peep-input');
      buttonEl = document.querySelector('#add-peep-button');

      inputEl.value = 'Hey';
      buttonEl.click();

      expect(document.querySelector('.peep').innerText).toEqual('Hey');
    })
  })
})