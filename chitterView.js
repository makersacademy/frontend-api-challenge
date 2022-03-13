class ChitterView {
  
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    this.showCreateChitterUser();
    this.showSessionLogOn();

    this.api.loadPeeps(peepData => {
      this.displayPeeps(peepData);
    });

    document.getElementById('post-peep-button').disabled = true;

    document.querySelector('#post-peep-button').addEventListener('click', () => {
      const peepInputEl = document.querySelector('#peep-input').value;
      this.addPeep(peepInputEl);
      document.querySelector('#peep-input').value = "";
    });

  }

  displayPeeps(peepData) {

   document.querySelectorAll('.peep').forEach(element => {
      element.remove();
    });

    // const peeps = this.model.loadPeeps()

    // For each peep, create and append a new element on the main container
    peepData.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.innerText = peep.body + " by " + peep.user.handle;
      peepEl.className = 'peep';
      this.mainContainerEl.append(peepEl);
    })

  }

  startSession() {

    this.localStorage.clear();
    const inputHandleEl = document.getElementById("handle");
    const inputPasswordEl = document.getElementById("password");
    localStorage.setItem("handle", inputHandleEl.value)

    this.api.startChitterSession(inputHandleEl.value, inputPasswordEl.value, (session) =>{
      this.setLocalStorage(session)
    })

    // this.showAddPeep();
    this.hideSessionLogOn();
    this.hideCreateChitterUser();
    document.getElementById('post-peep-button').disabled = false;

  }
  
  addPeep(peepInputEl) {

    const userId =  localStorage.getItem("user-id");
    const sessionKey = localStorage.getItem("session-key");

    this.api.postPeep(userId, sessionKey, peepInputEl, (response) => {
      // this.model.addPeep(response)
      // this.displayPeeps(peepData)
      this.api.loadPeeps(peepData => {
        // console.log(peepData);
        this.displayPeeps(peepData);
      });
    })

    // peepInputEl.value = ""
  }

  createChitterUser(){

    const inputHandleEl = document.getElementById("new-user-handle");
    const inputPasswordEl = document.getElementById("new-user-password");

    this.api.createChitterUser(inputHandleEl.value, inputPasswordEl.value, (session) => {
      document.getElementById("handle").value  = inputHandleEl.value;
      document.getElementById("password").value = inputPasswordEl.value;
      this.startSession();
    })

  }

  setLocalStorage(session) {

    localStorage.setItem("user-id", session.user_id);
    localStorage.setItem("session-key", session.session_key);

  }

  hideSessionLogOn() {

    const formLogonEl = document.getElementById("logon-container");
    while (formLogonEl.firstChild) {
      formLogonEl.firstChild.remove();
    }

    this.mainContainerEl.removeChild(formLogonEl);
  }

  hideCreateChitterUser() {

    const formNewUserEl = document.getElementById("new-user-container");
    while (formNewUserEl.firstChild) {
      formNewUserEl.firstChild.remove();
    }

    this.mainContainerEl.removeChild(formNewUserEl);

  }

  showCreateChitterUser() {

    const newUserFormEl = document.createElement('form');
    newUserFormEl.id = 'new-user-container';

    const newUserHandleInputEl = document.createElement('input');
    newUserHandleInputEl.id = "new-user-handle";
    newUserHandleInputEl.setAttribute("type", "text");
    newUserHandleInputEl.setAttribute("placeholder", "handle");

    const newUserPasswordInputEl = document.createElement('input');
    newUserPasswordInputEl.id = "new-user-password";
    newUserPasswordInputEl.setAttribute("type", "password");
    newUserPasswordInputEl.setAttribute("placeholder", "Password");

    const submitButtonEl = document.createElement('input');
    submitButtonEl.id = "register";
    submitButtonEl.setAttribute("type", "submit");
    submitButtonEl.setAttribute("value", "Register");

    submitButtonEl.addEventListener("click", (element) =>  {
      element.preventDefault();
      this.createChitterUser();
    });   

    newUserFormEl.appendChild(newUserHandleInputEl);
    newUserFormEl.appendChild(newUserPasswordInputEl);
    newUserFormEl.appendChild(submitButtonEl);

    this.mainContainerEl.prepend(newUserFormEl);

  }

  showSessionLogOn() {

    const logOnFormEl = document.createElement('form');
    logOnFormEl.id = 'logon-container';

    const handleInputEl = document.createElement('input');
    handleInputEl.id = "handle";
    handleInputEl.setAttribute("type", "text");
    handleInputEl.setAttribute("placeholder", "handle");

    const passwordInputEl = document.createElement('input');
    passwordInputEl.id = "password";
    passwordInputEl.setAttribute("type", "password");
    passwordInputEl.setAttribute("placeholder", "Password");

    const submitButtonEl = document.createElement('input');
    submitButtonEl.id = "logon";
    submitButtonEl.setAttribute("type", "submit");
    submitButtonEl.setAttribute("value", "Log On");
    submitButtonEl.addEventListener("click", (element) =>  {
      element.preventDefault();
      this.startSession();
    }); 
    
    logOnFormEl.appendChild(handleInputEl);
    logOnFormEl.appendChild(passwordInputEl);
    logOnFormEl.appendChild(submitButtonEl);

    this.mainContainerEl.prepend(logOnFormEl);

  }

}

module.exports = ChitterView;