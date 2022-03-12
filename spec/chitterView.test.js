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

      let peepJSONArray = JSON.parse('[{"id": 3,"body": "my first peep :)", "user": {"id":1,"handle":"test"}},{"id": 2,"body": "my second peep :)","user": {"id":1,"handle":"test"}    }]')
    
      chitterModel.setPeeps(peepJSONArray);
      chitterView.displayPeeps()

      expect(document.querySelectorAll('div.peep').length).toEqual(2);
      
    })
  })

  describe('#showCreateUser', () => {
    it('displays the new user fields', () => {

      chitterView.showCreateUser()

      expect(document.querySelector('#new-user-handle')).not.toBeNull();
      expect(document.querySelector('#new-user-password')).not.toBeNull();
      expect(document.querySelector('#register')).not.toBeNull();
    })
  })

  describe('#hideCreateUser', () => {
    it('hides the new user fields', () => {

      chitterView.showCreateUser()
      chitterView.hideCreateUser()

      expect(document.querySelector('#new-user-handle')).toBeNull();
      expect(document.querySelector('#new-user-password')).toBeNull();
      expect(document.querySelector('#register')).toBeNull();
    })
  })


  describe('#displaySession', () => {
    it('displays the session log on fields', () => {

      chitterView.showSessionLogOn()

      expect(document.querySelector('#handle')).not.toBeNull();
      expect(document.querySelector('#password')).not.toBeNull();
      expect(document.querySelector('#logon')).not.toBeNull();
    })
  })

  describe('#startSession', () => {
    it('starts a user session', async () => {
      // Sets a mock for return of getItem from localStorage
      Storage.prototype.getItem = jest.fn(() => 'Test User');

      fetch.mockResponseOnce(JSON.stringify(
        {user_id: 1, session_key: "a_valid_session_key" }
        )
      );
      
      chitterView.showSessionLogOn()
      
      const inputHandleEl = document.querySelector('#handle');
      inputHandleEl.value = "Test User"
      const inputPasswordEl = document.querySelector('#password');
      inputPasswordEl.value = "password"

      chitterView.startSession()

      // Must be a better way to do this? Need Coach feedback
      await new Promise((r) => setTimeout(r, 1000));
      expect(document.querySelector('#peep-container')).not.toBeNull();
      expect(document.querySelector('#welcome')).not.toBeNull();
      expect(document.querySelector('#handle')).toBeNull();
      expect(document.querySelector('#password')).toBeNull();
      expect(document.querySelector('#logon')).toBeNull();
    })
  })

 });
