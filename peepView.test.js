import PeepView from './peepView.js';

describe('PeepView', () => {
  let peepView;
  let list;
  beforeEach(() => {
    peepView = new PeepView()
    list = [{body: "peep", user: {handle: "user1"}}]
  })

  it('Adds html to document', () => {
    peepView.makeHTML(list)
    expect(document.body.innerHTML).toEqual("<div>user1 peep</div>")
  })
})