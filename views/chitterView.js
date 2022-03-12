class ChitterView{
  
  constructor(ChitterModel, api){
    this.model = ChitterModel;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    this.submitLogonEl = document.querySelector('#logon');

    this.submitLogonEl.addEventListener("click", (e) =>  {
      e.preventDefault()
      this.startSession()
    }); 

    this.registerEl = document.querySelector('#register');

    this.registerEl.addEventListener("click", (e) =>  {
      if (document.getElementById('new-user-container') == null){
        this.showCreateUser()
      }else{
        this.hideCreateUser()
      }
    }); 
  }

  showPeeps() {
    const peeps = this.model.getPeeps()

    document.querySelectorAll('.peep').forEach(e => e.remove());

    peeps.forEach(peep => {
      const peepEl = document.createElement('div')
      const paraEl = document.createElement('p')

      paraEl.innerText = peep.body + ' ' + peep.user.handle
      peepEl.className = 'peep'
      peepEl.appendChild(paraEl)

      if (peep.user.id == localStorage.getItem("user-id")){
        const imgDelEl = this.createDeleteElement(peep)
        peepEl.appendChild(imgDelEl)
      }

      this.mainContainerEl.append(peepEl)
    })
  }

  createDeleteElement(peep){
    const imgDelEl = document.createElement('img')
    imgDelEl.id = peep.id
    imgDelEl.src = "https://img.icons8.com/dotty/80/000000/filled-trash.png"
    imgDelEl.style.width = "20px"
    imgDelEl.style.height = "20px"
    imgDelEl.addEventListener("click", (e) =>  {
      this.deletePeep(peep.id)
    }); 
    return imgDelEl
  }

  startSession(){
    localStorage.clear()
    const inputHandleEl = document.getElementById("handle")
    const inputPasswordEl = document.getElementById("password")

    localStorage.setItem("handle", inputHandleEl.value)

    var promise = new Promise((resolve) => {
      this.api.startSession(inputHandleEl.value, inputPasswordEl.value, (session) =>{
        resolve(session)
      })
  
    })

    promise.then((session) => {
      this.setLocalStorage(session)
      this.showPeeps()
      this.showAddPeep();
      this.showWelcome();
      this.hideCreateUser();
    })

  }
  deletePeep(peepId){
    const sessionKey = localStorage.getItem("session-key");
    this.api.deletePeep(peepId, sessionKey) 
    this.model.removePeep(peepId)
    this.showPeeps()
  }

  addPeep(){
    const peepInputEl = document.getElementById('peep-input');
    const userId =  localStorage.getItem("user-id");
    const sessionKey = localStorage.getItem("session-key");

    this.api.createPeep(userId, sessionKey, peepInputEl.value, (response) => {
      this.model.addPeep(response)
      this.showPeeps()
    })

    peepInputEl.value = ""
  }

  createUser(){
    const inputHandleEl = document.getElementById("new-user-handle")
    const inputPasswordEl = document.getElementById("new-user-password")

    this.api.createUser(inputHandleEl.value, inputPasswordEl.value, (session) =>{
      console.log(session)
    })
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

  hideCreateUser(){
    const formNewUserEl = document.getElementById("new-user-container");
    if (formNewUserEl != null){
      while (formNewUserEl.firstChild) {
        formNewUserEl.firstChild.remove()
      }
      this.mainContainerEl.removeChild(formNewUserEl);
    }
  }

  showCreateUser(){
    if(document.getElementById('new-user-container') != null){
      return
    }
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
      this.createUser()
    });   

    newUserFormEl.appendChild(newUserHandleInputEl)
    newUserFormEl.appendChild(newUserPasswordInputEl)
    newUserFormEl.appendChild(submitButtonEl)

    this.mainContainerEl.prepend(newUserFormEl)
  }

}

module.exports = ChitterView;
