class PeepsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.session_key = null;
    this.user_id = null

    // Elements
    this.loginButton = document.getElementById('loginButton')
    this.containerCreateUser = document.getElementById("container-createUser");
    this.showCreateUserbtn = document.getElementById("showCreateUser");
    this.createUserFormBtn = document.getElementById("createUserFormBtn");
    this.containerPosts = document.getElementById("container-posts");
    this.loginForm = document.getElementById('loginForm');
    this.containerCreatePost = document.getElementById('container-makepost');
    this.usersHeader = document.getElementById('users-header')
    this.createPeepBtn = document.getElementById("createPeepBtn")
    this.createPeepContent = document.getElementById('newPeep-content')

    //Create User Button
    this.showCreateUserbtn.addEventListener("click", () => {
      if (this.containerCreateUser.style.display === "none") {
        this.containerCreateUser.style.display = "block";
        this.loginForm.style.display = 'none';
        this.showCreateUserbtn.textContent = "Cancel creating an account";
      } else {
        this.containerCreateUser.style.display = "none";
        this.loginForm.style.display = 'block';

        this.showCreateUserbtn.textContent = "Create an account";
      }
    });

    //Create user form button
    this.createUserFormBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this.createUser();
    });

    //Login button

    this.loginButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.signInUser();
    });

    this.createPeepBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.createPeep()
    })
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
    if (peep.user.id === this.user_id) {
      newPeepUser.innerHTML = `<span>Peep by: YOU!</span>`;
    } else {
      newPeepUser.innerHTML = `<span>Peep by: ${peep.user.handle}</span>`;
    }
    newPeepUser.className = "peep-user";
    newPeepDiv.append(newPeepUser);

    const newPeepBody = document.createElement("p");
    newPeepBody.textContent = peep.body;
    newPeepBody.className = "peep-body";
    newPeepDiv.append(newPeepBody);

    if (this.session_key) {
      const newPeepLikeBtn = document.createElement("button")
      newPeepLikeBtn.className = peep.id
      newPeepLikeBtn.style = 'float:right'

      newPeepLikeBtn.addEventListener('click', (event) => {
        this.api.likePeep(event.target.className, this.user_id, this.session_key, (response) => {
          console.log("Post is liked by:" + response.user)
          event.target.innerText = `${peep.likes.length + 1} Likes. You have already liked this peep!`
        });
      })

      newPeepLikeBtn.innerText = `${peep.likes.length} Likes. Login to like this Peep`

      peep.likes.forEach(like => {
        if(like.user.id === this.user_id) {
          newPeepLikeBtn.innerText = `${peep.likes.length} Likes. You have already liked this peep!`
        }
      });

      newPeepDiv.append(newPeepLikeBtn)

    } else {
      const newPeepLikeBtnNoClick = document.createElement("button")
      newPeepLikeBtnNoClick.className = peep.id
      newPeepLikeBtnNoClick.innerText = `${peep.likes.length} Likes. Login to like this Peep`
      newPeepLikeBtnNoClick.style = 'float:right'
      newPeepDiv.append(newPeepLikeBtnNoClick)
    }

    /// Delete button on peep card

    if (peep.user.id === this.user_id) {
      const newPeepDeleteBtn = document.createElement("button")
      newPeepDeleteBtn.className = peep.id
      newPeepDeleteBtn.innerText = 'Delete Peep'
      newPeepDeleteBtn.style = 'float:right'
      newPeepDeleteBtn.addEventListener('click', (event) => {
        this.api.deletePeep(event.target.className, this.session_key, () => {
          console.log(`Post has been deleted`)
          this.displayPeeps()
        });
      })
      newPeepDiv.append(newPeepDeleteBtn)
    }

    this.containerPosts.append(newPeepDiv);
  }

  displayPeeps() {
    // Remove existing peeps first
    const pagepeeps = document.querySelectorAll(".peep");
    pagepeeps.forEach((element) => {
      element.remove();
    });
    // Add peeps to the page from the API
    this.model.loadPeepsData((peepObjects) => {
      peepObjects.forEach((peep) => {
        this.addpeepToPage(peep);
      });
    });
  }

  signInUser() {
    const username = document.getElementById("loginUsername").value
    const password = document.getElementById("loginPassword").value

    this.api.createSession(username, password, (response) => {
      console.log("Login attempt:" + response.session_key)

      this.session_key = response.session_key
      this.user_id = response.user_id
      console.log('user_id = ' + this.user_id)

      if (this.session_key) { // Hides user header, shows post form
        this.containerCreatePost.style.display = 'block';
        this.usersHeader.style.display = 'none';
        this.displayPeeps()
      }

    })

  }

  createPeep() {
    this.api.postPeep(this.createPeepContent.value, this.user_id, this.session_key, (data) => {
      console.log("Peep has been posted!: " + data.body + " " + "user_handle: " + data.user.handle);

      this.displayPeeps()
    })
  }
}

module.exports = PeepsView;
