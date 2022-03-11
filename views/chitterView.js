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
    const inputHandleEl = document.getElementById("handle")
    const inputPasswordEl = document.getElementById("password")

    localStorage.setItem("handle", inputHandleEl.value)

    this.api.startSession(inputHandleEl.value, inputPasswordEl.value, (session) =>{
      this.setLocalStorage(session)
    })

    this.showWelcome();
    this.hideSessionLogOn();
    this.showAddPeep();
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
    submitPeepEl.addEventListener("click", () =>  {
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

  // I plan to extract this to a session view/model
  displaySessionLogOn() {
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
    submitButtonEl.addEventListener("click", () =>  {
      this.startSession()
    }); 
    
    logOnFormEl.appendChild(handleInputEl)
    logOnFormEl.appendChild(passwordInputEl)
    logOnFormEl.appendChild(submitButtonEl)

    this.mainContainerEl.appendChild(logOnFormEl)
  }

}

module.exports = ChitterView;