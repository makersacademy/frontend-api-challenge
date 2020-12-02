import PeepView from '../models/peepView.js';

describe('PeepView', () => {
  let peepView;
  let list;
  let container;

  beforeEach(() => {
    peepView = new PeepView()
    list = [{body: "peep", user: {handle: "user1"}, id: "1"}]
    container = document.createElement("div");
    container.setAttribute('id', 'peeps')
    document.body.appendChild(container);
  })
  
  it('Adds html to document', () => {
    peepView.makeHTML(list)
    expect(container.innerHTML).toEqual("<li>user1 posted: <br> peep  <a id=\"1\" href=\"#peeps/1\">View Peep</a><br><br></li>")
  })
})