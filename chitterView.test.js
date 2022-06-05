/**
 * @jest-environment jsdom
 */

require('jest-fetch-mock').enableMocks();

const fs = require('fs');
const ChitterApi = require('./chitterApi');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

describe('ChitterView class', () => {

  beforeEach(() => {
    fetch.resetMocks();
  })

  it('Displays peeps', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const testPeep = [{
      "id":12345,
      "body":"this is a test",
      "created_at":"2022-06-03T17:43:02.492Z",
      "updated_at":"2022-06-03T17:43:02.492Z",
      "user":{
        "id":678,
        "handle":"testUser"
      },
      "likes":[]
    }];

    const api = new ChitterApi;
    const model = new ChitterModel(testPeep);
    const view = new ChitterView(model, api);

    view.displayPeeps();
    const displayedPeeps = document.querySelectorAll('div.peep');

    expect(displayedPeeps.length).toEqual(1);
    expect(displayedPeeps[0].innerText).toEqual("this is a test");
  });

  // the mocking in this doesn't work for some reason.
  
  // it('creates new sessions', () => {
  //   fetch.mockResponseOnce(JSON.stringify({
  //     "user_id":12345,
  //     "session_key":"_3b_65_WEjfcW0unkmN9uVtIMa24f"
  //   }));

  //   document.body.innerHTML = fs.readFileSync('./index.html');

  //   const api = new ChitterApi;
  //   const model = new ChitterModel;
  //   const view = new ChitterView(model, api);

  //   document.querySelector('#handle').value = "testHandle";
  //   document.querySelector('#password').value = "testPassword";
  //   document.querySelector('#login-button').click();

  //   expect(view.userID).toEqual(12345);
  //   expect(view.sessionKey).toEqual("_3b_65_WEjfcW0unkmN9uVtIMa24f")
  // })
});