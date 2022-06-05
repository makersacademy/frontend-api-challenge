/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

//write the code I wish I had
jest.mock('./accessServer');
jest.mock('./getAllPeeps');
jest.mock('./putPeepsOnScreen');

//I wish I had something that accessed the server
const ChitterApi = require('./chitterApi');
// I wish I had something that got all the peepr
const ChitterModel = require('./chitterModel');
// I wish I had something that put the peeps on the screen
const PeepsView = require('./PeepsView');

//and I need a subject
const subject = require('./index');



describe('index', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays all current peeps', () => {
    const chitterApi = new ChitterApi();
    const chitterModel = new ChitterModel(chitterApi);
    const peepsView = new PeepsView(chitterModel);

    peepsView.all();

    expect(document.querySelectorAll('.peeps')).toBeGreaterThan(1);
  })
})

// so what I am trying to do here is set up a test that helps me to start in line with what Justin Searls was talking about
