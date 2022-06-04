/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

describe('ChitterView class', () => {
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

    const model = new ChitterModel(testPeep);
    const view = new ChitterView(model);

    view.displayPeeps();
    const displayedPeeps = document.querySelectorAll('div.peep');

    expect(displayedPeeps.length).toEqual(1);
    expect(displayedPeeps[0].innerText).toEqual("this is a test");
  });
});