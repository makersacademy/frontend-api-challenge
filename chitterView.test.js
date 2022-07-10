/**
 * @jest-environment jsdom
 */

const ChitterView = require('./chitterView');
const fs = require('fs')

describe(ChitterView,() => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const fakePeepData = {
      "id":1444,
      "body":"test peep",
      "created_at":"2022-07-03T15:55:57.177Z",
      "updated_at":"2022-07-03T15:55:57.177Z",
      "user":{"id":1,"handle":"you"},
      "likes":[]}
    this.fakeApi = {
      loadPeeps: (callback) => {callback([fakePeepData, fakePeepData, fakePeepData])}
    }
  })

  it('shows a list of peeps when you display peeps',() => {
    const view = new ChitterView(this.fakeApi);
    view.displayPeeps();
    expect(document.querySelectorAll('div.peep').length).toEqual(3);
  })

  it('shows the timestamp and user handle of a peep',() => {

  })
})

