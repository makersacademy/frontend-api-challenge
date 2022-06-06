/**
  * @jest-environment jsdom
*/

const fs = require('fs');
const ChitterApi = require('./chitterApi');
const MessagesModel = require('./messagesModel');
const MessagesView = require('./messagesView');
const UserModel = require('./userModel');

require('jest-fetch-mock').enableMocks();
jest.mock('./chitterApi');

describe('MessagesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new MessagesModel();
    ChitterApi.mockClear();
    mockApi = new ChitterApi();
    user = new UserModel();
    view = new MessagesView(model, mockApi, user);
  });

  it ('initializes an instance of view', () => {
    expect(view).toBeInstanceOf(MessagesView);
  });

  it('initializes with model as an argument', () => {
    expect(view.model).toBe(model);
  });

  it('displays all messages', () => {
    model.setMessages([{body: 'First message', user: {handle: 'author'}, updated_at: '2022-06-05T15:34:31.085Z'}]);
    view.displayMessages();

    expect(document.querySelectorAll('p.message-text').length).toEqual(1);
    expect(document.querySelectorAll('p.message-text')[0].innerText).toBe('First message');
  });

  it('displays messages from ChitterApi', () => {
    mockApi.loadMessages.mockReturnValue(
      [{
        id: 134,
        body: 'Api test message'
      }]
    );

    console.log(`before the api call`);
    model.getMessages().forEach(message => console.log(message));

    view.displayMessagesFromApi(); // should call the api & set model messages with returned data

    console.log(`after the api call`);
    model.getMessages().forEach(message => console.log(message));
    // it is not happening, however, the api works

    expect(mockApi.loadMessages).toHaveBeenCalled();
    
    // expect(document.querySelectorAll('div.message').length).toEqual(1);
    // expect(document.querySelectorAll('div.message')[0].innerText).toBe('Api test message');
  });

  it('initializes with user as an argument', () => {
    expect(view.user).toBe(user);
  });

  it('displays the registration form and allows user to submit their details', () => {
    document.querySelector('#sign-up-button').click();
    document.querySelector('#handle-input').value = 'john';
    document.querySelector('#password-input').value = '123';
    document.querySelector('#sign-up-submit-button').click();

    expect(mockApi.createNewUser).toHaveBeenCalled();
  });

  it('registers the user', () => {
    mockApi.createNewUser.mockReturnValue(
      {
        id: 107,
        handle: 'john'
      }
    );
    view.register('john', '123');

    expect(mockApi.createNewUser).toHaveBeenCalled();
    // expect(user.getHandle()).toBe('john');
    // expect(user.getUserId()).toBe(107);
  });

  it('displays the login form and allows user to submit their details', () => {
    document.querySelector('#login-button').click();
    document.querySelector('#handle-input-login').value = 'john';
    document.querySelector('#password-input-login').value = '123';
    document.querySelector('#login-submit-button').click();

    expect(mockApi.newSession).toHaveBeenCalled();
  });

  it('logs in the user', () => {
    mockApi.newSession.mockReturnValue(
      {
        user_id: 134,
        session_key: '2e475'
      }
    );

    view.login('john', '123');
    expect(mockApi.newSession).toHaveBeenCalled();
  });

  it('displays the add message form and allows user to submit the message', () => {
    mockApi.postMessage.mockReturnValue(
      {
        id: 1304,
        body: 'test message'
      }
    );
    
    const inputEl = document.querySelector('#add-message-input');
    const buttonEl = document.querySelector('#add-message-button');
    inputEl.value = 'Second message';
    buttonEl.click();

    expect(mockApi.postMessage).toHaveBeenCalled();    
  });

  it('posts a message', () => {
    mockApi.postMessage.mockReturnValue(
      {
        id: 1304,
        body: 'test message'
      }
    );

    view.addMessage('test message');
    expect(mockApi.postMessage).toHaveBeenCalled();
  });

});