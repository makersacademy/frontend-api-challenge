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
      const chitterModel = new ChitterModel();
      const chitterApi = new ChittersApi();
      const chitterView = new ChitterView(chitterModel,chitterApi);

      let peepJSONArray = JSON.parse('[{"id": 3,"body": "my first peep :)"},{"id": 2,"body": "my second peep :)"}]')
    
      chitterModel.setPeeps(peepJSONArray);

      chitterView.displayPeeps()

      expect(document.querySelectorAll('div.peep').length).toEqual(2);
      
    })


  })

 });
