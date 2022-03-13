/**
 * @jest-environment jsdom
 */
const PeepsView = require('./peepsView.js')
const PeepsApi  = require('./peepsApi.js') 
const fs = require('fs');


describe(PeepsView, () => {
  
  describe('displayPeeps', () => {
    it('displays a list of peeps', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      let api = new PeepsApi();
      let view = new PeepsView(api);
      const buttonEl = document.querySelector('#view-peeps-button')
      buttonEl.click()
      console.log(document.querySelector('div'))
      expect(document.querySelectorAll('div').length).toBe(50)
    })
  })
})