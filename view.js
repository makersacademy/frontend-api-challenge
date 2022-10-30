class View {
  constructor(peepModel, userModel, client) {
    this.peepModel = peepModel;
    this.userModel = userModel;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');

    this.showSignupForm();
    this.closeSignupForm();

    this.showSigninForm();
    this.closeSigninForm();

    this.showPeepForm();
    this.closePeepForm();

    this.submitNewUser();
    this.submitExistingUser();
    this.submitPeep();
  }

  // USER SESSION DEPENDABLE ELEMENTS - MAYBE LATER
  changeElements = () => {
    if (this.userModel.isUserLoggedIn()) {
      document.querySelector('#welcome-user').textContent = this.userModel.username;
      document.querySelector('#show-peepform').style.display = 'block';
    }
  }

  // USER SESSION DEPENDABLE ELEMENTS ENDS

  // VIEWING ALL PEEPS
  displayPeepsFromApi = () => {
    this.client.loadPeeps((peeps) => {
      this.peepModel.setPeeps(peeps);
      this.displayPeeps();
    })
  }

  displayPeeps = () => {
    const allPeeps = this.peepModel.getPeeps();
    console.log(allPeeps); // remove later

    allPeeps.forEach(peep => {
      const cardTemplate = document.getElementById("peep-template");
      const div = cardTemplate.content.cloneNode(true);
      div.getElementById('user-name').textContent = peep.user.handle;
      div.getElementById('time').textContent = this.timeFormatted(peep.created_at);
      div.getElementById('date').textContent = this.dateFormatted(peep.created_at);
      div.getElementById('peep-content').textContent = peep.body;
      div.getElementById('likes-count').textContent = peep.likes.length;
      this.mainContainerEl.append(div);    
    });
  }

  dateFormatted = (createdAt) => {
    return createdAt.substr(0,10);
  }
  
  timeFormatted = (createdAt) => {
    return createdAt.substr(11,5);
  }
  // VIEWING ALL PEEPS ENDS

  //SIGN UP
  showSignupForm = () => {
    document.querySelector('#show-signup').addEventListener("click", () => {
      document.querySelector(".popup-signup").classList.add("active");
      document.querySelector("#form-background").style.display = 'block';
    });
  }

  closeSignupForm = () => {
    document.querySelector('.popup-signup .close-btn-signup').addEventListener("click", () => {
      document.querySelector(".popup-signup").classList.remove("active");
      document.querySelector("#form-background").style.display = 'none';
      this.resetSignupMessage();
    });
  }

  submitNewUser = () => {
    const signupButton = document.querySelector('#submit-new-user-button');

    signupButton.addEventListener('click', () => {
      const username = document.querySelector('.signup-form-element #username');
      const password = document.querySelector('.signup-form-element #password');

      this.client.createUser(username.value, password.value, (message) => {
        this.resetSignupMessage();
        username.value = '';
        password.value = '';
        this.displaySignupStatus(message);
      })
    })
  }

  displaySignupStatus = (message) => {
    const signupForm = document.querySelector('.signup-form')
    
    const messageTemplate = document.querySelector("#signup-message").content.cloneNode(true);
    
    if (message.id === undefined) {
      messageTemplate.querySelector('#status-signup-message').textContent = 'Incorrect input: ' + message.handle;
    } else {
      messageTemplate.querySelector('#status-signup-message').textContent = `User ${message.handle} was successfully created!`;
      messageTemplate.querySelector('#status-signup-message').style.color = 'green';
    }

    signupForm.append(messageTemplate);
  }

  resetSignupMessage = () => {
    if (document.querySelector("#status-signup-message") != null) {
      document.querySelector("#status-signup-message").remove();
    }
  }
  //SIGN UP ENDS

  // SIGN IN
  showSigninForm = () => {
    document.querySelector('#show-signin').addEventListener("click", () => {
      document.querySelector(".popup-signin").classList.add("active");
      document.querySelector("#form-background").style.display = 'block';
    });
  }

  closeSigninForm = () => {
    document.querySelector('.popup-signin .close-btn-signin').addEventListener("click", () => {
      document.querySelector(".popup-signin").classList.remove("active");
      document.querySelector("#form-background").style.display = 'none';
      this.resetSigninMessage();
    });
  }

  submitExistingUser = () => {
    const signinButton = document.querySelector('#submit-existing-user-button');

    signinButton.addEventListener('click', () => {
      const username = document.querySelector('.signin-form-element #username');
      const password = document.querySelector('.signin-form-element #password');

      this.client.signinUser(username.value, password.value, (outcome) => {
        this.resetSigninMessage(); 
        this.userModel.setUserDetails(outcome);
        this.displaySigninOutcome(username.value);
        username.value = '';
        password.value = '';
      });
    });
  }

  displaySigninOutcome = (username) => {
    if (this.userModel.isUserLoggedIn()) {
      // close the form and save username
      document.querySelector(".popup-signin").classList.remove("active");
      document.querySelector("#form-background").style.display = 'none';
      this.userModel.setUsername(username);

      this.changeElements();
    } else {
      this.displaySigninError();
    }
  }

  displaySigninError = () => {
    const signinForm = document.querySelector('.signin-form')
    const messageTemplate = document.querySelector("#signin-message").content.cloneNode(true);
    const error = this.userModel.getUserDetails();
    messageTemplate.querySelector('#status-signin-message').textContent = error.errors.password;
    signinForm.append(messageTemplate);
  }

  resetSigninMessage = () => {
    if (document.querySelector("#status-signin-message") != null) {
      document.querySelector("#status-signin-message").remove();
    }
  }
  // SIGN IN ENDS

  // PEEP FORM
  showPeepForm = () => {
    document.querySelector('#show-peepform').addEventListener("click", () => {
      document.querySelector(".popup-peep").classList.add("active");
      document.querySelector("#form-background").style.display = 'block';
    });
  }

  closePeepForm = () => {
    document.querySelector('.popup-peep .close-btn-peep').addEventListener("click", () => {
      document.querySelector(".popup-peep").classList.remove("active");
      document.querySelector("#form-background").style.display = 'none';
    });
  }

  submitPeep = () => {
    const peepButton = document.querySelector('#submit-peep-button');

    peepButton.addEventListener('click', () => {
      this.resetPeepMessage();
      const userId = this.userModel.getUserId();
      const sessionKey = this.userModel.getSessionKey();
      const peepBody = document.querySelector('.peep-form-element #peep');

      this.client.postPeep(userId, sessionKey, peepBody.value, (outcome) => {
        this.displayPeepOutcome(peepBody.value, outcome);
        peepBody.textContent = '';
      });
    });
  }

  displayPeepOutcome = (peepBody, outcome) => {
    if (peepBody === '') {
      this.displayPeepError(outcome);
    } else {
      // close the form and add Peep to feed
      document.querySelector(".popup-peep").classList.remove("active");
      document.querySelector("#form-background").style.display = 'none';

      this.addNewPeep(outcome);
    }
  }

  displayPeepError = (error) => {
    const peepForm = document.querySelector('.peep-form')
    const messageTemplate = document.querySelector("#peep-message").content.cloneNode(true);
    messageTemplate.querySelector('#status-peep-message').textContent = `Your peep ${error.body}!`;
    peepForm.append(messageTemplate);
  }

  resetPeepMessage = () => {
    if (document.querySelector("#status-peep-message") != null) {
      document.querySelector("#status-peep-message").remove();
    }
  }

  addNewPeep = (peep) => {
    const cardTemplate = document.getElementById("peep-template");
    const div = cardTemplate.content.cloneNode(true);
    div.getElementById('user-name').textContent = peep.user.handle;
    div.getElementById('time').textContent = this.timeFormatted(peep.created_at);
    div.getElementById('date').textContent = this.dateFormatted(peep.created_at);
    div.getElementById('peep-content').textContent = peep.body;
    div.getElementById('likes-count').textContent = peep.likes.length;
    this.mainContainerEl.prepend(div);   
  }
  // PEEP FORM ENDS

}

module.exports = View;