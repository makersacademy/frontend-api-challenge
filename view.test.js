/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
const PeepModel = require('./peepModel');
const UserModel = require('./userModel');
const View = require('./view');
 
describe('View', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('Displays peeps on the page', () => {
    const peepModel = new PeepModel;
    const view = new View(peepModel);

    peepModel.addPeep({body: 'Peep 1', created_at: '2022-09-19T13:31:46.990Z', user: {handle: 'user_1'}, likes: [1, 2, 3]  });
    peepModel.addPeep({body: 'Peep 2', created_at: '2022-09-19T13:32:47.990Z', user: {handle: 'user_2'}, likes: [1, 2]  });

    view.displayPeeps();

    const allPeeps = document.querySelectorAll('div.peep-header-info');

    expect(allPeeps[0].querySelector('#peep-content').textContent).toBe('Peep 2');
    expect(allPeeps[0].querySelector('#date').textContent).toBe('2022-09-19');
    expect(allPeeps[1].querySelector('#time').textContent).toBe('13:31');
  });

  it('Retrieves peeps from the server', () => {
    const clientMock = {
      loadPeeps: (callback) => {
        callback([{body: 'Peep from server', created_at: '2022', user: {handle: 'user'}, likes: [1] }]);
      }
    }
    const userModel = new UserModel;
    const peepModel = new PeepModel;
    const view = new View(peepModel, userModel, clientMock);

    view.displayPeepsFromApi();

    const allPeeps = document.querySelectorAll('div.peep-header-info');

    expect(allPeeps[0].querySelector('#peep-content').textContent).toBe('Peep from server');
  });

  it('Displays successfull sign up status', () => {
    const peepModel = new PeepModel;
    const view = new View(peepModel);

    const message = {id: 1, handle: 'user123'};
    view.displaySignupStatus(message);

    expect(document.querySelector("#status-signup-message").textContent).toBe('User user123 was successfully created!')
  });

  it('Closes the sign in form and changes elements if successfull login', () => {
    const peepModel = new PeepModel;
    const userModel = new UserModel;
    const view = new View(peepModel, userModel);
  
    userModel.setUserDetails({"user_id":1,"session_key":"random"});
    
    document.querySelector(".popup-signin").classList.add("active"); // open form first
    view.displaySigninOutcome('test_user');
    expect(document.querySelector(".popup-signin").classList).not.toBe("active"); // form must be closed
    expect(userModel.username).toBe('test_user'); // saves username
    expect(document.querySelector('#welcome-user').textContent).toBe('test_user'); // adds username to welcome message
    expect(document.querySelector('#show-peepform').style.display).toBe('block'); // displays Peep button on the navbar
  });

  it('Displays error message if unsuccesfull login', () => {
    const peepModel = new PeepModel;
    const userModel = new UserModel;
    const view = new View(peepModel, userModel);
  
    userModel.setUserDetails({"errors":{"password":"Invalid username or password"}});

    view.displaySigninOutcome();

    expect(document.querySelector('#status-signin-message').textContent).toBe('Invalid username or password');
  });
  
});