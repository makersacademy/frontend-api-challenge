class ChitterView {
  constructor(model, api) {
   // this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.submitButtonEl = document.querySelector('#submit');
    this.sessionSignIn();
    this.submitButtonEl.disabled = true;

    this.api.loadPeep(peeps => {
      this.displayPeeps(peeps);
    });

    this.submitButtonEl.addEventListener('click', () => {
      this.addNewPeep();
    });
    } 

    addNewPeep() {
      //console.log("ADD NEW PEEP");
      const peepEl = document.querySelector('#peep-input');
      const peepElValue = peepEl.value;
      const userId = localStorage.getItem('user-id');
      const sessionKey = localStorage.getItem('session-key');
      this.api.createPeep(peepElValue, userId, sessionKey,(response) =>{
        this.api.loadPeep(peeps => {
            this.displayPeeps(peeps);
        });
      });
      peepEl.value = '';
    };

    displayPeeps(peeps) { 
      document.querySelectorAll('.peep').forEach(element => {
        element.remove();
      });
       peeps.forEach(peep => {
          const peepEl = document.createElement('div')
          peepEl.innerText = peep.body + ' by ' + peep.user.handle;
          peepEl.className = 'peep';
         this.mainContainerEl.append(peepEl);
       });
    }

    sessionSignIn() {
      const signInFormEl = document.createElement('form');
      signInFormEl.id = 'signin-container';
  

      const handleInputEl = document.createElement('input');
      handleInputEl.id = "handle";
      handleInputEl.setAttribute("type", "text");
      handleInputEl.setAttribute("placeholder", "handle");
  

      const passwordInputEl = document.createElement('input');
      passwordInputEl.id = "password";
      passwordInputEl.setAttribute("type", "password");
      passwordInputEl.setAttribute("placeholder", "password");
  
      const submitButtonEl = document.createElement('input');
      submitButtonEl.id = "signin";
      submitButtonEl.setAttribute("type", "submit");
      submitButtonEl.setAttribute("value", "Sign In");
      submitButtonEl.addEventListener("click", (e) =>  {
        e.preventDefault();
        this.startSession();
       
      }); 
      signInFormEl.appendChild(handleInputEl);
      signInFormEl.appendChild(passwordInputEl);
      signInFormEl.appendChild(submitButtonEl);
      // insert before the first child element
      this.mainContainerEl.prepend(signInFormEl);
    }


    hideSessionSignIn() {
      const formSigninEl = document.getElementById("signin-container");
      while (formSigninEl.firstChild) {
        formSigninEl.firstChild.remove();
      }
      this.mainContainerEl.removeChild(formSigninEl);
    }

    startSession() {
      localStorage.clear();
      const inputHandleEl = document.getElementById("handle");
      const inputPasswordEl = document.getElementById("password");
      localStorage.setItem("handle", inputHandleEl.value);
      localStorage.setItem("password", inputPasswordEl.value);
      this.api.startChitterSession(inputHandleEl.value, inputPasswordEl.value, (session) =>{
        console.log("SESSION");
        console.log(session);
        this.setLocalStorage(session) 
      })
    }

  
    setLocalStorage(session) {
      localStorage.setItem("user-id", session.user_id);
      localStorage.setItem("session-key", session.session_key);
      this.hideSessionSignIn();
      this.submitButtonEl.disabled = false;
    }
  }
  
  module.exports = ChitterView;
  