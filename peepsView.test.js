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
      let view = new PeepsView();
      view.displayPeeps()
      expect(document.querySelectorAll('div.peeps').length).toBe(50)
    })
  })
})