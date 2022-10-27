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
    model.addPeep({body: 'Peep 2', created_at: '2022-09-19T13:31:46.990Z', user: {handle: 'user_2'}, likes: [1, 2]  });

    view.displayPeeps();

    const firstPeep = document.querySelectorAll('div.peep')[0];
    const secondPeep = document.querySelectorAll('div.peep')[1];

    expect(firstPeep.querySelector('p.message').textContent).toBe('Peep 1');
    expect(firstPeep.querySelector('p.date').textContent).toBe('2022-09-19T13:31:46.990Z');
    expect(secondPeep.querySelector('p.user').textContent).toBe('user_2');
    expect(secondPeep.querySelector('p.likes').textContent).toBe('2');
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

    const firstPeep = document.querySelectorAll('div.peep')[0];
    expect(firstPeep.querySelector('p.message').textContent).toBe('Peep from server');
  })
});