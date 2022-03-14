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
          this.peeps = [];
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(model2, api2) {
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.submitButtonEl = document.querySelector("#submit");
          this.sessionSignIn();
          this.submitButtonEl.disabled = true;
          this.api.loadPeep((peeps) => {
            this.displayPeeps(peeps);
          });
          this.submitButtonEl.addEventListener("click", () => {
            this.addNewPeep();
          });
        }
        addNewPeep() {
          const peepEl = document.querySelector("#peep-input");
          const peepElValue = peepEl.value;
          const userId = localStorage.getItem("user-id");
          const sessionKey = localStorage.getItem("session-key");
          this.api.createPeep(peepElValue, userId, sessionKey, (response) => {
            this.api.loadPeep((peeps) => {
              this.displayPeeps(peeps);
            });
          });
          peepEl.value = "";
        }
        displayPeeps(peeps) {
          document.querySelectorAll(".peep").forEach((element) => {
            element.remove();
          });
          peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = peep.body + " by " + peep.user.handle;
            peepEl.className = "peep";
            this.mainContainerEl.append(peepEl);
          });
        }
        sessionSignIn() {
          const signInFormEl = document.createElement("form");
          signInFormEl.id = "signin-container";
          const handleInputEl = document.createElement("input");
          handleInputEl.id = "handle";
          handleInputEl.setAttribute("type", "text");
          handleInputEl.setAttribute("placeholder", "handle");
          const passwordInputEl = document.createElement("input");
          passwordInputEl.id = "password";
          passwordInputEl.setAttribute("type", "password");
          passwordInputEl.setAttribute("placeholder", "password");
          const submitButtonEl = document.createElement("input");
          submitButtonEl.id = "signin";
          submitButtonEl.setAttribute("type", "submit");
          submitButtonEl.setAttribute("value", "Sign In");
          submitButtonEl.addEventListener("click", (e) => {
            e.preventDefault();
            this.startSession();
          });
          signInFormEl.appendChild(handleInputEl);
          signInFormEl.appendChild(passwordInputEl);
          signInFormEl.appendChild(submitButtonEl);
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
          this.api.startChitterSession(inputHandleEl.value, inputPasswordEl.value, (session) => {
            console.log("SESSION");
            console.log(session);
            this.setLocalStorage(session);
          });
        }
        setLocalStorage(session) {
          localStorage.setItem("user-id", session.user_id);
          localStorage.setItem("session-key", session.session_key);
          this.hideSessionSignIn();
          this.submitButtonEl.disabled = false;
        }
      };
      module.exports = ChitterView2;
    }
  });

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        loadPeep(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createPeep(peep, userId, sessionKey, callback) {
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
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => {
            alert("Your handle or password is incorrect");
          });
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var ChitterApi = require_chitterApi();
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
})();
