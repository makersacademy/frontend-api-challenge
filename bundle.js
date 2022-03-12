(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/chitterModel.js
  var require_chitterModel = __commonJS({
    "lib/chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        constructor() {
          this.peeps = [];
        }
        addPeep(peep) {
          this.peeps.unshift(peep);
        }
        getPeeps() {
          return this.peeps;
        }
        setPeeps(peeps) {
          this.peeps = peeps;
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // views/chitterView.js
  var require_chitterView = __commonJS({
    "views/chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(ChitterModel2, api2) {
          this.model = ChitterModel2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayPeeps() {
          const peeps = this.model.getPeeps();
          document.querySelectorAll(".peep").forEach((e) => e.remove());
          peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = peep.body;
            peepEl.className = "peep";
            this.mainContainerEl.append(peepEl);
          });
        }
        startSession() {
          localStorage.clear();
          const inputHandleEl = document.getElementById("handle");
          const inputPasswordEl = document.getElementById("password");
          localStorage.setItem("handle", inputHandleEl.value);
          this.api.startSession(inputHandleEl.value, inputPasswordEl.value, (session) => {
            this.setLocalStorage(session);
          });
          this.showAddPeep();
          this.showWelcome();
          this.hideSessionLogOn();
        }
        addPeep() {
          const peepInputEl = document.getElementById("peep-input");
          const userId = localStorage.getItem("user-id");
          const sessionKey = localStorage.getItem("session-key");
          this.api.createPeep(userId, sessionKey, peepInputEl.value, (response) => {
            this.model.addPeep(response);
            this.displayPeeps();
          });
          peepInputEl.value = "";
        }
        setLocalStorage(session) {
          localStorage.setItem("user-id", session.user_id);
          localStorage.setItem("session-key", session.session_key);
        }
        showWelcome() {
          const welcomeEl = document.createElement("div");
          welcomeEl.id = "welcome";
          this.mainContainerEl.prepend(welcomeEl);
          const welcomeTextEl = document.createElement("p");
          welcomeTextEl.id = "welcomeText";
          welcomeEl.appendChild(welcomeTextEl);
          welcomeTextEl.innerText = "Welcome " + localStorage.getItem("handle");
        }
        showAddPeep() {
          const peepFormEl = document.createElement("form");
          peepFormEl.id = "peep-container";
          const peepInputEl = document.createElement("input");
          peepInputEl.id = "peep-input";
          peepInputEl.setAttribute("type", "text");
          peepInputEl.setAttribute("placeholder", "peep here");
          const submitPeepEl = document.createElement("input");
          submitPeepEl.id = "peep-submit";
          submitPeepEl.setAttribute("type", "submit");
          submitPeepEl.setAttribute("value", "Peep");
          submitPeepEl.addEventListener("click", (e) => {
            e.preventDefault();
            this.addPeep();
          });
          peepFormEl.appendChild(peepInputEl);
          peepFormEl.appendChild(submitPeepEl);
          this.mainContainerEl.prepend(peepFormEl);
        }
        hideSessionLogOn() {
          const formLogonEl = document.getElementById("logon-container");
          while (formLogonEl.firstChild) {
            formLogonEl.firstChild.remove();
          }
          this.mainContainerEl.removeChild(formLogonEl);
        }
        hideCreateUser() {
          const formNewUserEl = document.getElementById("new-user-container");
          while (formNewUserEl.firstChild) {
            formNewUserEl.firstChild.remove();
          }
          this.mainContainerEl.removeChild(formNewUserEl);
        }
        showCreateUser() {
          const newUserFormEl = document.createElement("form");
          newUserFormEl.id = "new-user-container";
          const newUserHandleInputEl = document.createElement("input");
          newUserHandleInputEl.id = "new-user-handle";
          newUserHandleInputEl.setAttribute("type", "text");
          newUserHandleInputEl.setAttribute("placeholder", "handle");
          const newUserPasswordInputEl = document.createElement("input");
          newUserPasswordInputEl.id = "new-user-password";
          newUserPasswordInputEl.setAttribute("type", "password");
          newUserPasswordInputEl.setAttribute("placeholder", "Password");
          const submitButtonEl = document.createElement("input");
          submitButtonEl.id = "register";
          submitButtonEl.setAttribute("type", "submit");
          submitButtonEl.setAttribute("value", "Register");
          submitButtonEl.addEventListener("click", (e) => {
            e.preventDefault();
          });
          newUserFormEl.appendChild(newUserHandleInputEl);
          newUserFormEl.appendChild(newUserPasswordInputEl);
          newUserFormEl.appendChild(submitButtonEl);
          this.mainContainerEl.prepend(newUserFormEl);
        }
        showSessionLogOn() {
          const logOnFormEl = document.createElement("form");
          logOnFormEl.id = "logon-container";
          const handleInputEl = document.createElement("input");
          handleInputEl.id = "handle";
          handleInputEl.setAttribute("type", "text");
          handleInputEl.setAttribute("placeholder", "handle");
          const passwordInputEl = document.createElement("input");
          passwordInputEl.id = "password";
          passwordInputEl.setAttribute("type", "password");
          passwordInputEl.setAttribute("placeholder", "Password");
          const submitButtonEl = document.createElement("input");
          submitButtonEl.id = "logon";
          submitButtonEl.setAttribute("type", "submit");
          submitButtonEl.setAttribute("value", "Log on");
          submitButtonEl.addEventListener("click", (e) => {
            e.preventDefault();
            this.startSession();
          });
          logOnFormEl.appendChild(handleInputEl);
          logOnFormEl.appendChild(passwordInputEl);
          logOnFormEl.appendChild(submitButtonEl);
          this.mainContainerEl.prepend(logOnFormEl);
        }
      };
      module.exports = ChitterView2;
    }
  });

  // lib/chitterApi.js
  var require_chitterApi = __commonJS({
    "lib/chitterApi.js"(exports, module) {
      var ChitterApi = class {
        loadPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        startSession(handle, password, callback) {
          let header = new Headers();
          header.set("content-type", "application/json");
          const payload = JSON.stringify({ session: { handle, password } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
            method: "POST",
            headers: header,
            body: payload
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => {
            console.error("Error:", error);
          });
        }
        createPeep(userId, sessionKey, peep, callback) {
          const payload = JSON.stringify({ peep: { user_id: userId, body: peep } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Authorization": `Token token=${sessionKey}`,
              "Content-Type": "application/json"
            },
            body: payload
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
        createUser(handle, password, callback) {
          const payload = JSON.stringify({ user: { handle: `${handle}`, password: `${password}` } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: payload
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
      };
      module.exports = ChitterApi;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var ChittersApi = require_chitterApi();
  var api = new ChittersApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
  localStorage.clear();
  console.log(localStorage.getItem("user-id"));
  view.showSessionLogOn();
  view.showCreateUser();
  api.loadPeeps((peeps) => {
    model.setPeeps(peeps);
    view.displayPeeps();
  });
})();
