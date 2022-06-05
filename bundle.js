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
          this.chits = [];
        }
        getChits() {
          return this.chits;
        }
        addChit(chit) {
          this.chits.push(chit);
        }
        reset() {
          this.chits = [];
        }
        setChits(chits2) {
          this.reset();
          chits2.forEach((chit) => this.chits.push(`${chit.user.handle}: ${chit.body}`));
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(model) {
          console.log(model);
          this.chitterModel = model;
          console.log(this.chitterModel);
          this.maincontainerEl = document.querySelector("#main-container");
          this.addChitButtonEl = document.querySelector("#add-chit-button");
          this.addChitButtonEl.addEventListener("click", () => {
            const textInput = document.querySelector("#text-input").value;
            this.addChit(textInput);
          });
        }
        addChit(input) {
          console.log("test10");
          this.chitterModel.addChit(input);
          console.log("test20");
          console.log("test30");
          this.displayChits();
        }
        displayChits() {
          console.log(this.chitterModel);
          document.querySelectorAll(".chit").forEach((chit) => {
            chit.remove();
          });
          this.chitterModel.getChits().forEach((chit) => {
            const chitEl = document.createElement("div");
            chitEl.innerText = chit;
            chitEl.className = "chit";
            this.maincontainerEl.append(chitEl);
            document.querySelector("#text-input").value = "";
          });
        }
        testChits() {
          this.maincontainerEl.append("hello");
        }
        testModel() {
          chits = this.chitterModel.chits;
          this.maincontainerEl.append(chits);
        }
      };
      module.exports = ChitterView2;
    }
  });

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        loadChits(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((jsonData) => {
            callback(jsonData);
          });
        }
        createChit(chit) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: `{"peep": {"user_id":1013, "body":"${chit}"}}`
          });
        }
        createUser() {
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: '{"user": {"handle":"stevie13", "password":"1234"}}'
          }).then((response) => response.json()).then((data) => {
            console.log("Success:", data);
          }).catch((error) => {
            console.error("Error:", error);
          });
        }
        createSession() {
          "https://chitter-backend-api-v2.herokuapp.com/sessions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify('{"session": {"handle":"stevie6", "password":"1234"}}')
          };
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var ChitterApi = require_chitterApi();
  var chitterModel = new ChitterModel();
  var api = new ChitterApi();
  var chitterView = new ChitterView(chitterModel, api);
  chitterModel.addChit("chitterModel.addChit works");
  chitterView.displayChits();
  api.createUser();
  api.loadChits((chits2) => {
    chitterModel.setChits(chits2);
    chitterView.displayChits();
    console.log("is console.log a callback here (index.js)?", chits2);
  });
})();
