const MessagesModel = require('./messagesModel');

describe('MessagesModel', () => {

  beforeEach(() => {
    model = new MessagesModel();
  });

  it('displays all the messages', () => {
    expect(model.displayMessages()).toEqual([]);
  });

  it('adds a message', () => {
    model.addMessage('First message');
    expect(model.displayMessages()).toEqual(['First message']);
  });
});