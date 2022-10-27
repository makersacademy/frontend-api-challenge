/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
const Model = require('./model');
const View = require('./view');
 
describe('View', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('Displays peeps on the page', () => {
    const model = new Model;
    const view = new View(model);

    model.addPeep({body: 'Peep 1', created_at: '2022-09-19T13:31:46.990Z', user: {handle: 'user_1'}, likes: [1, 2, 3]  });
    model.addPeep({body: 'Peep 2', created_at: '2022-09-19T13:32:47.990Z', user: {handle: 'user_2'}, likes: [1, 2]  });

    view.displayPeeps();

    const allPeeps = document.querySelectorAll('div.peep-header-info');

    expect(allPeeps[0].querySelector('#peep-content').textContent).toBe('Peep 1');
    expect(allPeeps[0].querySelector('#date').textContent).toBe('2022-09-19');
    expect(allPeeps[1].querySelector('#time').textContent).toBe('13:32');
  });

  it('Retrieves peeps from the server', () => {
    const clientMock = {
      loadPeeps: (callback) => {
        callback([{body: 'Peep from server', created_at: '2022', user: {handle: 'user'}, likes: [1] }])
      }
    }
    const model = new Model;
    const view = new View(model, clientMock);

    view.displayPeepsFromApi();

    const allPeeps = document.querySelectorAll('div.peep-header-info');

    expect(allPeeps[0].querySelector('#peep-content').textContent).toBe('Peep from server');
  });
});