/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ChitterModel = require('./chitterModel');
 const ChitterView = require('./chitterView');


 describe('ChitterView',() => {
     it('Shows 2 Peeps on the page', () =>{
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new ChitterModel();
        model.addPeep("Peep 1");
        model.addPeep("Peep 2");
        const view = new ChitterView(model); 
        view.displayPeeps();
        expect(document.querySelectorAll('div.peep').length).toEqual(2);
     });

    it('Adds a user submitted Peep', () =>{
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new ChitterModel();
        const view = new ChitterView(model); 
        document.querySelector('#peep-input').value ='Test Peep';
        document.querySelector('#publish').click();
        let last = (document.querySelectorAll('div.peep').length - 1)
        expect(document.querySelectorAll('div.peep')[last].innerText).toEqual('Test Peep');
    });
    
 });