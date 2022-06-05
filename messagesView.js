class MessagesView {
  constructor(model, api, user) {
    this.model = model;
    this.api = api;
    this.user = user;

    this.mainContainerEl = document.querySelector('#main-container');

    this.addMessageInput = document.querySelector('#add-message-input');
    this.addMessageButton = document.querySelector('#add-message-button');

    this.addMessageButton.addEventListener('click', () => {
      this.addMessage(this.addMessageInput.value);
      this.addMessageInput.value = "";
    });

    this.signUpButton = document.querySelector('#sign-up-button');

    this.signUpButton.addEventListener('click', () => {
      document.querySelector('#sign-up-container').innerHTML = "";
      this.displaySignUpForm();
    });

    this.loginButton = document.querySelector('#login-button');

    this.loginButton.addEventListener('click', () => {
      document.querySelector('#login-container').innerHTML = "";
      this.displayLoginForm();
    });
  }

  addMessage(text) {
    this.model.addMessage(text);
    this.displayMessages();
  }

  displayMessages() {
    document.querySelectorAll('.message').forEach(element => element.remove());

    const messages = this.model.getMessages();

    messages.forEach(message => {
      const messageEl = document.createElement('div');
      messageEl.innerText = message.body;
      messageEl.className = 'message';
      this.mainContainerEl.append(messageEl);
    });
  }

  displayMessagesFromApi() {
    this.api.loadMessages(data => {
      this.model.setMessages(data);
      this.displayMessages();
    });
  }

  displaySignUpForm() {
    const handleInputEl = document.createElement('input');
    handleInputEl.placeholder = 'handle';
    handleInputEl.type = 'text';
    handleInputEl.id = 'handle-input';
    
    const passwordInputEl = document.createElement('input');
    passwordInputEl.placeholder = 'password';
    passwordInputEl.type = 'password';
    passwordInputEl.id = 'password-input';

    const submitSignUpButton = document.createElement('button');
    submitSignUpButton.innerText = "Sign Up";
    submitSignUpButton.id = 'sign-up-submit-button';

    document.querySelector('#sign-up-container').append(handleInputEl);
    document.querySelector('#sign-up-container').append(passwordInputEl);
    document.querySelector('#sign-up-container').append(submitSignUpButton);

    submitSignUpButton.addEventListener('click', () => {
      this.register(handleInputEl.value, passwordInputEl.value);
    });
  }

  register(handle, password) {
    this.api.createNewUser(handle, password, (data) => {
      console.log(data);
      this.user.setHandle(data.handle);
      this.user.setUserId(data.id);
      console.log('user registered');
    });
  }

  displayLoginForm() {
    const handleInputEl = document.createElement('input');
    handleInputEl.placeholder = 'handle';
    handleInputEl.type = 'text';
    handleInputEl.id = 'handle-input-login';
    
    const passwordInputEl = document.createElement('input');
    passwordInputEl.placeholder = 'password';
    passwordInputEl.type = 'password';
    passwordInputEl.id = 'password-input-login';

    const submitLoginButton = document.createElement('button');
    submitLoginButton.innerText = "Log In";
    submitLoginButton.id = 'login-submit-button';

    document.querySelector('#login-container').append(handleInputEl);
    document.querySelector('#login-container').append(passwordInputEl);
    document.querySelector('#login-container').append(submitLoginButton);

    submitLoginButton.addEventListener('click', () => {
      this.login(handleInputEl.value, passwordInputEl.value);
    });
  }

  login(handle, password) {
    this.api.newSession(handle, password, (data) => {
      console.log(data);
      this.user.setSessionKey(data.session_key);
      console.log('user logged in')
    });
  }
};

module.exports = MessagesView;