class ChitterView {
  constructor(model, client, user) {
    this.model = model;
    this.client = client;
    this.user = user;
    
    this.mainContainerEl = document.querySelector('#main-container');
    this.signupButton = document.querySelector('#sign-up-btn');
    this.logInButton = document.querySelector('#log-in-btn');
    this.createPeepButton = document.querySelector('#add-peep-btn');
    
    this.signupButton.addEventListener('click', () => {
      this.signUp();
    });

    this.logInButton.addEventListener('click', () => {
      this.logIn();
    });

    this.createPeepButton.addEventListener('click', () => {
      this.createPeep();
    });
  }
  
  addNewPeep(newPeep) {
    this.model.addPeep(newPeep);
  }
  
  displayPeeps() {
    const allPeeps = this.model.getPeeps();

    allPeeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.className = 'peep';

      const peepBody = document.createElement('p');
      peepBody.textContent = `${peep.body} @${peep.user.handle}`;
      peepBody.className = 'peep-body';

      const createdTimeEl = document.createElement('div');
      createdTimeEl.textContent = peep.updated_at;
      createdTimeEl.className = 'peep-updated-time';
      
      peepEl.append(peepBody);
      peepEl.append(createdTimeEl);
      this.mainContainerEl.append(peepEl);
    });
  }

  displayPeepsFromAPI() {
    this.client.loadPeeps((response) => {
      this.model.setPeep(response);
      this.displayPeeps();
    });
  }

  signUp() {
    const username = document.querySelector('#new-username-input').value;
    const password = document.querySelector('#new-password-input').value;

    this.client.createUser(username, password, (response) => {
      const userId = response.id;
      const handle = response.handle;
      this.user.setUser(userId, handle);

      this.signUpMessage(handle);
      this.displayPeeps();
    });
  }

  logIn() {
    const username = document.querySelector('#username-input').value;
    const password = document.querySelector('#password-input').value;

    this.client.newSession(username, password, (response) => {
      const userId = response.id;
      const handle = response.handle;
      this.user.setSession(userId, handle);

      this.logInMessage(username);
      this.displayPeeps();
    });
  }
  
  createPeep() { 
    const userId = this.user.getSession.user_id;
    const sessionKey = this.user.getSession.session_key;
    const peepInput = document.querySelector('#peep-input').value; 

    this.client.addPeep(userId, sessionKey, peepInput, (response) => {

      this.addNewPeep(response);
      this.displayPeeps();
    });
  }

  signUpMessage(username) {
    const signUpEl = document.querySelector('#sign-up'); 
    document.querySelector('#new-username-input').value = '';
    document.querySelector('#new-password-input').value = '';

    const signUpMessageEl = document.createElement('p');
    signUpMessageEl.className = 'sign-up-message';
    signUpMessageEl.textContent = `Welcome ${username}, thanks for joining us!`;

    signUpEl.append(signUpMessageEl);
  }

  logInMessage(username) {
    const logInEl = document.querySelector('#log-in');
    document.querySelector('#username-input').value = '';
    document.querySelector('#password-input').value = '';

    const loginMessageEl = document.createElement('p');
    loginMessageEl.className = 'log-in-message';
    loginMessageEl.textContent = `Hello ${username}! Make your peep`;

    logInEl.append(loginMessageEl);
  }

}

module.exports = ChitterView;
