/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ChitterView = require('./chitterView')
 const ChitterModel = require('./chitterModel')

 describe('ChitterView', () => {
   it('displays a chit', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    const chitterModel = new ChitterModel  
    const chitterView = new ChitterView(chitterModel)
    chitterModel.addChit('hello')    
    chitterView.displayChits() 
    console.log('4')
    expect(document.querySelector('.chit').length).toBe(1)
  })

  it('displays two chits', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    const chitterModel = new ChitterModel 
    const chitterView = new ChitterView(chitterModel)
    chitterModel.addChit('hello') 
    chitterModel.addChit('hello hello') 
    chitterView.displayChits()
    expect(document.querySelectorAll('.chit').length).toBe(2)
  })
 })

