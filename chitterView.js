class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.peepList = document.querySelector("#peep-list");
    this.successAlert = document.querySelector("#success-alert");
    this.failAlert = document.querySelector("#fail-alert");

    this.createAccountBtn = document.querySelector("#user-create-btn");
    this.createHandleInput = document.querySelector("#create-account-handle");
    this.createPasswordInput = document.querySelector(
      "#create-account-password"
    );
    this.createAccountSubmit = document.querySelector("#create-account-submit");

    this.createAccountSubmit.addEventListener("click", () => {
      this.createAccount(
        this.createHandleInput.value,
        this.createPasswordInput.value
      );
    });

    this.loginBtn = document.querySelector("#user-login-btn");
    this.loginHandleInput = document.querySelector("#login-handle");
    this.loginPasswordInput = document.querySelector("#login-password");
    this.loginSubmit = document.querySelector("#login-submit");
    this.loginSubmit.addEventListener("click", () => {
      this.signIn(this.loginHandleInput.value, this.loginPasswordInput.value);
    });

    this.peepInput = document.querySelector("#peep-input");
    this.peepSubmit = document.querySelector("#peep-submit");
    this.peepSubmit.addEventListener("click", () => {
      this.newPeep(
        this.model.getSession().session_key,
        this.model.getSession().user_id,
        this.peepInput.value
      );
    });
  }

  async displayPeepsFromApi() {
    const peeps = await this.api.fetchPeeps();
    this.model.setPeeps(peeps);
    this.displayPeeps();
  }

  displayPeeps() {
    this.clearPeepDivs();
    let peeps = this.model.getPeeps();

    peeps.forEach((peep) => {
      this.addPeepLi(peep);
    });
  }

  clearPeepDivs() {
    const peeps = document.querySelectorAll("li.peep");
    peeps.forEach((peep) => {
      peep.remove();
    });
  }

  async createAccount(handle, password) {
    if (handle && password) {
      const user = await this.api.createUser(handle, password);

      // this.showAndHide("#success-alert");
      // this.successAlert.innerText = `Thanks ${user.handle} your account has been created`;

      this.createHandleInput.value = null;
      this.createPasswordInput.value = null;

      this.signIn(handle, password);
    }
  }

  async signIn(handle, password) {
    if (handle && password) {
      const response = await this.api.logInUser(handle, password);
      
      this.model.saveSession(response);

      this.showAndHide("#success-alert");
      this.successAlert.innerText = `Thanks ${response.session_key} you have successfully logged in`;

      this.loginHandleInput.value = null;
      this.loginPasswordInput.value = null;

      this.showAndHide("#user-container");

      this.showAndHide("#peep-container");
    }
  }

  async newPeep(session_key, user_id, body) {
    const peep = await this.api.createPeep(session_key, user_id, body);

    this.model.addNewPeep(peep);
    this.displayPeeps();

    this.peepInput.value = null;
  }

  addPeepLi(peep) {
    const time = this.formatTime(peep);

    this.peepList.innerHTML += `<li class="list-group-item peep">
      <h5 class="fw-bold">${peep.user.handle}</h5>
      <p class="text-muted mb-2 fw-bold">${time}</p>
      <p class="text-muted mb-0 peep">${peep.body}</p>
    </li>`;
  }

  formatTime(peep) {
    let time = new Date(peep.created_at);

    return time.toDateString();
  }

  showAndHide(element) {
    var x = document.querySelector(element);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}

module.exports = ChitterView;
