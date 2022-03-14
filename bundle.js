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
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createUser(handle, password, callback) {
          const dataString = JSON.stringify({ user: { handle, password } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: dataString
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
        createSession(handle, password, callback) {
          const dataString = JSON.stringify({ session: { handle, password } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: dataString
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
        postPeep(userId, sessionKey, peep, callback) {
          const dataString = JSON.stringify({ peep: { user_id: userId, body: peep } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Authorization": `Token token=${sessionKey}`,
              "Content-Type": "application/json"
            },
            body: dataString
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
        constructor(model, api2) {
          this.model = model;
          this.api = api2;
          const newUserButtonEl = document.querySelector("#new-user-button");
          newUserButtonEl.addEventListener("click", (button) => {
            button.preventDefault();
            this.createNewUser();
          });
          const loginButtonEl = document.querySelector("#login-button");
          loginButtonEl.addEventListener("click", (button) => {
            button.preventDefault();
            this.loginUser();
          });
          const peepButtonEl = document.querySelector("#new-peep-button");
          peepButtonEl.addEventListener("click", (button) => {
            button.preventDefault();
            this.addPeep();
          });
        }
        displayPeeps(peeps) {
          const feedContainerEl = document.querySelector("#feed-container");
          document.querySelectorAll(".peep").forEach((p) => {
            p.remove();
          });
          peeps.forEach((peep) => {
            const peepEl = document.createElement("feed");
            const br = document.createElement("br");
            peepEl.innerText = `${peep.body}, by ${peep.user.handle}`;
            peepEl.className = "peep";
            feedContainerEl.append(peepEl);
            feedContainerEl.append(br);
          });
        }
        createNewUser() {
          const newHandleEl = document.getElementById("new-handle-input");
          const newPasswordEl = document.getElementById("new-password-input");
          this.api.createUser(newHandleEl.value, newPasswordEl.value, (data) => {
            console.log(data);
          });
          this.api.createSession(newHandle);
        }
        loginUser() {
          const handleEl = document.getElementById("handle-input");
          const passwordEl = document.getElementById("password-input");
          this.api.createSession(handleEl.value, passwordEl.value, (data) => {
            sessionStorage.userId = data.user_id;
            sessionStorage.sessionKey = data.session_key;
          });
        }
        addPeep() {
          const peepEl = document.getElementById("new-peep");
          console.log(sessionStorage.userId);
          this.api.postPeep(sessionStorage.userId, sessionStorage.sessionKey, peepEl.value, (data) => {
            this.api.loadPeeps((data2) => {
              this.displayPeeps(data2);
            });
          });
        }
      };
      module.exports = ChitterView2;
    }
  });

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        constructor() {
          this.peeps = [];
        }
        getPeeps() {
          return this.peeps;
        }
        setPeeps(peeps) {
          this.peeps = peeps;
        }
        clearPeeps() {
          this.peeps = [];
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // index.js
  var ChitterApi = require_chitterApi();
  var ChitterView = require_chitterView();
  var ChitterModel = require_chitterModel();
  var api = new ChitterApi();
  var chitterModel = new ChitterModel();
  var chitterView = new ChitterView(chitterModel, api);
  api.loadPeeps((peeps) => {
    chitterView.displayPeeps(peeps);
  });
})();
