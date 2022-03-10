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

  logon(){

  }

  // Will extract this to a session view/model
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
      this.logon()
    }); 

    logOnFormEl.appendChild(handleInputEl)
    logOnFormEl.appendChild(passwordInputEl)
    logOnFormEl.appendChild(submitButtonEl)

    this.mainContainerEl.append(logOnFormEl)
  }

}

module.exports = ChitterView;