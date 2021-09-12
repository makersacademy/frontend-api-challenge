"use strict";
//Someandsome
function createApp() {
  return new (class {
    constructor() {
      this.chitterApi = new chitterApi();
      this.createViews = new CreateViews();
      this.allPeeps = this.callPeeps();
      this.owner = "";
      this.userId = "";
      this.sessionKey = "";
    }

    async callPeeps() {
      this.createViews.clearPeepsContainer();
      return await this.chitterApi.fetchAll().then((peeps) => {
        return peeps.map((peep) => {
          this.createViews.add(peep, this.owner);
          return peep;
        });
      });
    }

    async createUser(_user, _password) {
      this.chitterApi.createUser(_user, _password).then((response) => {
        if (Array.isArray(response.handle)) {
          this.createViews.reportFailure(
            "#registerModalLabel",
            response.handle[0]
          );
        } else {
          this.createViews.reportSuccessRegistration(
            "#registerModalLabel",
            "#regisModalForm",
            response.handle
          );
        }
      });
    }

    async loginUser(_user, _password) {
      this.owner = _user;
      this.chitterApi.loginUser(_user, _password).then((response) => {
        if ("errors" in response) {
          this.owner = "";
          this.userId = "";
          this.sessionKey = "";
          this.createViews.reportFailure(
            "#loginModalLabel",
            "and password do not match"
          );
        } else {
          this.userId = response.user_id;
          this.sessionKey = response.session_key;
          document.body.setAttribute("data-loggedin", "true");
          this.createViews.hideModal("#loginModalForm");
          this.callPeeps();
        }
      });
    }

    async createPeep(_peep) {
      this.chitterApi
        .createPeep(this.userId, this.sessionKey, _peep)
        .then((response) => {
          console.log(response);
          if ("errors" in response) {
            this.createViews.reportFailure(
              "#peepModalLabel",
              "You need to Login first"
            );
          } else {
            this.createViews.hideModal("#peepModalForm");
            this.callPeeps();
          }
        });
    }

    logout() {
      document.body.setAttribute("data-loggedin", "false");
      document
        .querySelector("#peepContainer")
        .classList.remove("see-only-mine");
      this.owner = "";
      this.userId = "";
      this.sessionKey = "";
      this.callPeeps();
    }
  })();
}
