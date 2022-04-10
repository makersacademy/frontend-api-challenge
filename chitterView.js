const ChitterModel = require("./chitterModel.js");

class ChitterView {
  constructor(model = new ChitterModel()) {
    this.model = model;
    this.peepsListEl = document.querySelector("#peep-list");
  }

  displayPeeps() {
    this.peepsListEl.innerHTML = "";
    let peeps = this.model.peeps;
    peeps.forEach((peepObject) => {
      let peepHTML = this.generatePeep(peepObject);
      this.peepsListEl.append(peepHTML);
    });
  }

  displayButtons() {
    let navbarEl = document.querySelector("#navbar");
    let buttonsArray = ["Sign Up", "Sign In", "Sign Out"];
    // let buttonsArray = ["Sign Up", "Sign In"];
    buttonsArray.forEach((buttonText) => {
      let buttonEl = document.createElement("button");
      // buttonEl.addEventListener("click", (target) => {
      //   console.log(`Target: ${target.target.innerText}`);
      //   console.log(`${buttonText} button has been clicked`);
      // });
      Object.assign(buttonEl, {
        className: "button",
        id: buttonText.toLowerCase().split(" ").join("-"),
        innerText: buttonText,
      });
      navbarEl.append(buttonEl);
    });
  }

  generatePeep(peepObject) {
    let peepContainer = document.createElement("div");
    // peepContainer.addEventListener("click", () => {
    //   console.log(`Peep ${peepObject.id} has been clicked`);
    // });
    Object.assign(peepContainer, {
      className: "peep-container",
      id: peepObject.id,
    });
    let peepAvatar = document.createElement("div");
    Object.assign(peepAvatar, {
      className: "peep-avatar",
      innerHTML: `<img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="${peepObject.user.handle}"/>`,
    });
    let peepBody = document.createElement("div");
    Object.assign(peepBody, {
      className: "peep-body",
    });
    let peepHeader = document.createElement("div");
    Object.assign(peepHeader, {
      className: "peep-flex-header",
      innerHTML: `<span class="peep-author">${peepObject.user.handle}</span> <span class="peep-handle">@${peepObject.user.handle}<span>`,
    });
    let peepText = document.createElement("div");
    Object.assign(peepText, {
      className: "peep-text",
      innerHTML: `<p></>${peepObject.body}</p>`,
    });
    let peepLikes = document.createElement("div");
    Object.assign(peepLikes, {
      className: "peep-likes",
      innerHTML: `<p class="peep-likes"><i class="fa-solid fa-heart peep-likes"></i> ${peepObject.likes.length}</p>`,
    });
    peepLikes.addEventListener("click", () => {
      console.log(`Likes for Peep ${peepObject.id} has been clicked`);
    });
    let peepRepeeps = document.createElement("div");
    Object.assign(peepRepeeps, {
      className: "peep-repeeps",
      innerHTML: `<p class="peep-repeeps"><i class="fa-solid fa-retweet peep-repeeps"></i> ${peepObject.likes.length}</p>`,
    });
    peepRepeeps.addEventListener("click", () => {
      console.log(`Repeeps for Peep ${peepObject.id} has been clicked`);
    });
    let peepComments = document.createElement("div");
    Object.assign(peepComments, {
      className: "peep-comments",
      innerHTML: `<p class="peep-comments"><i class="fa-solid fa-message peep-comments"></i> ${peepObject.likes.length}</p>`,
    });
    peepComments.addEventListener("click", () => {
      console.log(`Comments for Peep ${peepObject.id} has been clicked`);
    });
    let peepFooter = document.createElement("div");
    Object.assign(peepFooter, {
      className: "peep-footer",
    });

    peepFooter.append(peepLikes);
    peepFooter.append(peepRepeeps);
    peepFooter.append(peepComments);
    peepBody.append(peepHeader);
    peepBody.append(peepText);
    peepBody.append(peepFooter);
    peepContainer.append(peepAvatar);
    peepContainer.append(peepBody);
    return peepContainer;
  }
}

module.exports = ChitterView;
