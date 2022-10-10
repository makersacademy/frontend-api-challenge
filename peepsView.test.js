/**
 * @jest-environment jsdom
 */

require('jest-fetch-mock').enableMocks()

const fs = require('fs');
const PeepsModel = require('./peepsModel');
const PeepsView = require('./peepsView');
const PeepsApi = require('./peepsApi')

describe('PeepsView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays notes on the html page', () => {
    const model = new PeepsModel();
    const api = new PeepsApi();
    const view = new PeepsView(model,api);
    
    model.addPeep({
      body: 'New mocked peep',
      user: {handle: 'abc'}
    });
    model.addPeep({
      body: 'Second mocked peep',
      user: {handle: 'abc2'}
    });


    view.displayPeeps()

    expect(document.querySelector('.peepContent').innerText).toEqual('New mocked peep')
    expect(document.querySelectorAll('.peep').length).toEqual(2)
  })

  it('displays the login button if the user is not logged in', () => {
    const model = new PeepsModel();
    const api = new PeepsApi();
    const view = new PeepsView(model,api);

    view.loginHeader(); 

    setTimeout(() => {
      expect(document.querySelectorAll('#login').length).toEqual(1)
    }, 0)
  })


})
