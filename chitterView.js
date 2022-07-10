class ChitterView {
  constructor(api) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.signUpContainer = document.querySelector('#sign-up-container');
    this.api = api
    this.signUpButton = document.querySelector('#sign-up');
    this.addPeepContainer = document.querySelector('#add-a-peep');

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

      }))
    })

  }


  displayPeeps() {
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

    this.addPeepContainer.append(peepForm);

  }
}

module.exports = ChitterView;