/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const ChitterApi = require('./chitterApi');
const ChitterView = require('./chitterView');
require('jest-fetch-mock').enableMocks();

describe('Chitter view', () => {
  it('displays the peeps and usernames when view button pressed', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    fetch.mockResponseOnce(JSON.stringify(
        [
          {
            'id': 875,
            'body': 'pepper xmas',
            'user': {
              'id': 796,
              'handle': 'pepperpaws',
            },
          },
        ],
    ),
    );
    const api = new ChitterApi();
    const view = new ChitterView(api);
    const button = document.querySelector('#view-peeps-button');
    button.click();
    expect(document.querySelectorAll('div.peep').length).toEqual(1);
  });
});
