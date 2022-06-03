/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ChitterView = require('./chitterView')
 const ChitterModel = require('./chitterModel')

 describe('ChitterView', () => {
   it('displays a chit', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    const chitterView = new ChitterView
    const chitterModel = new ChitterModel    
    chitterModel.addChit('hello')    
    chitterView.displayChits() 
    console.log('4')
    expect(document.querySelector('.chit').length).toBe(1)
  })
 })

