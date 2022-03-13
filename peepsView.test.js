/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ChitterApi = require('./chitterApi');
 const PeepsModel = require('./peepsModel');
 const PeepsView = require('./peepsView'); 
 
 describe('Peeps view', () => {
   it('displays two peeps added from model', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     const api = new ChitterApi();
     const model = new PeepsModel();
     const view = new PeepsView(model, api);
     model.addPeep('My first peep');
     model.addPeep('My second peep');
     view.display(model.peeps);
 
     expect(document.querySelectorAll('div.peep').length).toEqual(2);
   });
 });