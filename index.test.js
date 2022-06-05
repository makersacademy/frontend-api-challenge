/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

//write the code I wish I had
jest.mock('./chitterApi');
jest.mock('./chitterModel');
jest.mock('./chitterView');

//I wish I had something that accessed the server
const ChitterApi = require('./chitterApi');
// I wish I had something that got all the peepr
const ChitterModel = require('./chitterModel');
// I wish I had something that put the peeps on the screen
const ChitterView = require('./chitterView');

//and I need a subject
const subject = require('./index');



describe('index', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays all current peeps', () => {
    const chitterApi = new ChitterApi();
    const chitterModel = new ChitterModel(chitterApi);
    const chitterView = new ChitterView(chitterModel);

    chitterView.all();

    expect(document.querySelectorAll('.peeps')).toBeGreaterThan(1);
  })
})

