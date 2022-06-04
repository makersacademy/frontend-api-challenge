/**
  * @jest-environment jsdom
*/

const fs = require('fs');
const ChitterApi = require('./chitterApi');
const MessagesModel = require('./messagesModel');
const MessagesView = require('./messagesView');

require('jest-fetch-mock').enableMocks();
jest.mock('./chitterApi');

describe('MessagesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new MessagesModel();
    api = new ChitterApi();
    view = new MessagesView(model, api);
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

  it('displays messages from ChitterApi', () => {
    const model = new MessagesModel();
    const mockApi = new ChitterApi();
    
    mockApi.loadMessages.mockImplementation(() => {
      JSON.stringify([{
        id: 134,
        body: 'Api test message'
      }]);
    });

    view = new MessagesView(model, mockApi);

    view.displayMessagesFromApi();

    expect(mockApi.loadMessages).toHaveBeenCalled();
    
    // expect(document.querySelectorAll('div.message').length).toEqual(1);
    // expect(document.querySelectorAll('div.message')[0].innerText).toBe('Api test message');
  })

  it('adds a message', () => {
    const inputEl = document.querySelector('#add-message-input');
    const buttonEl = document.querySelector('#add-message-button');
    inputEl.value = 'Second message';
    buttonEl.click();

    expect(document.querySelectorAll('div.message').length).toEqual(1);
    expect(document.querySelectorAll('div.message')[0].innerText).toBe('Second message');
  });


});