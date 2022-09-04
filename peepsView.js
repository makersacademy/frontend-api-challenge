class PeepsView {
  constructor(model, api) {
    this.userName = null;
    this.password = null;
    this.model = model;
    this.api = api;
    this.signUpEl = document.querySelector('#sign-up');
    this.mainContainerEl = document.querySelector('#main-container');

    this.signUpEl.addEventListener('click', () => {
      this.signUpForm();

    })
  }

  signUpForm() {
    const userNameEl = this.makeElement('#user', 'input', 'user-name');
    userNameEl.type = 'text';

    const passwordEl = this.makeElement('#user', 'input', 'password');
    passwordEl.type = 'text';


    // a rough workaround to the timing issue
    if (this.userName == null) {
      this.userName = document.querySelector('#user-name').value;
    }
    if (this.password == null) {
      this.password = document.querySelector('password').value;
    }


    const user = { user: { handle: this.userName, password: this.password } };

    const submitEl = this.makeElement('#user', 'button', 'create-user');
    submitEl.textContent = 'Submit';

    submitEl.addEventListener('click', () => {
      this.api.createUser(user);
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
