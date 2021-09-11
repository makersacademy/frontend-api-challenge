"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let user = new NewUser();
  // user.createUser();
  let peepList = new PeepList();
  //peepList.getPeeps();
  let onePeep = new OnePeep();
  // onePeep.getPeep(1);

  showPage();

  window.addEventListener("hashchange", getCurrentPage);

  function getCurrentPage() {
    showPage(getPageFromUrl(window.location)[0]);
  }

  function getPageFromUrl(location) {
    return location.hash.split("#"[1]);
  }

  function showPage(page = "#all") {
    removeHash();
    if (page === "#create") {
      document.getElementById("peepsList").style.display = "none";
      document.getElementById("createUserForm").style.display = "block";
      // need to create div with form that is exposed when visiting here - then event listener  below for form button
    } else if (page === "#all") {
      document.getElementById("createUserForm").style.display = "none";
      document.getElementById("peepsList").style.display = "block";
      peepList.getPeeps();
    }
  }

  // following is from: https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
  function removeHash() {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
});
