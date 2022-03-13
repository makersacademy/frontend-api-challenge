(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        constructor() {
          this.peeps = null;
        }
        loadPeeps() {
          return this.peeps;
        }
        addPeep(peep) {
          this.peeps.push(peep);
        }
        setPeeps(peeps) {
          this.peeps = peeps;
        }
        reset() {
          this.peeps = [];
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        loadPeeps(peeps) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            peeps(data);
          });
        }
        postPeep(userId, sessionKey, peep, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Authorization": `Token token=${sessionKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ peep: { user_id: userId, body: peep } })
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
        startChitterSession(handle, password, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ session: { handle, password } })
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
        createChitterUser(handle, password, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: { handle, password } })
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.showCreateChitterUser();
          this.showSessionLogOn();
          this.api.loadPeeps((peepData) => {
            this.displayPeeps(peepData);
          });
          document.getElementById("post-peep-button").disabled = true;
          document.querySelector("#post-peep-button").addEventListener("click", () => {
            const peepInputEl = document.querySelector("#peep-input").value;
            this.addPeep(peepInputEl);
            document.querySelector("#peep-input").value = "";
          });
        }
        displayPeeps(peepData) {
          document.querySelectorAll(".peep").forEach((element) => {
            element.remove();
          });
          peepData.forEach((peep) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = peep.body + " by " + peep.user.handle;
            peepEl.className = "peep";
            this.mainContainerEl.append(peepEl);
          });
        }
        startSession() {
          this.localStorage.clear();
          const inputHandleEl = document.getElementById("handle");
          const inputPasswordEl = document.getElementById("password");
          localStorage.setItem("handle", inputHandleEl.value);
          this.api.startChitterSession(inputHandleEl.value, inputPasswordEl.value, (session) => {
            this.setLocalStorage(session);
          });
          this.hideSessionLogOn();
          this.hideCreateChitterUser();
          document.getElementById("post-peep-button").disabled = false;
        }
        addPeep(peepInputEl) {
          const userId = localStorage.getItem("user-id");
          const sessionKey = localStorage.getItem("session-key");
          this.api.postPeep(userId, sessionKey, peepInputEl, (response) => {
            this.api.loadPeeps((peepData) => {
              this.displayPeeps(peepData);
            });
          });
        }
        createChitterUser() {
          const inputHandleEl = document.getElementById("new-user-handle");
          const inputPasswordEl = document.getElementById("new-user-password");
          this.api.createChitterUser(inputHandleEl.value, inputPasswordEl.value, (session) => {
            document.getElementById("handle").value = inputHandleEl.value;
            document.getElementById("password").value = inputPasswordEl.value;
            this.startSession();
          });
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
          submitButtonEl.addEventListener("click", (element) => {
            element.preventDefault();
            this.createChitterUser();
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
          submitButtonEl.setAttribute("value", "Log On");
          submitButtonEl.addEventListener("click", (element) => {
            element.preventDefault();
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

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterApi = require_chitterApi();
  var ChitterView = require_chitterView();
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
  console.log("The Chitter app is running");
})();
