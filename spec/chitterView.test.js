/**
 * @jest-environment jsdom
 */
 const fs = require('fs');

 const ChitterModel = require('../lib/chitterModel');
 const ChitterView = require('../views/chitterView'); 
 const ChittersApi = require("../lib/chitterApi");

 require('jest-fetch-mock').enableMocks()

 describe('Chitter view', () => {

  
  let chitterModel;
  let chitterApi;
  let chitterView;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    chitterModel = new ChitterModel();
    chitterApi = new ChittersApi();
    chitterView = new ChitterView(chitterModel,chitterApi);
  })

  describe('#DisplayPeeps', () => {
    it('displays a list of peeps', () => {

      let peepJSONArray = JSON.parse('[{"id": 3,"body": "my first peep :)"},{"id": 2,"body": "my second peep :)"}]')
    
      chitterModel.setPeeps(peepJSONArray);
      chitterView.displayPeeps()

      expect(document.querySelectorAll('div.peep').length).toEqual(2);
      
    })
  })

  describe('#displaySession', () => {
    it('displays the session log on fields', () => {

      chitterView.displaySessionLogOn()

      expect(document.querySelector('#handle')).not.toBeNull();
      expect(document.querySelector('#password')).not.toBeNull();
      expect(document.querySelector('#logon')).not.toBeNull();
    })
  })

  describe('#startSession', () => {
    xit('starts a user session', () => {

      //const spy = jest.spyOn(Storage.prototype, 'setItem');
      Storage.prototype.getItem = jest.fn(() => 'Test User');

      fetch.mockResponseOnce(JSON.stringify(
        {user_id: 1, session_key: "a_valid_session_key" }
        )
      );
      
      chitterView.displaySessionLogOn()
      
      const inputHandleEl = document.querySelector('#handle');
      inputHandleEl.value = "Test User"
      const inputPasswordEl = document.querySelector('#password');
      inputPasswordEl.value = "password"

      chitterView.startSession()

      expect(document.querySelector('#peep-container')).not.toBeNull();
      expect(document.querySelector('#welcome')).not.toBeNull();
      expect(document.querySelector('#handle')).toBeNull();
      expect(document.querySelector('#password')).toBeNull();
      expect(document.querySelector('#logon')).toBeNull();
    })
  })

 });
