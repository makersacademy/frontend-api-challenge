/**
 * @jest-environment jsdom
 */

const ChitterModel = require("./chitterModel");
const ChitterView = require('./chitterView');
const fs = require('fs');


describe ('ChitterView', () => {
  it('should display all peeps stored in the ChitterModel on the front page', () =>{
    document.body.innerHTML = fs.readFileSync('./index.html');

    model = new ChitterModel();
    view = new ChitterView(model);

    model.addPeep('Hey');
    model.addPeep('Hello');

    view.displayPeeps();

    expect(document.querySelectorAll('.peep').length).toEqual(2)
  })
})