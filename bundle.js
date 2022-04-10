(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi = class {
        constructor(baseUrl = "https://chitter-backend-api-v2.herokuapp.com/") {
          this.baseUrl = baseUrl;
        }
        getPeepsFromServer(errorCallback, callback) {
          try {
            fetch(this.baseUrl + "/peeps").then((response) => response.json()).then((data) => callback(data));
          } catch (error) {
            errorCallback(error);
          }
        }
      };
      module.exports = ChitterApi;
    }
  });

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterApi = require_chitterApi();
      var ChitterModel2 = class {
        constructor(api = new ChitterApi()) {
          this.api = api;
          this.peeps = [
            { id: 1, body: "Default Peep 1", user: { handle: "default" }, likes: [] },
            { id: 2, body: "Default Peep 2", user: { handle: "default" }, likes: [] },
            { id: 3, body: "Default Peep 3", user: { handle: "default" }, likes: [] }
          ];
        }
        loadPeeps(callback) {
          this.peeps = [];
          this.api.getPeepsFromServer((error) => {
            console.log(`Error in Load Peeps: ${error}`);
          }, (peepList) => {
            peepList.forEach((peep) => {
              this.peeps.push(peep);
            });
            callback();
          });
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterModel2 = require_chitterModel();
      var ChitterView2 = class {
        constructor(model2 = new ChitterModel2()) {
          this.model = model2;
          this.peepsListEl = document.querySelector("#peep-list");
        }
        displayPeeps() {
          this.peepsListEl.innerHTML = "";
          let peeps = this.model.peeps;
          peeps.forEach((peepObject) => {
            let peepHTML = this.generatePeep(peepObject);
            this.peepsListEl.append(peepHTML);
          });
        }
        displayButtons() {
          let navbarEl = document.querySelector("#navbar");
          let buttonsArray = ["Sign Up", "Sign In", "Sign Out"];
          buttonsArray.forEach((buttonText) => {
            let buttonEl = document.createElement("button");
            Object.assign(buttonEl, {
              className: "button",
              id: buttonText.toLowerCase().split(" ").join("-"),
              innerText: buttonText
            });
            navbarEl.append(buttonEl);
          });
        }
        generatePeep(peepObject) {
          let peepContainer = document.createElement("div");
          Object.assign(peepContainer, {
            className: "peep-container",
            id: peepObject.id
          });
          let peepAvatar = document.createElement("div");
          Object.assign(peepAvatar, {
            className: "peep-avatar",
            innerHTML: `<img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="${peepObject.user.handle}"/>`
          });
          let peepBody = document.createElement("div");
          Object.assign(peepBody, {
            className: "peep-body"
          });
          let peepHeader = document.createElement("div");
          Object.assign(peepHeader, {
            className: "peep-flex-header",
            innerHTML: `<span class="peep-author">${peepObject.user.handle}</span> <span class="peep-handle">@${peepObject.user.handle}<span>`
          });
          let peepText = document.createElement("div");
          Object.assign(peepText, {
            className: "peep-text",
            innerHTML: `<p></>${peepObject.body}</p>`
          });
          let peepLikes = document.createElement("div");
          Object.assign(peepLikes, {
            className: "peep-likes",
            innerHTML: `<p class="peep-likes"><i class="fa-solid fa-heart peep-likes"></i> ${peepObject.likes.length}</p>`
          });
          peepLikes.addEventListener("click", () => {
            console.log(`Likes for Peep ${peepObject.id} has been clicked`);
          });
          let peepRepeeps = document.createElement("div");
          Object.assign(peepRepeeps, {
            className: "peep-repeeps",
            innerHTML: `<p class="peep-repeeps"><i class="fa-solid fa-retweet peep-repeeps"></i> ${peepObject.likes.length}</p>`
          });
          peepRepeeps.addEventListener("click", () => {
            console.log(`Repeeps for Peep ${peepObject.id} has been clicked`);
          });
          let peepComments = document.createElement("div");
          Object.assign(peepComments, {
            className: "peep-comments",
            innerHTML: `<p class="peep-comments"><i class="fa-solid fa-message peep-comments"></i> ${peepObject.likes.length}</p>`
          });
          peepComments.addEventListener("click", () => {
            console.log(`Comments for Peep ${peepObject.id} has been clicked`);
          });
          let peepFooter = document.createElement("div");
          Object.assign(peepFooter, {
            className: "peep-footer"
          });
          peepFooter.append(peepLikes);
          peepFooter.append(peepRepeeps);
          peepFooter.append(peepComments);
          peepBody.append(peepHeader);
          peepBody.append(peepText);
          peepBody.append(peepFooter);
          peepContainer.append(peepAvatar);
          peepContainer.append(peepBody);
          return peepContainer;
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterView = require_chitterView();
  var ChitterModel = require_chitterModel();
  var model = new ChitterModel();
  var view = new ChitterView(model);
  view.displayButtons();
  model.loadPeeps(() => {
    view.displayPeeps();
  });
  $(document).ready(() => {
    const $signUpButton = $("#sign-up");
    const $signInButton = $("#sign-in");
    const $signOutButton = $("#sign-out");
    const $loginForm = $(".login-form");
    const $peepList = $("#peep-list");
    const $peepLikes = $(".peep-likes");
    const $peepRepeeps = $(".peep-repeeps");
    const $peepComments = $(".peep-comments");
    $peepList.on("mouseenter", "peep-container", (event) => {
      console.log("Hovering");
      $(event.currentTarget).toggleClass("peep-active");
    });
    $("peep-container").on("mouseenter mouseleave", (event) => {
      console.log("Mouse Enter or Leave");
      $(event.currentTarget).addClass("peep-active");
    });
    $signUpButton.on("click", () => {
      console.log("JQuery sign up clicked");
    });
    $signInButton.on("click", () => {
      $loginForm.slideDown();
      console.log("JQuery sign in clicked");
    });
    $signOutButton.on("click", () => {
      console.log("JQuery sign out clicked");
    });
    $loginForm.on("mouseleave", () => {
      $loginForm.slideUp();
    });
    $peepLikes.on("click", (event) => {
      console.log("jQuery:", $(event.currentTarget));
    });
    $peepRepeeps.on("click", (event) => {
      console.log("jQuery:", $(event.currentTarget));
    });
    $peepComments.on("click", (event) => {
      console.log("jQuery:", $(event.currentTarget));
    });
  });
})();
