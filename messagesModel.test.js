const MessagesModel = require('./messagesModel');

describe('MessagesModel', () => {

  beforeEach(() => {
    model = new MessagesModel();
  });

  it('gets the messages', () => {
    expect(model.getMessages()).toEqual([]);
  });

  it('adds a message', () => {
    model.addMessage('First message');
    expect(model.getMessages()).toEqual(['First message']);
  });
});