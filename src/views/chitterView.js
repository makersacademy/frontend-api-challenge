class ChitterView {
  constructor(model, client, user) {
    this.model = model;
    this.client = client;
    this.user = user;
    
    this.mainContainerEl = document.querySelector('#main-container');
    this.signUpEl = document.querySelector('#sign-up'); 
    this.signupButton = document.querySelector('#sign-up-message');

    this.signupButton.addEventListener('click', () => {
      const username = document.querySelector('#username-input').value;
      const password = document.querySelector('#password-input').value;

      this.signUp(username, password);
    });
  }

  addNewPeep(newPeep) {
    this.model.addNote(newPeep);
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

  signUp(username, password) {
    this.client.createUser(username, password, (response) => {
      const userId = response.id;
      const handle = response.handle;
      this.user.setUser(userId, handle);

      this.signUpMessage(handle);
    });
  }

  signUpMessage(handle) {
    document.querySelector('#username-input').value = '';
    document.querySelector('#password-input').value = '';

    const welcomeMessageEl = document.createElement('p');
    welcomeMessageEl.className = 'sign-up-message';
    welcomeMessageEl.textContent = `Welcome ${handle}, thanks for joining us!`
    this.signUpEl.append(welcomeMessageEl);
  }

}

module.exports = ChitterView;