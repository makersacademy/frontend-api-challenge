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
  }

  // USER SESSION DEPENDABLE ELEMENTS - MAYBE LATER
  // changeElements = () => {
  //   if (this.userModel.isUserLoggedIn()) {
  //     const userDetails = this.userModel.getUserDetails();
  //     document.querySelector('#welcome-user').textContent = `Welcome to Chitter ${userDetail.} &#128075;`
  //   }
  // }

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
        username.value = '';
        password.value = '';
        this.displaySigninOutcome(outcome);
      });
    });
  }

  displaySigninOutcome = () => {
    if (this.userModel.isUserLoggedIn()) {
      // close the form
      document.querySelector(".popup-signin").classList.remove("active");
      document.querySelector("#form-background").style.display = 'none';
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
  // PEEP FORM ENDS

}

module.exports = View;