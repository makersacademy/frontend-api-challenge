class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector("#main-container");
    this.noticeEl = document.querySelector("#notice");

    this.createAccountBtn = document.querySelector("#create-account-btn");
    this.createHandleInput = document.querySelector("#create-account-handle");
    this.createPasswordInput = document.querySelector(
      "#create-account-password"
    );
    this.createAccountSubmit = document.querySelector("#create-account-submit");
    this.createAccountBtn.addEventListener("click", () => {
      this.showAndHide("#create-account-container");
    });
    this.createAccountSubmit.addEventListener("click", () => {
      this.createAccount(
        this.createHandleInput.value,
        this.createPasswordInput.value
      );
    });

    this.loginBtn = document.querySelector("#login-btn");
    this.loginHandleInput = document.querySelector("#login-handle");
    this.loginPasswordInput = document.querySelector("#login-password");
    this.loginSubmit = document.querySelector("#login-submit");
    this.loginBtn.addEventListener("click", () => {
      this.showAndHide("#login-container");
    });
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
      this.addPeepEl(peep.body);
    });
  }

  clearPeepDivs() {
    const peeps = document.querySelectorAll("div.peep");
    peeps.forEach((peep) => {
      peep.remove();
    });
  }

  async createAccount(handle, password) {
    if (handle && password) {
      const user = await this.api.createUser(handle, password);

      this.noticeEl.innerText = `Thanks ${user.handle} your account has been created`;

      this.createHandleInput.value = null;
      this.createPasswordInput.value = null;

      this.showAndHide("#create-account-container");
    }
  }

  async signIn(handle, password) {
    if (handle && password) {
      const response = await this.api.logInUser(handle, password);

      this.model.saveSession(response);

      this.noticeEl.innerText = `Thanks ${response.session_key} you have successfully logged in`;

      this.loginHandleInput.value = null;
      this.loginPasswordInput.value = null;

      this.showAndHide("#login-container");
      this.showAndHide("#peep-container");
    }
  }

  async newPeep(session_key, user_id, body) {
    const peep = await this.api.createPeep(session_key, user_id, body);

    this.model.addNewPeep(peep);
    this.displayPeeps();

    this.peepInput.value = null;
  }

  addPeepEl(peepBody) {
    const newDiv = document.createElement("div");
    newDiv.innerText = peepBody;
    newDiv.setAttribute("class", "peep");
    this.mainContainerEl.append(newDiv);
  }

  showAndHide(element) {
    var x = document.querySelector(element);
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}

module.exports = ChitterView;
