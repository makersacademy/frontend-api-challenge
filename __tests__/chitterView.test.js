/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PeepModel = require('../src/models/peepModel');
const UserModel = require('../src/models/userModel');
const ChitterView = require('../src/views/chitterView');

describe('Chitter view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    this.mockedData = [{
      "id": 3,
      "body": "my first peep :)",
      "created_at": "2022-10-28T13:21:23.317Z",
      "updated_at": "2022-10-28T13:21:23.317Z",
      "user": { "id": 1, "handle": "maker" },
      "likes": [{ "user": { "id": 1, "handle": "maker" } }]
    }]  
  })

  it('displays a peep', () => {
    const model = new PeepModel();
    const view = new ChitterView(model);

    model.addPeep(this.mockedData[0]);
  
    view.displayPeeps();

    expect(document.querySelectorAll('.peep').length).toBe(1);
    expect(document.querySelectorAll('.peep-body')[0].textContent).toBe('my first peep :) @maker');
  })

  it('displays the list of peeps', () => {
    const model = new PeepModel();
    const view = new ChitterView(model);

    model.addPeep(this.mockedData[0]);
    model.addPeep({
      "id": 4,
      "body": "Hello",
      "created_at": "2022-10-28T13:21:23.317Z",
      "updated_at": "2022-10-28T13:21:23.317Z",
      "user": { "id": 1, "handle": "stranger" },
      "likes": [{ "user": { "id": 1, "handle": "stranger" } }]
    });
  
    view.displayPeeps();

    expect(document.querySelectorAll('.peep').length).toBe(2);
    expect(document.querySelectorAll('.peep-body')[1].textContent).toBe('Hello @stranger');

  })

  it('displays the list of peeps from API', () => {
    const mockedApi = {
      loadPeeps: (cb) => {
        cb(this.mockedData)
      }
    }
    const model = new PeepModel();
    const view = new ChitterView(model, mockedApi);

    view.displayPeepsFromAPI();

    expect(document.querySelectorAll('.peep').length).toBe(1);
    expect(document.querySelectorAll('.peep-body')[0].textContent).toBe('my first peep :) @maker');
  })

  it('clicks the sign up button and creates a new user', () => {
    const mockedApi = {
      createUser: (username, password, cb) => {
        cb({ "id" : 1, "handle" : "maker"})
      }
    }
    const model = new PeepModel();
    const user = new UserModel();
    const view = new ChitterView(model, mockedApi, user);
    
    const userNameInput = document.querySelector('#username-input');
    userNameInput.value = 'maker';
    const passwordInput = document.querySelector('#password-input');
    passwordInput.value = 'password123';

    const signupButton = document.querySelector('#sign-up');
    signupButton.click();
    
    view.signUp(userNameInput, passwordInput);
    expect(document.querySelector('.sign-up-message').textContent).toBe('Welcome maker, thanks for joining us!')
  })
})