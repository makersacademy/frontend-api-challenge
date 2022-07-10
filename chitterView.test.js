/**
 * @jest-environment jsdom
 */

const ChitterView = require('./chitterView');
const fs = require('fs')

describe(ChitterView,() => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    this.fakePeepData = {
      "id":1444,
      "body":"test peep",
      "created_at":"2022-07-03T15:55:57.177Z",
      "updated_at":"2022-07-03T15:55:57.177Z",
      "user":{"id":1,"handle":"jayjay"},
      "likes":[]}
  })

  it('shows a list of peeps when you display peeps',() => {
    const fakeApi = {
      loadPeeps: (callback) => {callback([this.fakePeepData, this.fakePeepData, this.fakePeepData])}
    }
    const view = new ChitterView(fakeApi);
    view.displayPeeps();
    expect(document.querySelectorAll('div.peep').length).toEqual(3);
  })

  it('shows the timestamp and user handle of a peep',() => {
    const fakeApi = {
      loadPeeps: (callback) => {callback([this.fakePeepData])}
    }
    const view = new ChitterView(fakeApi);
    view.displayPeeps();
    peepDiv = document.querySelector("div.peep")
    //expect(peepDiv.querySelector(".time").InnerText).toEqual("15:55 03/07/2022");
    expect(peepDiv.querySelector('.peep-details').innerText).toEqual("@jayjay || 15:55 03/07/2022")
  })

  describe('formatTime',() => {
    it('formats a timestamp',() => {
      const view = new ChitterView();
      expect(view.formatTime("2022-07-03T15:55:57.177Z")).toEqual("15:55 03/07/2022");
    })
  })
})

