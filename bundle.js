(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        loadPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((peeps) => callback(peeps));
        }
        addUser(username, password, callback) {
          const data = { "user": { "handle": username, "password": password } };
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then((response) => response.json()).then((data2) => {
            callback(data2);
          });
        }
        login(username, password, callback) {
          const data = { "session": { "handle": username, "password": password } };
          fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(data)
          }).then((response) => response.json()).then((data2) => {
            callback(data2);
          });
        }
        addPeep(sessionKey, sessionID, peep, callback) {
          const data = { "peep": { "user_id": sessionID, "body": peep } };
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Authorization": `Token token=${sessionKey}`,
              "Content-type": "application/json"
            },
            body: JSON.stringify(data)
          }).then((response) => response.json()).then((data2) => {
            callback(data2);
          });
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        addSessionID(userID) {
          this.userID = userID;
        }
        addSessionKey(key) {
          this.key = key;
        }
        sessionKey() {
          return this.key;
        }
        sessionID() {
          return this.userID;
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(api2, model2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.signUpContainer = document.querySelector("#sign-up-container");
          this.api = api2;
          this.model = model2;
          this.signUpButton = document.querySelector("#sign-up");
          this.addPeepContainer = document.querySelector("#add-a-peep");
          this.loginContainer = document.querySelector("#login-container");
          this.loginButton = document.querySelector("#login-button");
          this.signUpButton.addEventListener("click", () => {
            this.#signUp();
          });
          this.loginButton.addEventListener("click", () => {
            this.#login();
          });
        }
        displayPeeps() {
          let currentPeeps = document.querySelectorAll("div.peep");
          currentPeeps.forEach((peep) => {
            peep.remove();
          });
          this.api.loadPeeps((peeps) => {
            peeps.forEach((peep) => {
              this.#formatAndDisplayPeep(peep);
            });
          });
        }
        displayAddPeep() {
          const peepForm = document.createElement("div");
          this.#createElementsForPeepform(peepForm, (addPeepButton, peepInput) => {
            this.addPeepContainer.append(peepForm);
            addPeepButton.addEventListener("click", () => {
              const sessionID = this.model.sessionID();
              const sessionKey = this.model.sessionKey();
              let peep = peepInput.value;
              this.api.addPeep(sessionKey, sessionID, peep, (response) => {
                if (response.body === peepInput.value) {
                  console.log("it's a success");
                  peep = "";
                  this.displayPeeps();
                }
              });
            });
          });
        }
        #signUp() {
          console.log("you clicked sign up");
          let newUserHandle = document.querySelector("#username-input");
          let newPassword = document.querySelector("#password-input");
          this.api.addUser(newUserHandle.value, newPassword.value, (response) => {
            newUserHandle.value = "";
            newPassword.value = "";
            let approvedUserName = response.handle;
            const welcomeMessage = document.createElement("p");
            welcomeMessage.innerText = `Welcome to Chitter, @${approvedUserName}!`;
            welcomeMessage.id = "welcome-message";
            this.signUpContainer.append(welcomeMessage);
            this.displayAddPeep();
            this.displayPeeps();
          });
        }
        #login() {
          let loginUsername = document.querySelector("#login-username");
          let loginPassword = document.querySelector("#login-password");
          this.api.login(loginUsername.value, loginPassword.value, (response) => {
            this.model.addSessionID(response.user_id);
            this.model.addSessionKey(response.session_key);
            const loginMessage = document.createElement("p");
            loginMessage.id = "login-message";
            loginMessage.innerText = `Welcome back, @${loginUsername.value}`;
            this.loginContainer.append(loginMessage);
            this.displayAddPeep();
            this.displayPeeps();
          });
        }
        #formatAndDisplayPeep(peep) {
          let div = document.createElement("div");
          div.className = "peep";
          div.innerText = peep.body;
          let peepDetails = document.createElement("p");
          let time = this.#formatTime(peep.created_at);
          peepDetails.innerText = `@${peep.user.handle} || ${time}`;
          peepDetails.className = "peep-details";
          div.append(peepDetails);
          console.log(div);
          this.mainContainerEl.append(div);
        }
        #formatTime(timestamp) {
          const year = timestamp.substr(0, 4);
          const month = timestamp.substr(5, 2);
          const day = timestamp.substr(8, 2);
          const time = timestamp.substr(11, 5);
          return `${time} ${day}/${month}/${year}`;
        }
        #createElementsForPeepform(peepForm, callback) {
          const header = document.createElement("p");
          header.id = "peep-header";
          header.innerText = "Share your peep";
          peepForm.append(header);
          const peepInput = document.createElement("input");
          peepInput.type = "text";
          peepInput.id = "peep-input";
          peepInput.placeholder = "What's peeping?";
          peepForm.append(peepInput);
          const addPeepButton = document.createElement("button");
          addPeepButton.innerHTML = "Peep";
          addPeepButton.id = "add-peep-button";
          peepForm.append(addPeepButton);
          callback(addPeepButton, peepInput);
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterApi = require_chitterApi();
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  console.log("The Chitter app is running");
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(api, model);
})();
