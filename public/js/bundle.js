(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // public/templates/peep.js
  var require_peep = __commonJS({
    "public/templates/peep.js"(exports, module) {
      var renderPeep2 = (peep, peepid) => {
        let likes = peep.likes.length;
        if (likes === 0) {
          likes = "";
        }
        let date = new Date(peep.updated_at).toString();
        date = date.substring(0, 21);
        return `<div class="peep" data-peep-id="${peepid}">
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

  // public/templates/authoredPeep.js
  var require_authoredPeep = __commonJS({
    "public/templates/authoredPeep.js"(exports, module) {
      var renderAuthoredPeep2 = (peep, peepid) => {
        let likes = peep.likes.length;
        if (likes === 0) {
          likes = "";
        }
        let date = new Date(peep.updated_at).toString();
        date = date.substring(0, 21);
        return `<div class="peep" data-peep-id="${peepid}">
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
          <img class="peep__delete-icon" id="delete-button-${peepid}" src="/images/delete_icon.png" width="20" height="20"></img>
        </div>
      </div>
    </div>`;
      };
      module.exports = renderAuthoredPeep2;
    }
  });

  // public/js/index.js
  var renderPeep = require_peep();
  var renderAuthoredPeep = require_authoredPeep();
  var feed = document.getElementById("feed");
  var currentUser = {
    userid: null,
    handle: null,
    token: null
  };
  var checkFetch = (response) => {
    if (!response.ok) {
      throw Error(response.status);
    } else {
      return response;
    }
  };
  var fetchAllPeeps = (callback) => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json().then((peeps) => callback(peeps))).catch((error) => {
      console.log("Fetch all peeps error:", error);
    });
  };
  var setupDeleteButtons = () => {
    let deletePeepButtons = document.querySelectorAll(".peep__delete-icon");
    console.log("hello");
    console.log(deletePeepButtons);
    deletePeepButtons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("delete button clicked");
        let peep = button.closest(".peep");
        console.log("closest peep", peep);
        tryDeletePeep(peep.dataset.peepId);
      });
    });
  };
  var showAllPeeps = (peeps) => {
    console.log("inside show all peeps");
    peeps.forEach((peep) => {
      if (peep.user.id == currentUser.userid) {
        feed.insertAdjacentHTML("beforeend", renderAuthoredPeep(peep, peep.id));
      } else {
        feed.insertAdjacentHTML("beforeend", renderPeep(peep, peep.id));
      }
    });
    setupDeleteButtons();
  };
  var refreshPeeps = () => {
    feed.innerHTML = "";
    fetchAllPeeps((peeps) => showAllPeeps(peeps));
  };
  refreshPeeps();
  var modalButtons = document.querySelectorAll("[data-target-modal]");
  var modalCloseButtons = document.querySelectorAll("[data-modal-close]");
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
  var tryDeletePeep = (peepid) => {
    console.log("inside tryDeletePeep");
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepid}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Token token=${currentUser.token}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      return checkFetch(response);
    }).then(peepDeleteSuccess(peepid)).catch((error) => {
      console.log("create peep error:", error);
      let errString = error.toString();
      errorElement = document.getElementById("peep-create-error");
      flashError(errString, errorElement);
    });
  };
  var peepDeleteSuccess = (peepid) => {
    let peep = document.querySelector(`[data-peep-id="${peepid}"]`);
    peep.remove();
  };
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
    let error = modal.querySelector(".error.active");
    if (error) {
      hideError(error);
    }
    ;
    let inputs = modal.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
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
    }).then((response) => {
      return checkFetch(response);
    }).then(() => {
      signUpSuccess(handle);
    }).catch((error) => {
      let errString = error.toString();
      if (errString.includes("422")) {
        errString = "That username is already taken";
      }
      let errorElement2 = document.getElementById("signup-error");
      flashError(errString, errorElement2);
    });
  };
  var signUpSuccess = (handle) => {
    const signupFormModal = document.getElementById("signup-form");
    hideModal(signupFormModal);
    const successModal = document.getElementById("signup-success");
    const signupWelcome = document.getElementById("signup-welcome");
    signupWelcome.textContent = `Your account has been created successfully, welcome to Chitter ${handle}.`;
    showModal(successModal);
  };
  var logInSuccess = (handle, response) => {
    const loginFormModal = document.getElementById("login-form");
    hideModal(loginFormModal);
    currentUser.handle = handle;
    response.json().then((body) => {
      currentUser.userid = body.user_id;
      currentUser.token = body.session_key;
      loggedInView();
    }).then(refreshPeeps());
  };
  var loggedInView = () => {
    hideButton(document.getElementById("signup-button"));
    hideButton(document.getElementById("login-button"));
    showButton(document.getElementById("logout-button"));
    showButton(document.getElementById("peep-button"));
  };
  var showButton = (button) => {
    button.classList.add("active");
  };
  var hideButton = (button) => {
    button.classList.remove("active");
  };
  var flashError = (error, errorElement2) => {
    errorElement2.textContent = error;
    showError(errorElement2);
  };
  var showError = (error) => {
    error.classList.add("active");
  };
  var hideError = (error) => {
    error.classList.remove("active");
  };
  var attemptLogin = (handle, password) => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: `{"session": {"handle":"${handle}", "password":"${password}"}}`
    }).then((response) => {
      return checkFetch(response);
    }).then((response) => {
      logInSuccess(handle, response);
    }).catch((error) => {
      let errString = error.toString();
      errorElement = document.getElementById("login-error");
      flashError(errString, errorElement);
    });
  };
  var loginFormButton = document.getElementById("login-form-submit");
  loginFormButton.addEventListener("click", () => {
    let handle = document.getElementById("login-form-handle").value;
    let password = document.getElementById("login-form-password").value;
    attemptLogin(handle, password);
  });
  var scrollToTopButton = document.getElementById("scroll-to-top-button");
  scrollToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  var createPeepButton = document.getElementById("peep-create-form-submit");
  createPeepButton.addEventListener("click", () => {
    let content = document.getElementById("peep-create-content").value;
    attemptCreatePeep(content);
  });
  var attemptCreatePeep = (content) => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
      method: "POST",
      headers: {
        "Authorization": `Token token=${currentUser.token}`,
        "Content-Type": "application/json"
      },
      body: `{"peep": {"user_id": ${currentUser.userid}, "body":" ${content}"}}`
    }).then((response) => {
      return checkFetch(response);
    }).then((response) => {
      peepCreateSuccess(response);
    }).catch((error) => {
      console.log("create peep error:", error);
      let errString = error.toString();
      errorElement = document.getElementById("peep-create-error");
      flashError(errString, errorElement);
    });
  };
  var peepCreateSuccess = (response) => {
    const peepCreateModal = document.getElementById("peep-create-form");
    response.json().then((peep) => {
      feed.insertAdjacentHTML("afterbegin", renderPeep(peep));
      hideModal(peepCreateModal);
    });
  };
})();
