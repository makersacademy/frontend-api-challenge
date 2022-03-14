class ChitterView {

  constructor(model, api) {
    this.model = model;
    this.api = api;
    
    // new User
    const newUserButtonEl = document.querySelector('#new-user-button');
    newUserButtonEl.addEventListener("click", (button) => {
      button.preventDefault();
      this.createNewUser();
    });
    
    // Login
    const loginButtonEl = document.querySelector('#login-button');
    loginButtonEl.addEventListener("click", (button) => {
      button.preventDefault();
      this.loginUser();
    })
    
    //New Peep
    const peepButtonEl = document.querySelector('#new-peep-button');
    peepButtonEl.addEventListener("click", (button) => {
      button.preventDefault();
      this.addPeep()
    })
    
  };
  
  displayPeeps(peeps) {
    const feedContainerEl = document.querySelector('#feed-container');

    document.querySelectorAll('.peep').forEach(p => {
      p.remove()
    });

    peeps.forEach(peep => {
      const peepEl = document.createElement('feed')
      const br = document.createElement('br');
      peepEl.innerText = `${peep.body}, by ${peep.user.handle}`
      peepEl.className = 'peep';
      feedContainerEl.append(peepEl)
      feedContainerEl.append(br)
    })
  }

  createNewUser() {
    const newHandleEl = document.getElementById("new-handle-input")
    const newPasswordEl = document.getElementById("new-password-input")
  
    this.api.createUser(newHandleEl.value, newPasswordEl.value, data => {
      console.log(data)
    });

    this.api.createSession(newHandle)
  }

  loginUser() {
    const handleEl = document.getElementById("handle-input")
    const passwordEl = document.getElementById("password-input")
  
    this.api.createSession(handleEl.value, passwordEl.value, data => {
      sessionStorage.userId = data.user_id
      sessionStorage.sessionKey = data.session_key
    });
  }

  addPeep() {
    const peepEl = document.getElementById("new-peep")
    console.log(sessionStorage.userId)

    this.api.postPeep(sessionStorage.userId, sessionStorage.sessionKey, peepEl.value, data => {
      this.api.loadPeeps(data => {
        this.displayPeeps(data);
      });
    })

  }
}

module.exports = ChitterView;