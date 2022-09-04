class PeepsView {
  constructor(model, api) {
    this.user_id = "";
    this.session_key = "";
    this.model = model;
    this.api = api;
    this.postEl = document.querySelector('#post');
    this.signUpEl = document.querySelector('#sign-up');
    this.signInEl = document.querySelector('#sign-in');
    this.mainContainerEl = document.querySelector('#main-container');

    this.postEl.addEventListener('click', () => {
      this.postPeepForm();
    })

    this.signUpEl.addEventListener('click', () => {
      this.signUpForm();
    })

    this.signInEl.addEventListener('click', () => {
      this.signInForm();
    })
  }

  postPeepForm() {
    const divEl = this.makeElement('#main-container', 'div', 'post-peep');

    const peepEl = this.makeElement('#post-peep', 'input', 'post-content');
    peepEl.type = 'text';

    const submitEl = this.makeElement('#post-peep', 'button', 'create-peep');
    submitEl.textContent = 'Submit';

    submitEl.addEventListener('click', () => {
      const peep = {
        peep: {
          user_id: this.user_id,
          body: document.querySelector('#post-content').value
        }
      }
      this.api.postPeep(this.session_key, peep, (response) => {
        console.log(response)
        const postForm = document.querySelectorAll('#post-peep');
        postForm.forEach(element => element.remove());
        this.displayFromApi()
      })
    })
  }

  signInForm() {
    const userNameEl = this.makeElement('#user', 'input', 'user-name');
    userNameEl.type = 'text';

    const passwordEl = this.makeElement('#user', 'input', 'password');
    passwordEl.type = 'text';

    const submitEl = this.makeElement('#user', 'button', 'create-session');
    submitEl.textContent = 'Submit';

    submitEl.addEventListener('click', () => {
      const session = {
        session: {
          handle: document.querySelector('#user-name').value,
          password: document.querySelector('#password').value
        }
      }

      this.api.loadSession(session, (response) => {
        this.user_id = response.user_id;
        this.session_key = response.session_key;
        const logins = document.querySelectorAll('#status');
        logins.forEach(login => login.remove());
        const statusEl = this.makeElement('#user', 'p', 'status');
        statusEl.textContent = `Logged in as User: ${response.user_id}`;
      })
    })
  }

  signUpForm() {
    const userNameEl = this.makeElement('#user', 'input', 'user-name');
    userNameEl.type = 'text';

    const passwordEl = this.makeElement('#user', 'input', 'password');
    passwordEl.type = 'text';

    const submitEl = this.makeElement('#user', 'button', 'create-user');
    submitEl.textContent = 'Submit';

    submitEl.addEventListener('click', () => {
      const user = {
        user: {
          handle: document.querySelector('#user-name').value,
          password: document.querySelector('#password').value
        }
      };
      this.api.createUser(user);
      // no success message at the moment
      this.displayFromApi();
    });
  }

  makeElement(parent, type, id) {
    const El = document.createElement(type);
    El.id = id
    document.querySelector(parent).append(El)
    return El
  }

  displayClear() {
    const peeps = document.querySelectorAll('div.peep');
    peeps.forEach(peep => peep.remove());
  }

  displayPeeps() {
    this.displayClear()
    this.model.getPeeps().forEach((peep) => {
      const titleEl = document.createElement('p');
      const peepEl = document.createElement('p');
      const divEl = document.createElement('div');
      divEl.className = 'peep';
      titleEl.textContent = `${peep.user.handle} - ${this.elapsedDays(peep.created_at)}`
      peepEl.textContent = peep.body;
      divEl.append(titleEl);
      divEl.append(peepEl);
      this.mainContainerEl.append(divEl);
    })
  }

  displayFromApi() {
    this.api.loadPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    })
  }

  elapsedDays(dateStr) {
    const milliseconds = (new Date) - (new Date(dateStr));
    return `${Math.floor(milliseconds / 86400000)}d`;
  }
}

module.exports = PeepsView;
