/**
 * @jest-environment jsdom
 */
 const fs = require('fs');

 const ChitterModel = require('../lib/chitterModel');
 const ChitterView = require('../views/chitterView'); 
 const ChittersApi = require("../lib/chitterApi");

 require('jest-fetch-mock').enableMocks()

 describe ('Chitter view', () => {

  document.body.innerHTML = fs.readFileSync('./index.html');

  describe ('#DisplayPeeps', () => {
    it('displays a list of peeps', () => {
      

      
    })


  })

 });
