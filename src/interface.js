"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.getElementById("display").children;
  const divArray = [];
  const form = document.getElementById("userForm");
  const peepform = document.getElementById("peep");
  let user = new NewUser();
  let peepList = new PeepList();
  let userLogIn = new UserLogIn();
  let peep = new Peep();

  getElements();
  showLink();

  window.addEventListener("hashchange", getCurrentLink);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    formRouter();
  });

  peepform.addEventListener("submit", function (event) {
    event.preventDefault();
    sendPeep();
  });

  function getCurrentLink() {
    showLink(getLinkFromUrl(window.location)[0]);
  }

  function getLinkFromUrl(location) {
    return location.hash.split("#"[1]);
  }

  function showLink(page = "#peeps") {
    removeHash();
    hideDisplayElements();
    const element = page.substring(1);
    revealDisplayElements(element);
  }

  function removeHash() {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }

  function revealDisplayElements(element) {
    document.getElementById(element).style.display = "block";
    if (element === "peeps") {
      peepList.getPeeps();
    } else if (element === "create" || element === "login") {
      document.getElementById("siteForm").style.display = "block";
    }
  }

  function getElements() {
    for (let i = 0; i < elements.length; i++) {
      divArray.push(elements[i].id);
    }
  }

  function hideDisplayElements() {
    divArray.forEach(function (element) {
      document.getElementById(element).style.display = "none";
    });
  }

  function formRouter() {
    document.getElementById("create").style.display === "block"
      ? processFormData("#created")
      : processFormData("#loggedon");
  }

  function processFormData(page) {
    const form = document.getElementById("userForm");
    const data = new FormData(form);
    form.reset();
    const handle = data.get("handle");
    const password = data.get("password");
    page === "#created"
      ? user.createUser(handle, password)
      : userLogIn.logIn(handle, password);
    showLink(page);
  }

  function sendPeep() {
    const form = document.getElementById("peepForm");
    const data = new FormData(form);
    form.reset();
    const peeptext = data.get("content");
    const user_id = sessionStorage.getItem("user_id");
    const token = sessionStorage.getItem("token");
    peep.sendPeep(token, user_id, peeptext);
    showLink("#peepsent");
  }
});
