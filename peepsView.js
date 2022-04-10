class PeepsView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector("#main-container");
    this.peepsContainer = document.querySelector("#peeps-container");
    this.buttonEl = document.querySelector("#add-peep-button");
    this.inputEl = document.querySelector("#peep-input");

    this.registerButtonEl = document.querySelector("#register-button");
    this.registrationEl = document.querySelector("#registration");

    this.registerButtonEl.addEventListener("click", () => {
      if (this.registrationEl.style.display === "none") {
        this.registrationEl.style.display = "block";
      } else {
        this.registrationEl.style.display = "none";
      }
    });

    this.registerSubmitEl = document.querySelector("#register-submit");
    this.usernameInputEl = document.querySelector("#register-username");
    this.pswInputEl = document.querySelector("#register-psw");

    this.registerSubmitEl.addEventListener("click", () => {
      console.log("hello");
      const newUser = this.usernameInputEl.value;
      const password = this.pswInputEl.value;
      this.model.addUser(newUser, password, () => {
        console.log("registered");
      });
    });

    this.signinButtonEl = document.querySelector("#signin-button");
    this.signinEl = document.querySelector("#sign-in");

    this.signinButtonEl.addEventListener("click", () => {
      if (this.signinEl.style.display === "none") {
        this.signinEl.style.display = "block";
      } else {
        this.signinEl.style.display = "none";
      }
    });

    this.signinSubmitEl = document.querySelector("#signin-submit");
    this.signinUserInputEl = document.querySelector("#signin-username");
    this.signinPswInputEl = document.querySelector("#signin-psw");

    this.signinSubmitEl.addEventListener("click", () => {
      console.log("XYZ");
      const signinUser = this.signinUserInputEl.value;
      const signinPassword = this.signinPswInputEl.value;
      this.model.signinUser(signinUser, signinPassword, () => {
        console.log("registered");
      });
    });

    this.buttonEl.addEventListener("click", () => {
      const newPeep = this.inputEl.value;
      this.model.addPeep(newPeep, () => {
        peeps = this.getListOfPeeps();
        this.displayPeeps(peeps);
      });
      this.inputEl.value = "";
    });
  }

  getListOfPeeps() {
    this.model.getPeeps((peeps) => {
      this.displayPeeps(peeps);
    });
  }

  displayPeeps(peeps) {
    document.querySelectorAll(".peep").forEach((element) => {
      element.remove();
    });

    peeps.forEach((peep) => {
      const peepEl = document.createElement("div");
      peepEl.className = "peep";

      const usernameEl = document.createElement("p");
      usernameEl.className = "peep-user";
      usernameEl.innerText = peep.user.handle;
      peepEl.append(usernameEl);

      const peepItemEl = document.createElement("p");
      peepItemEl.className = "peep-item";
      peepItemEl.innerText = peep.body;
      peepEl.append(peepItemEl);

      const dateEl = document.createElement("p");
      dateEl.className = "peep-date";
      const date = new Date(peep.created_at).toLocaleDateString("en-uk", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      dateEl.innerText = date;
      peepEl.append(dateEl);

      this.peepsContainer.append(peepEl);
    });
  }
}

module.exports = PeepsView;
