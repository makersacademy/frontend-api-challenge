class ChitterView{
  
  constructor(ChitterModel, api){
    this.model = ChitterModel;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayPeeps() {
    const peeps = this.model.getPeeps()

    document.querySelectorAll('.peep').forEach(e => e.remove());

    peeps.forEach(peep => {
      const peepEl = document.createElement('div')
      peepEl.innerText = peep.body
      peepEl.className = 'peep'
      this.mainContainerEl.append(peepEl)
    })
  }

  startSession(){
    localStorage.clear()
    const inputHandleEl = document.getElementById("handle")
    const inputPasswordEl = document.getElementById("password")

    localStorage.setItem("handle", inputHandleEl.value)

    this.api.startSession(inputHandleEl.value, inputPasswordEl.value, (session) =>{
      this.setLocalStorage(session)
    })

    this.showAddPeep();
    this.showWelcome();
    this.hideSessionLogOn();
   
  }
  
  addPeep(){
    const peepInputEl = document.getElementById('peep-input');
    const userId =  localStorage.getItem("user-id");
    const sessionKey = localStorage.getItem("session-key");

    this.api.createPeep(userId, sessionKey, peepInputEl.value, (response) => {
      this.model.addPeep(response)
      this.displayPeeps()
    })

    peepInputEl.value = ""
  }


  setLocalStorage(session){
    localStorage.setItem("user-id", session.user_id)
    localStorage.setItem("session-key", session.session_key) 
  }

  showWelcome(){
    const welcomeEl = document.createElement('div')
    welcomeEl.id = "welcome"
    this.mainContainerEl.prepend(welcomeEl)

    const welcomeTextEl = document.createElement('p')
    welcomeTextEl.id = 'welcomeText'
    welcomeEl.appendChild(welcomeTextEl)
    welcomeTextEl.innerText = 'Welcome ' + localStorage.getItem('handle')
  }

  showAddPeep(){
    const peepFormEl = document.createElement('form')
    peepFormEl.id = 'peep-container'

    const peepInputEl = document.createElement('input')
    peepInputEl.id = "peep-input"
    peepInputEl.setAttribute("type", "text")
    peepInputEl.setAttribute("placeholder", "peep here")

    const submitPeepEl = document.createElement('input')
    submitPeepEl.id = "peep-submit"
    submitPeepEl.setAttribute("type", "submit")
    submitPeepEl.setAttribute("value", "Peep")
    submitPeepEl.addEventListener("click", (e) =>  {
      e.preventDefault()
      this.addPeep()
    }); 

    peepFormEl.appendChild(peepInputEl)
    peepFormEl.appendChild(submitPeepEl)

    this.mainContainerEl.prepend(peepFormEl)

  }


  hideSessionLogOn(){
    const formLogonEl = document.getElementById("logon-container");
    while (formLogonEl.firstChild) {
      formLogonEl.firstChild.remove()
    }
    this.mainContainerEl.removeChild(formLogonEl);
  }

  hideCreateUser(){
    const formNewUserEl = document.getElementById("new-user-container");
    while (formNewUserEl.firstChild) {
      formNewUserEl.firstChild.remove()
    }
    this.mainContainerEl.removeChild(formNewUserEl);
  }

  showCreateUser(){
    const newUserFormEl = document.createElement('form')
    newUserFormEl.id = 'new-user-container'

    const newUserHandleInputEl = document.createElement('input')
    newUserHandleInputEl.id = "new-user-handle"
    newUserHandleInputEl.setAttribute("type", "text")
    newUserHandleInputEl.setAttribute("placeholder", "handle")

    const newUserPasswordInputEl = document.createElement('input')
    newUserPasswordInputEl.id = "new-user-password"
    newUserPasswordInputEl.setAttribute("type", "password")
    newUserPasswordInputEl.setAttribute("placeholder", "Password")

    const submitButtonEl = document.createElement('input')
    submitButtonEl.id = "register"
    submitButtonEl.setAttribute("type", "submit")
    submitButtonEl.setAttribute("value", "Register")
    submitButtonEl.addEventListener("click", (e) =>  {
      e.preventDefault()
      //this.createUser()
    });   

    newUserFormEl.appendChild(newUserHandleInputEl)
    newUserFormEl.appendChild(newUserPasswordInputEl)
    newUserFormEl.appendChild(submitButtonEl)

    this.mainContainerEl.prepend(newUserFormEl)
  }

  // I plan to extract this to a session view/model
  showSessionLogOn() {
    const logOnFormEl = document.createElement('form')
    logOnFormEl.id = 'logon-container'

    const handleInputEl = document.createElement('input')
    handleInputEl.id = "handle"
    handleInputEl.setAttribute("type", "text")
    handleInputEl.setAttribute("placeholder", "handle")

    const passwordInputEl = document.createElement('input')
    passwordInputEl.id = "password"
    passwordInputEl.setAttribute("type", "password")
    passwordInputEl.setAttribute("placeholder", "Password")

    const submitButtonEl = document.createElement('input')
    submitButtonEl.id = "logon"
    submitButtonEl.setAttribute("type", "submit")
    submitButtonEl.setAttribute("value", "Log on")
    submitButtonEl.addEventListener("click", (e) =>  {
      e.preventDefault()
      this.startSession()
    }); 
    
    logOnFormEl.appendChild(handleInputEl)
    logOnFormEl.appendChild(passwordInputEl)
    logOnFormEl.appendChild(submitButtonEl)

    this.mainContainerEl.prepend(logOnFormEl)
  }

}

module.exports = ChitterView;
