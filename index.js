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
});
