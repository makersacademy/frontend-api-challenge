"use strict";

document.addEventListener("DOMContentLoaded", () => {
  sessionStorage.setItem("token", "");

  const elements = document.getElementById("display").children;
  const divArray = [];
  const form = document.getElementById("userform");
  const peepform = document.getElementById("peepform");

  let peep = new Peep();
  let peepList = new PeepList();
  let user = new NewUser();
  let userLogIn = new UserLogIn();

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

  function showLink(link = "#peeps") {
    removeHash();
    hideDisplayElements();
    const element = link.substring(1);
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
      document.getElementById("siteform").style.display = "block";
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

  function getFormData(link) {
    const form = document.getElementById(link);
    const data = new FormData(form);
    form.reset();
    return data;
  }

  function processFormData(link) {
    const data = getFormData("userform");
    const handle = data.get("handle");
    const password = data.get("password");
    link === "#created"
      ? user.createUser(handle, password)
      : userLogIn.logIn(handle, password);
    showLink(link);
  }

  function sendPeep() {
    if (sessionStorage.getItem("token") === "") {
      alert("Please create an account or log in before peeping!");
      return;
    }
    const data = getFormData("peepform");
    const peeptext = data.get("content");
    const user_id = sessionStorage.getItem("user_id");
    const token = sessionStorage.getItem("token");
    peep.sendPeep(token, user_id, peeptext);
    showLink("#peepsent");
  }
});
