/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PeepsView = require('./peepsView');
const PeepsModel = require('./peepsModel');

describe('PeepsView class', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new PeepsModel;
  })

  it('displays peeps', () => {
    const peepsView = new PeepsView(model);
    model.setPeeps([{ body: 'test peep', created_at: "2018-06-23T13:21:23.317Z", user: { handle: 'tester' } }]);
    peepsView.displayPeeps();
    expect(document.querySelector('div.peep').textContent).toEqual('tester - 1533dtest peep');
  })

  it('displayClear method', () => {
    const peepsView = new PeepsView(model)
    model.setPeeps([{ body: 'test peep', created_at: "2018-06-23T13:21:23.317Z", user: { handle: 'tester' } }]);
    peepsView.displayPeeps();
    peepsView.displayClear();
    expect(document.querySelectorAll('div.peep').length).toBe(0)
  })

  it('displayFromApi method', () => {
    const peep = [
      {
        "id": 3,
        "body": "my first peep :)",
        "created_at": "2018-06-23T13:21:23.317Z",
        "updated_at": "2018-06-23T13:21:23.317Z",
        "user": {
          "id": 1,
          "handle": "kay"
        },
        "likes": [{
          "user": {
            "id": 1,
            "handle": "kay"
          }
        }]
      }
    ]

    const api = { loadPeeps: (callback) => callback(peep) };
    const peepsView = new PeepsView(model, api);
    peepsView.displayFromApi();
    expect(document.querySelector('div.peep').textContent).toBe('kay - 1533dmy first peep :)');
  })

  it('gives elapsed days on a date', () => {
    const peepsView = new PeepsView(model);
    date = "2018-06-23T13:21:23.317Z"
    expect(peepsView.elapsedDays(date)).toBe('1533d')
  })
})