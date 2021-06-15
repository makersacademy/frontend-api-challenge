(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/chitterController.js
  var require_chitterController = __commonJS({
    "src/chitterController.js"(exports, module) {
      var ChitterController2 = class {
        constructor(view) {
          this._view = view;
        }
        async getPeeps() {
          await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((peeps) => this._view.displayPeeps(peeps));
        }
        async getPeep(peepId) {
          await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`).then((response) => response.json()).then((peep) => this._view.displayPeep(peep));
        }
      };
      module.exports = ChitterController2;
    }
  });

  // src/chitterView.js
  var require_chitterView = __commonJS({
    "src/chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(rootDiv2) {
          this._rootDiv = rootDiv2;
        }
        displayPeeps(peeps) {
          this._clearRootDiv();
          const peepListItemElements = peeps.map((peep) => {
            return this._createPeepListItemElement(peep);
          });
          const peepUnorderedListElement = this._createPeepUnorderedListElement(peepListItemElements);
          this._rootDiv.append(peepUnorderedListElement);
        }
        displayPeep(peep) {
          this._clearRootDiv();
          const peepListItemElement = this._createPeepListItemElement(peep);
          this._rootDiv.append(peepListItemElement);
        }
        _createPeepListItemElement(peep) {
          const handle = document.createElement("p");
          const body = document.createElement("p");
          const createdAt = document.createElement("p");
          const likes = document.createElement("p");
          const peepListItemElement = document.createElement("li");
          const peepAnchorElement = document.createElement("a");
          handle.append(`${peep.user.handle}`);
          body.append(`${peep.body}`);
          createdAt.append(`${peep.created_at}`);
          likes.append(`${peep.likes.length}`);
          peepAnchorElement.href = `#${peep.id}`;
          peepAnchorElement.append(handle, body, createdAt, likes);
          peepListItemElement.append(peepAnchorElement);
          return peepListItemElement;
        }
        _createPeepUnorderedListElement(peepListItemElements) {
          const peepUnorderedListElement = document.createElement("ul");
          peepUnorderedListElement.append(...peepListItemElements);
          return peepUnorderedListElement;
        }
        _clearRootDiv() {
          this._rootDiv.innerHTML = "";
        }
      };
      module.exports = ChitterView2;
    }
  });

  // src/main.js
  var ChitterController = require_chitterController();
  var ChitterView = require_chitterView();
  var rootDiv = document.getElementById("root");
  var chitterView = new ChitterView(rootDiv);
  var chitterController = new ChitterController(chitterView);
  document.getElementById("menu-item-peeps").addEventListener("click", () => {
    chitterController.getPeeps();
  });
  window.addEventListener("hashchange", (event) => {
    const peepId = window.location.hash.substr(1);
    chitterController.getPeep(peepId);
  });
})();
