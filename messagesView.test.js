const MessagesModel = require('./messagesModel');
const MessagesView = require('./messagesView');

describe('MessagesView', () => {

  it ('initializes an instance of view', () => {
    const model = new MessagesModel();
    const view = new MessagesView(model);

    expect(view).toBeInstanceOf(MessagesView);
  });

  it('initializes with model as an argument', () => {
    const model = new MessagesModel();
    const view = new MessagesView(model);

    expect(view.model).toBe(model);
  });
  
  // it('displays all messages', () => {

  // })
})