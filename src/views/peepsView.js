class PeepsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.containerCreateUser = document.getElementById("container-createUser");
    this.showCreateUserbtn = document.getElementById("showCreateUser");
    this.createUserFormBtn = document.getElementById("createUserFormBtn");
    this.containerPosts = document.getElementById("container-posts");

    //Create User Button
    this.showCreateUserbtn.addEventListener("click", () => {
      if (this.containerCreateUser.style.visibility === "hidden") {
        this.containerCreateUser.style.visibility = "visible";

        this.showCreateUserbtn.textContent = "Cancel creating an account";
      } else {
        this.containerCreateUser.style.visibility = "hidden";

        this.showCreateUserbtn.textContent = "Create an account";
      }
    });

    //Create user form button
    this.createUserFormBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this.createUser();
    });
  }

  createUser() {
    const username = document.getElementById("createUsername").value;
    const password = document.getElementById("createPassword").value;
    this.api.createUser(username, password, (data) =>
      console.log("Successful store of:" + data.handle)
    );
  }

  addpeepToPage(peep) {
    const newPeepDiv = document.createElement('div');
    newPeepDiv.className = "peep"

    const newPeepDate = document.createElement("p");
    const date = new Date(peep.created_at).toLocaleDateString("en-uk", {
      hour: "2-digit",
      minute: "2-digit",
      year: "numeric",
      month: "short",
      weekday: 'long',
      day: "numeric",
    });
    newPeepDate.textContent = date
    newPeepDate.className = 'peep-body'
    newPeepDiv.append(newPeepDate);

    const newPeepUser = document.createElement("p");
    newPeepUser.textContent = peep.user.handle;
    newPeepUser.className = 'peep-user'
    newPeepDiv.append(newPeepUser);

    const newPeepBody = document.createElement("p");
    newPeepBody.textContent = peep.body;
    newPeepBody.className = 'peep-body'
    newPeepDiv.append(newPeepBody);

    this.containerPosts.append(newPeepDiv)

  }

  displayPeeps() {
    const pagepeeps = document.querySelectorAll(".peep");
    pagepeeps.forEach((element) => {
      element.remove();
    });
    
    this.model.loadPeepsData((peepObjects) => {
      peepObjects.forEach((peep) => {
        this.addpeepToPage(peep);
      });
    });

  }
}

module.exports = PeepsView;
