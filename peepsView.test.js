/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ChitterApi = require('./chitterApi');
 const PeepsModel = require('./peepsModel');
 const PeepsView = require('./peepsView'); 
 require('jest-fetch-mock').enableMocks()
 
 describe('Peeps view', () => {
   it('displays two peeps added from model', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     const api = new ChitterApi();
     fetch.mockResponseOnce(JSON.stringify({
     
     }));
     const model = new PeepsModel();
    //  model.peeps = []
    //  console.log(model.peeps)
     const view = new PeepsView(model, api);
     model.addPeep('My first peep');
     model.addPeep('My second peep');
     view.display(model.peeps);
 
     expect(document.querySelectorAll('.figure').length).toEqual(2);
   });

 });