/**
 * @jest-environment jsdom
 */
require('jest-fetch-mock').enableMocks()
const PeepsView = require('./peepsView.js')
const PeepsApi  = require('./peepsApi.js') 
const fs = require('fs');
const PeepsModel = require('./peepsModel.js');


describe(PeepsView, () => {
  
  describe('displayPeeps', () => {
    it('displays a list of peeps', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      let api   = new PeepsApi();
      let model = new PeepsModel();
      let view  = new PeepsView(api, model);

      const peeps = JSON.parse('[{"id": 1,"body": "My first test peep"},{"id": 2,"body": "Another test peep"}]')
        model.setPeeps(peeps)
        view.displayPeeps() 

      console.log(document.querySelector('div'))
      expect(document.querySelectorAll('div').length).toBe(2)
    })
  })
})