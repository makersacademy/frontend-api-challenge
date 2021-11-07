(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // public/templates/peep.js
  var require_peep = __commonJS({
    "public/templates/peep.js"(exports, module) {
      var renderPeep2 = (peep) => {
        let likes = peep.likes.length;
        if (likes === 0) {
          likes = "";
        }
        let date = new Date(peep.updated_at).toString();
        date = date.substring(0, 21);
        return `<div class="peep">
      <img class="peep__author-pic" src="/images/red_egg.jpeg"></img>
      <div class="peep__main">
        <div class="peep__header">
          <div class="peep__author-handle">
            ${peep.user.handle} 
          </div>
          <div class="peep__time-since">
            ${date}
          </div>
        </div>
        <div class="peep__content">
          <div class="peep__text">
            ${peep.body}
          </div>
        </div>
        <div class="peep__footer">
          <img class="peep__like-icon" src="/images/like_icon.png" width="20" height="20"></img>
          <div class="peep__like-count">
            ${likes}
          </div>
        </div>
      </div>
    </div>`;
      };
      module.exports = renderPeep2;
    }
  });

  // public/js/index.js
  var renderPeep = require_peep();
  var feed = document.getElementById("feed");
  var fetchAllPeeps = (callback) => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json().then((peeps) => callback(peeps)));
  };
  var showAllPeeps = (peeps) => {
    peeps.forEach((peep) => {
      feed.insertAdjacentHTML("beforeend", renderPeep(peep));
    });
  };
  fetchAllPeeps((peeps) => showAllPeeps(peeps));
  var modalButtons = document.querySelectorAll("[data-target-modal]");
  var modalCloseButtons = document.querySelectorAll("[data-modal-close");
  var overlay = document.getElementById("overlay");
  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let modal = document.querySelector(button.dataset.targetModal);
      showModal(modal);
    });
  });
  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let modal = button.closest(".modal");
      hideModal(modal);
    });
  });
  overlay.addEventListener("click", () => {
    let modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      hideModal(modal);
    });
  });
  var showModal = (modal) => {
    modal.classList.add("active");
    overlay.classList.add("active");
  };
  var hideModal = (modal) => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  };
  var signupFormButton = document.getElementById("signup-form-submit");
  signupFormButton.addEventListener("click", () => {
    let handle = document.getElementById("signup-form-handle").value;
    let password = document.getElementById("signup-form-password").value;
    attemptSignup(handle, password);
  });
  var attemptSignup = (handle, password) => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: `{"user": {"handle":"${handle}", "password":"${password}"}}`
    }).then(flashSuccess(handle));
  };
  var flashSuccess = (handle) => {
    const signupFormModal = document.getElementById("signup-form");
    hideModal(signupFormModal);
    const successModal = document.getElementById("signup-success");
    const signupWelcome = document.getElementById("signup-welcome");
    signupWelcome.innertext = `Your account has been created successfully, welcome to Chitter ${handle}.`;
    showModal(successModal);
  };
})();
