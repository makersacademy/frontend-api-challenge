/**
 * @jest-environment jsdom
 */

const ChitterView = require('./chitterView');
const fs = require('fs')

describe(ChitterView,() => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    this.fakePeepData = {
      "id":1444,
      "body":"test peep",
      "created_at":"2022-07-03T15:55:57.177Z",
      "updated_at":"2022-07-03T15:55:57.177Z",
      "user":{"id":1,"handle":"jayjay"},
      "likes":[]}
  })

  it('shows a list of peeps when you display peeps',() => {
    const fakeApi = {
      loadPeeps: (callback) => {callback([this.fakePeepData, this.fakePeepData, this.fakePeepData])}
    }
    const view = new ChitterView(fakeApi);
    view.displayPeeps();
    expect(document.querySelectorAll('div.peep').length).toEqual(3);
  })

  it('shows the timestamp and user handle of a peep',() => {
    const fakeApi = {
      loadPeeps: (callback) => {callback([this.fakePeepData])}
    }
    const view = new ChitterView(fakeApi);
    view.displayPeeps();
    peepDiv = document.querySelector("div.peep")
    expect(peepDiv.querySelector('.peep-details').innerText).toEqual("@jayjay || 15:55 03/07/2022")
  })

  it('creates a user',() => {
    const fakeApi = {
      loadPeeps: (callback) => {callback([this.fakePeepData])},
      addUser: (handle, password, callback) => {callback({"id":1104,"handle":"yak"})}
    }
    const view = new ChitterView(fakeApi);
    let usernameInput = document.querySelector('#username-input');
    let signUpButton = document.querySelector('#sign-up');
    usernameInput.value = 'yak';
    let passwordInput = document.querySelector('#password-input');
    passwordInput.value = 'aPassword';
    signUpButton.click();
    expect(document.querySelector('#welcome-message').innerText).toEqual('Welcome to Chitter, @yak!');
  })

  describe('formatTime',() => {
    it('formats a timestamp',() => {
      const view = new ChitterView();
      expect(view.formatTime("2022-07-03T15:55:57.177Z")).toEqual("15:55 03/07/2022");
    })
  })

  describe('displayAddPeep',() => {
    it('shows a form to add a peep',() => {
      const view = new ChitterView();
      view.displayAddPeep();
      expect(document.querySelector('#peep-input').placeholder).toEqual("What's peeping?");
      expect(document.querySelector('#peep-header').innerText).toEqual('Share your peep');
    })
  })
})

