class PeepsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.containerCreateUser = document.getElementById("container-createUser");
    this.showCreateUserbtn = document.getElementById("showCreateUser");
    this.createUserFormBtn = document.getElementById("createUserFormBtn");
    this.containerPosts = document.getElementById("container-posts");
    this.loginForm = document.getElementById('loginForm');

    //Create User Button
    this.showCreateUserbtn.addEventListener("click", () => {
      if (this.containerCreateUser.style.visibility === "hidden") {
        this.containerCreateUser.style.visibility = "visible";
        this.loginForm.style.visibility = 'hidden';
        this.showCreateUserbtn.textContent = "Cancel creating an account";
      } else {
        this.containerCreateUser.style.visibility = "hidden";
        this.loginForm.style.visibility = 'visible';

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
    const newPeepDiv = document.createElement("div");
    newPeepDiv.className = "peep";

    const newPeepImg = document.createElement('img');
    newPeepImg.src = 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'
    newPeepDiv.append(newPeepImg)

    const newPeepDate = document.createElement("p");
    const date = new Date(peep.created_at).toLocaleDateString("en-uk", {
      hour: "2-digit",
      minute: "2-digit",
      year: "numeric",
      month: "short",
      weekday: "long",
      day: "numeric",
    });
    newPeepDate.textContent = date;
    newPeepDate.className = "peep-date";
    newPeepDiv.append(newPeepDate);

    const newPeepUser = document.createElement("p");
    newPeepUser.innerHTML = `<span>Peep by: ${peep.user.handle}</span>`;
    newPeepUser.className = "peep-user";
    newPeepDiv.append(newPeepUser);

    const newPeepBody = document.createElement("p");
    newPeepBody.textContent = peep.body;
    newPeepBody.className = "peep-body";
    newPeepDiv.append(newPeepBody);



    this.containerPosts.append(newPeepDiv);
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
