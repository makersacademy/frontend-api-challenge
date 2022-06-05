/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

describe ('ChitterView class ', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('there is no peeps when starting the view', () => {
    const view = new ChitterView;

    expect(document.querySelectorAll('il.peeps').length).toBe(0);
  })

  describe('displayPeeps ', () => {
    it('displays peeps on the page', () => {
      const model = new ChitterModel;
      const view = new ChitterView(model);

      model.addPeep({
        id: 1,
        body: 'This is a test peep', 
        user: {handle: 'test'}, 
        created_at: 'time'
      });
      model.addPeep({
        id: 2, 
        body: 'This is a second test peep', 
        user: {handle: 'test'}, 
        created_at: 'time'
      });

      view.displayPeeps();

      expect(document.querySelectorAll('div.peeps').length).toBe(2);
      expect(document.querySelector('div.message').innerText).toMatch('This is a test peep');
    });
  })

  describe('displayPeepsFromApi ', () => {
    it('loads peeps from server and displays', () => {
      const model = new ChitterModel;
      const apiDouble = {
        loadPeeps: (callback) => {
          callback([{
            id:1, 
            body: 'test peep', 
            user: {handle: 'test'}, 
            created_at: 'time'
          }]);
        }
      };
      const view = new ChitterView(model, apiDouble);

      view.displayPeepsFromApi();

      expect(document.querySelectorAll('div.peeps').length).toBe(1);
      expect(document.querySelector('div.message').innerText).toMatch('test peep');
    })
  })
})