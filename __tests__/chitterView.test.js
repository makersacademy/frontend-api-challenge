/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PeepModel = require('../src/models/peepModel');
const ChitterView = require('../src/views/chitterView');
const ChitterClient = require('../src/chitterClient.js');
const { hasUncaughtExceptionCaptureCallback } = require('process');

require('jest-fetch-mock').enableMocks()

describe('Chitter view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    fetch.resetMocks();
  });

  it('displays the list of peeps', () => {
    const model = new PeepModel();
    const client = new ChitterClient();
    const view = new ChitterView(model, client);

    model.addPeep({
      "id": 1,
      "body": "my first peep :)",
      "created_at": "2022-10-27T13:21:23.317Z",
      "updated_at": "2022-10-27T13:21:23.317Z",
      "user": { "id": 1, "handle": "javaS" },
      "likes": [{ "user": { "id": 1, "handle": "maker12" } }]
    });

    view.displayPeep();

    expect(document.querySelectorAll('div.peep').length).toBe(1);
  })
})