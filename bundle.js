(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        getChitterInfo(chitterName, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
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
        constructor() {
          this.chitterInfo = null;
        }
        setChitterInfo(chitterInfo) {
          this.chitterInfo = chitterInfo;
        }
        getChitterInfo() {
          return this.chitterInfo;
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
          this.model = model2;
          this.api = api2;
          this.peepsContainerEl = document.querySelector("#peeps-container");
          const submitButtonEl = document.querySelector("#submit-button");
          submitButtonEl.addEventListener("click", () => {
            const chitterName = "dummy";
            this.api.getChitterInfo(chitterName, (chitterData) => {
              this.display(chitterData);
            });
          });
        }
        display(data) {
          let brAElem = document.createElement("br");
          brAElem.style.backgroundColor = "#ffffff";
          brAElem.style.height = "2px";
          let spaceDiv = document.createElement("div");
          spaceDiv.append(brAElem);
          spaceDiv.innerText = brAElem;
          spaceDiv.style.height = "2px";
          data.forEach((peep) => {
            let peepDiv;
            peepDiv = this.setupPeep(peep);
            this.peepsContainerEl.append(peepDiv);
            this.peepsContainerEl.append(spaceDiv);
          });
        }
        setupPeep(peep) {
          let brElem = document.createElement("br");
          let span1Elem = document.createElement("span");
          span1Elem.innerText = peep.user.id;
          span1Elem.style.float = "left";
          span1Elem.style.width = "50.00%";
          span1Elem.style.textAlign = "left";
          let span2Elem = document.createElement("span");
          span2Elem.innerText = peep.updated_at;
          span2Elem.style.float = "right";
          span2Elem.style.width = "50.00%";
          span2Elem.style.textAlign = "right";
          span2Elem.style.fontWeight = "normal";
          let span3Elem = document.createElement("span");
          span3Elem.innerText = brElem;
          span3Elem.innerText = "";
          span3Elem.append(brElem);
          let span4Elem = document.createElement("span");
          span4Elem.innerText = peep.body;
          span4Elem.style.fontFamily = "Times New Roman";
          span4Elem.style.fontSize = "15px";
          span4Elem.style.fontWeight = "normal";
          let divElem = document.createElement("div");
          divElem.style.backgroundColor = "#ffe6ff";
          divElem.style.borderRadius = "15px";
          divElem.style.padding = "15px";
          divElem.append(span1Elem);
          divElem.append(span2Elem);
          divElem.append(span3Elem);
          divElem.append(brElem);
          divElem.append(span4Elem);
          divElem.append(brElem);
          return divElem;
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterApi = require_chitterApi();
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
})();
