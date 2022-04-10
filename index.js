const ChitterView = require("./chitterView.js");
const ChitterModel = require("./chitterModel.js");

const model = new ChitterModel();
const view = new ChitterView(model);

view.displayButtons();

model.loadPeeps(() => {
  view.displayPeeps();
});

$(document).ready(() => {
  const $signUpButton = $("#sign-up");
  const $signInButton = $("#sign-in");
  const $signOutButton = $("#sign-out");

  const $loginForm = $(".login-form");

  const $peepList = $("#peep-list");
  const $peepLikes = $(".peep-likes");
  const $peepRepeeps = $(".peep-repeeps");
  const $peepComments = $(".peep-comments");

  $peepList.on("mouseenter", "peep-container", (event) => {
    console.log("Hovering");
    $(event.currentTarget).toggleClass("peep-active");
  });

  $("peep-container").on("mouseenter mouseleave", (event) => {
    console.log("Mouse Enter or Leave");
    $(event.currentTarget).addClass("peep-active");
  });

  $signUpButton.on("click", () => {
    console.log("JQuery sign up clicked");
  });
  $signInButton.on("click", () => {
    $loginForm.slideDown();
    console.log("JQuery sign in clicked");
  });
  $signOutButton.on("click", () => {
    console.log("JQuery sign out clicked");
  });
  $loginForm.on("mouseleave", () => {
    $loginForm.slideUp();
  });
  $peepLikes.on("click", (event) => {
    console.log("jQuery:", $(event.currentTarget));
  });
  $peepRepeeps.on("click", (event) => {
    console.log("jQuery:", $(event.currentTarget));
  });
  $peepComments.on("click", (event) => {
    console.log("jQuery:", $(event.currentTarget));
  });
});
