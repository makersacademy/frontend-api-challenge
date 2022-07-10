class ChitterView {
  constructor(api, model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.signUpContainer = document.querySelector('#sign-up-container');
    this.api = api;
    this.model = model;
    this.signUpButton = document.querySelector('#sign-up');
    this.addPeepContainer = document.querySelector('#add-a-peep');
    this.loginContainer = document.querySelector('#login-container');
    this.loginButton = document.querySelector('#login-button');


    this.signUpButton.addEventListener('click',() => {
      console.log('you clicked sign up');
      let newUserHandle = document.querySelector('#username-input');
      let newPassword = document.querySelector('#password-input');
      this.api.addUser(newUserHandle.value, newPassword.value, ((response) => {

        newUserHandle.value = "";
        newPassword.value = "";

        let approvedUserName = response.handle;

        const welcomeMessage = document.createElement('p');
        welcomeMessage.innerText = `Welcome to Chitter, @${approvedUserName}!`;
        welcomeMessage.id = 'welcome-message';
        this.signUpContainer.append(welcomeMessage);
        this.displayAddPeep();
        this.displayPeeps();
      }))
    })

    this.loginButton.addEventListener('click',() => {
      let loginUsername = document.querySelector('#login-username');
      let loginPassword = document.querySelector('#login-password');
      this.api.login(loginUsername.value, loginPassword.value, (response) => {
        this.model.addSessionID(response.user_id);
        this.model.addSessionKey(response.session_key);

        const loginMessage = document.createElement('p');
        loginMessage.id = 'login-message';
        loginMessage.innerText = `Welcome back, @${loginUsername.value}`;
        this.loginContainer.append(loginMessage);
        this.displayAddPeep();
        this.displayPeeps();
      })
    })

  }


  displayPeeps() {
    let currentPeeps = document.querySelectorAll('div.peep');
    currentPeeps.forEach((peep) => {
      peep.remove()
    })

    this.api.loadPeeps((peeps) => {
      peeps.forEach((peep) => {
        let div = document.createElement("div");
        div.className = "peep";
        div.innerText = peep.body;

        let peepDetails = document.createElement("p");
        let time = this.formatTime(peep.created_at);
        peepDetails.innerText = `@${peep.user.handle} || ${time}`;
        peepDetails.className = "peep-details";
        div.append(peepDetails);

        console.log(div);

        this.mainContainerEl.append(div);
      })
    })
  }

  formatTime(timestamp) {
    const year = timestamp.substr(0, 4);
    const month = timestamp.substr(5, 2);
    const day = timestamp.substr(8, 2);
    const time = timestamp.substr(11, 5);
    return `${time} ${day}/${month}/${year}`
  }

  displayAddPeep() {
    const peepForm = document.createElement('div');

    const header = document.createElement('p');
    header.id = 'peep-header'
    header.innerText = 'Share your peep';
    peepForm.append(header);

    const peepInput = document.createElement('input');
    peepInput.type = 'text';
    peepInput.id = 'peep-input';
    peepInput.placeholder = "What's peeping?";
    peepForm.append(peepInput);

    const addPeepButton = document.createElement('button');
    addPeepButton.innertext = 'Share'
    addPeepButton.id = 'add-peep-button';
    peepForm.append(addPeepButton);

    this.addPeepContainer.append(peepForm);

    addPeepButton.addEventListener('click',() => {
      const sessionID = this.model.sessionID();
      const sessionKey = this.model.sessionKey();

      let peep = peepInput.value;

      this.api.addPeep(sessionKey, sessionID, peep, (response) => {
        if (response.body === peepInput.value) {
          console.log("it's a success");
          peep = ""
          this.displayPeeps();
        }
      })
    })
  }
}

module.exports = ChitterView;