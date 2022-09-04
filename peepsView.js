class PeepsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.signUpEl = document.querySelector('#sign-up');
    this.mainContainerEl = document.querySelector('#main-container');

    this.signUpEl.addEventListener('click', () => {
      this.signUpForm();

    })
  }

  signUpForm(callback) {
    let callbackFn = callback || (() => { })

    // callbackFn = console.log

    // const userNameEl = this.makeInput('#user', 'input', 'user-name')
    //   .then(result => callbackFn(result.value));

    // const passwordEl = this.makeInput('#user', 'input', 'password')
    //   .then(result => callbackFn(result.value));

    const submitEl = this.makeElement('#user', 'button', 'create-user')
    submitEl.textContent = 'Submit'

    const user = { user: { handle: 'user', password: 'secret' } }
    submitEl.addEventListener('click', () => {
      this.api.createUser(user);
    });

    console.log('here')
  }

  async makeInput(parent, type, id) {
    const El = document.createElement(type);
    El.id = id
    El.type = 'text'
    document.querySelector(parent).append(El)
    return El
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
