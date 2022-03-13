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
        removePeep(peepId) {
          this.peeps.splice(this.peeps.findIndex((peep) => peep.id === peepId), 1);
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
          this.submitLogonEl = document.querySelector("#logon");
          this.submitLogonEl.addEventListener("click", (e) => {
            e.preventDefault();
            this.startSession();
          });
          this.logOffEl = document.querySelector("#logoff");
          this.logOffEl.addEventListener("click", (e) => {
            localStorage.clear();
            this.hideAddPeep();
            this.hideWelcome();
            this.showPeeps();
          });
          this.modalEl = document.getElementById("registration-modal");
          this.registerEl = document.querySelector("#register");
          this.registerEl.addEventListener("click", (e) => {
            this.showRegisterModal();
          });
          this.spanEl = document.getElementsByClassName("close")[0];
          this.spanEl.addEventListener("click", () => {
            this.modalEl.style.display = "none";
          });
          window.addEventListener("click", (e) => {
            if (e.target == this.modalEl) {
              this.modalEl.style.display = "none";
            }
          });
          this.registerButtonEl = document.getElementById("create-user");
          this.registerButtonEl.addEventListener("click", (e) => {
            e.preventDefault();
            this.createUser();
            this.spanEl.click();
          });
        }
        showRegisterModal() {
          this.modalEl.style.display = "block";
        }
        showPeeps() {
          const peeps = this.model.getPeeps();
          document.querySelectorAll(".peep").forEach((e) => e.remove());
          peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            const paraEl = document.createElement("p");
            paraEl.innerText = peep.body + " " + peep.user.handle;
            peepEl.className = "peep";
            peepEl.appendChild(paraEl);
            if (peep.user.id == localStorage.getItem("user-id")) {
              const imgDelEl = this.createDeleteElement(peep);
              peepEl.appendChild(imgDelEl);
            }
            this.mainContainerEl.append(peepEl);
          });
        }
        createDeleteElement(peep) {
          const imgDelEl = document.createElement("img");
          imgDelEl.id = peep.id;
          imgDelEl.src = "https://img.icons8.com/dotty/80/000000/filled-trash.png";
          imgDelEl.style.width = "20px";
          imgDelEl.style.height = "20px";
          imgDelEl.addEventListener("click", (e) => {
            this.deletePeep(peep.id);
          });
          return imgDelEl;
        }
        startSession() {
          localStorage.clear();
          const inputHandleEl = document.getElementById("handle");
          const inputPasswordEl = document.getElementById("password");
          localStorage.setItem("handle", inputHandleEl.value);
          var promise = new Promise((resolve) => {
            this.api.startSession(inputHandleEl.value, inputPasswordEl.value, (session) => {
              resolve(session);
            });
          });
          promise.then((session) => {
            this.setLocalStorage(session);
            this.showPeeps();
            this.showAddPeep();
            this.showWelcome();
            inputHandleEl.value = "";
            inputPasswordEl.value = "";
          });
        }
        deletePeep(peepId) {
          const sessionKey = localStorage.getItem("session-key");
          this.api.deletePeep(peepId, sessionKey);
          this.model.removePeep(peepId);
          this.showPeeps();
        }
        addPeep() {
          const peepInputEl = document.getElementById("peep-input");
          const userId = localStorage.getItem("user-id");
          const sessionKey = localStorage.getItem("session-key");
          this.api.createPeep(userId, sessionKey, peepInputEl.value, (response) => {
            this.model.addPeep(response);
            this.showPeeps();
          });
          peepInputEl.value = "";
        }
        createUser() {
          const inputHandleEl = document.getElementById("new-user-handle");
          const inputPasswordEl = document.getElementById("new-user-password");
          this.api.createUser(inputHandleEl.value, inputPasswordEl.value, (session) => {
            console.log(session);
          });
          inputHandleEl.value = "";
          inputPasswordEl.value = "";
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
        hideWelcome() {
          const welcomeEl = document.getElementById("welcome");
          if (welcomeEl != null) {
            while (welcomeEl.firstChild) {
              welcomeEl.firstChild.remove();
            }
            this.mainContainerEl.removeChild(welcomeEl);
          }
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
        hideAddPeep() {
          const adPeepEl = document.getElementById("peep-container");
          if (adPeepEl != null) {
            while (adPeepEl.firstChild) {
              adPeepEl.firstChild.remove();
            }
            this.mainContainerEl.removeChild(adPeepEl);
          }
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
        async startSession(handle, password, callback) {
          let header = new Headers();
          header.set("content-type", "application/json");
          try {
            const payload = JSON.stringify({ session: { handle, password } });
            const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
              method: "POST",
              headers: header,
              body: payload
            });
            const json = await response.json();
            callback(json);
          } catch (error) {
            console.error("Error:", error);
          }
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
          const payload = JSON.stringify({ user: { handle, password } });
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: payload
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
        deletePeep(peepId, sessionKey) {
          fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`, {
            method: "DELETE",
            headers: {
              "Authorization": `Token token=${sessionKey}`
            }
          }).catch((error) => console.error("Error:", error));
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
  api.loadPeeps((peeps) => {
    model.setPeeps(peeps);
    view.showPeeps();
  });
})();
