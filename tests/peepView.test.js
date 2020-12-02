import PeepView from '../models/peepView.js';

describe('PeepView', () => {
  let peepView;
  let list;
  beforeEach(() => {
    peepView = new PeepView()
    list = [{body: "peep", user: {handle: "user1"}, id: "1"}]
  })

  it('Adds html to document', () => {
    peepView.makeHTML(list)
    expect(document.body.innerHTML).toEqual("<div id=\"peeps\"><li>user1 posted: <br> peep  <a id=\"1\" href=\"#peeps/1\">View Peep</a><br><br></li></div>")
  })
})