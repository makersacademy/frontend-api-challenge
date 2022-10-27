class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.user = {};
    this.loginButtonEl = document.querySelector('button#user-login');
    this.newPeepButtonEl = document.querySelector('button#submit-peep');

    this.loginButtonEl.addEventListener('click', () => {
      const username = document.querySelector('#username');
      const password = document.querySelector('#password');
      this.login(username.value, password.value);
    })

    this.newPeepButtonEl.addEventListener('click', () => {
      const peep = document.querySelector('#new-peep');
      this.addPeep(peep.value);
    })
  }

  displayPeeps() {
    this.model.getPeeps().forEach((peep) => {
      this.createPeepEl(peep.id);
      this.createUserEl(peep.user.handle, peep.id);
      this.createMessageEl(peep.body, peep.id);
      this.createTimeEl(peep.created_at.substr(0,19), peep.id);
      // this.createUpdatedEl(peep.updated_at, peep.id);
      // this.createLikesEl(peep.likes, peep.id);
    });
  }

  displayPeepsFromApi() {
    this.api.loadPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    })
  }

  createPeepEl(id) {
    const peepEl = document.createElement('div');
    peepEl.className = 'peeps';
    peepEl.id = `message_${id}`
    document.querySelector('div#main-container').append(peepEl);
  }

  createMessageEl(message, id) {
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    messageEl.innerText = message;
    document.querySelector('div#message_' + id).appendChild(messageEl);
  }

  createUserEl(user, id) {
    const userEl = document.createElement('div');
    userEl.className = 'user';
    userEl.innerText = `${user} wrote: `;
    document.querySelector('div#message_' + id).appendChild(userEl);
  }

  createTimeEl(time, id) {
    const timeEl = document.createElement('div');
    timeEl.className = 'time_created';
    timeEl.innerText = `Created at: ${time.substr(0,10)} ${time.substr(11,5)}`;
    document.querySelector('div#message_' + id).appendChild(timeEl);
  }

  // createLikesEl(likes, id) {
  //   const likesEl = document.createElement('button');
  //   likesEl.className = 'likes';
  //   likesEl.innerText = `likes = ${likes.length}`;
  //   document.querySelector('div#message_' + id).appendChild(likesEl);
  // }

  login(username, password) {
    this.api.login(username, password, (data) => {
      this.user.username = username;
      this.user.user_id = data.user_id;
      this.user.session_key = data.session_key;
      this.successfullLogin();
    })
  }

  successfullLogin() {
    document.querySelector('#username').remove();
    document.querySelector('#password').remove();
    document.querySelector('#user-login').remove();
    const loginMessageEl = document.createElement('div');
    loginMessageEl.innerText = `${this.user.username} has logged in`;
    loginMessageEl.id = 'logged-in-message';
    document.querySelector('#login').append(loginMessageEl);
  }

  addPeep(peep) {
    this.api.newPeep(peep, this.user.session_key, this.user.user_id, (data) => {
      console.log(data);
      document.querySelector('#new-peep').value = '';
      this.clearDisplay();
      this.displayPeepsFromApi();
    });
  }

  clearDisplay() {
    const arrayPeeps = document.querySelectorAll('.peeps');
    Array.from(arrayPeeps).forEach(peep => {
      peep.remove();
    });
  }
}

module.exports = ChitterView;