/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const PeepsModel = require('./peepsModel');
 const PeepsView = require('./peepsView'); 
 
 describe('Peeps view', () => {
   it('displays two peeps', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const model = new PeepsModel();
     const view = new PeepsView(model);
     model.addPeep('My first peep');
     model.addPeep('My second peep');
     view.displayPeeps();
 
     expect(document.querySelectorAll('div.peep').length).toEqual(2);
   });
 });