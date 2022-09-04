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
    expect(document.querySelector('div.peep').textContent).toEqual('tester - 1534dtest peep');
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
    expect(document.querySelector('div.peep').textContent).toBe('kay - 1534dmy first peep :)');
  })

  it('gives elapsed days on a date', () => {
    const peepsView = new PeepsView(model);
    date = "2018-06-23T13:21:23.317Z"
    expect(peepsView.elapsedDays(date)).toBe('1534d')
  })

  it('signs up a user', () => {
    const peeps = [
      {
        "body": "my first peep :)",
        "created_at": "2018-06-23T13:21:23.317Z",
        "user": { "handle": "kay" }
      }
    ]
    const api = { createUser: jest.fn(), loadPeeps: (callback) => callback(peeps) };
    new PeepsView(model, api);

    document.querySelector('#sign-up').click();

    const userEl = document.querySelector('#user-name');
    userEl.value = 'user';
    const pwdEl = document.querySelector('#password');
    pwdEl.value = 'secret';

    document.querySelector('#create-user').click();

    const user = { user: { handle: "user", password: "secret" } };
    expect(api.createUser).toHaveBeenCalledWith(user);
  })

  it('creates a session', () => {
    const response = { user_id: 1, session_key: "stuff" }
    const api = { loadSession: (session, callback) => callback(response) }
    new PeepsView(model, api)
    document.querySelector('#sign-in').click();

    const userEl = document.querySelector('#user-name');
    userEl.value = 'test';
    const pwdEl = document.querySelector('#password');
    pwdEl.value = 'test';

    document.querySelector('#create-session').click()
    const statusEl = document.querySelector('#status')
    expect(statusEl.textContent).toEqual('Logged in as User: 1')
  })

  it('posts a peep', () => {
    const peeps = [
      {
        "body": "my first peep :)",
        "created_at": "2018-06-23T13:21:23.317Z",
        "user": { "handle": "kay" }
      }
    ]
    const api = {
      postPeep: (token, peep, callback) => callback({ body: 'quack!' }),
      loadPeeps: (callback) => callback(peeps)
    }
    new PeepsView(model, api)
    document.querySelector('#post').click();

    const peepEl = document.querySelector('#post-content');
    peepEl.value = 'quack!';

    document.querySelector('#create-peep').click()
    expect(document.querySelector('div.peep').textContent).toBe('kay - 1534dmy first peep :)');


  })
})