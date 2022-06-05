class ChitterView {

  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.userID = null;
    this.sessionKey = null;

    this.peepContainerEl = document.querySelector('#peep-container');
    this.loginButtonEl = document.querySelector('#login-button');
    this.loginButtonEl.addEventListener('click', () => {
      this.checkAuthorisation();
    });
  }

  importPeepsFromServer() {
    this.api.fetchPeeps(peeps => {
      console.log('Peeps retrieved from server:');
      console.log(peeps);
      this.model.loadPeeps(peeps);
      this.displayPeeps();
    })
  }

  displayPeeps() {
    let peeps = this.model.returnLoadedPeeps();
    peeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep.body;
      peepEl.className = 'peep';
      this.peepContainerEl.append(peepEl);
    });
  };

  checkAuthorisation() {
    let userHandle = document.querySelector('#handle').value;
    let userPassword = document.querySelector('#password').value;
    this.api.userAuthorisation(userHandle, userPassword, response => {
      this.userID = response.user_id;
      this.sessionKey = response.session_key;
      console.log(this.userID, this.sessionKey);
    });
  };

}

module.exports = ChitterView;
