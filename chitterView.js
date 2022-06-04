class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector("#main-container");
    this.createAccountBtn = document.querySelector("#create-account-btn");

    this.createAccountBtn.addEventListener("click", () => {
      this.showAndHide("#create-account-container");
    });

    this.createHandleInput = document.querySelector("#create-account-handle");

    this.createPasswordInput = document.querySelector(
      "#create-account-password"
    );

    this.noticeEl = document.querySelector("#notice");

    this.createAccountSubmit = document.querySelector("#create-account-submit");
    this.createAccountSubmit.addEventListener("click", () => {
      this.createAccount(
        this.createHandleInput.value,
        this.createPasswordInput.value
      );
    });
  }

  async displayPeepsFromApi() {
    const peeps = await this.api.fetchPeeps();
    this.model.setPeeps(peeps);
    this.displayPeeps();
  }

  displayPeeps() {
    let peeps = this.model.getPeeps();

    peeps.forEach((peep) => {
      this.addPeepEl(peep.body);
    });
  }

  async createAccount(handle, password) {
    if (handle && password) {
      const user = await this.api.createUser(handle, password);

      this.noticeEl.innerText = `Thanks ${user.handle} your account has been created`;

      this.showAndHide("#create-account-container");
    }
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
