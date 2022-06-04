/**
  * @jest-environment jsdom
*/

const fs = require('fs');
const MessagesModel = require('./messagesModel');
const MessagesView = require('./messagesView');

describe('MessagesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new MessagesModel();
    view = new MessagesView(model);
  });

  it ('initializes an instance of view', () => {
    expect(view).toBeInstanceOf(MessagesView);
  });

  it('initializes with model as an argument', () => {
    expect(view.model).toBe(model);
  });

  it('displays all messages', () => {
    model.addMessage('First message');
    view.displayMessages();

    expect(document.querySelectorAll('div.message').length).toEqual(1);
    expect(document.querySelectorAll('div.message')[0].innerText).toBe('First message');
  });

  // it('adds a message', () => {
  //   const inputEl = document.querySelector('#add-message-input');
  //   const buttonEl = document.querySelector('#add-message-button');
  //   inputEl.value = 'Second message';
  //   buttonEl.click();

  //   expect(document.querySelectorAll('div.message').length).toEqual(1);
  //   expect(document.querySelectorAll('div.message')[0].innerText).toBe('Second message');
  // });
});