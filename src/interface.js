let loginModal;
document.addEventListener("DOMContentLoaded", () => {
  let chitterApp = createApp();

  function registerTooltips() {
    let tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  registerTooltips();
  function registerLoginModal() {
    loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
    document.querySelector("#callLogin").addEventListener("click", function () {
      resetModal("#loginModalForm", "#loginModalLabel");
      loginModal.show();
    });
  }
  registerLoginModal();

  function registerRegisterModal() {
    let registerModal = new bootstrap.Modal(
      document.querySelector("#registerModal")
    );
    document.querySelector("#callRegis").addEventListener("click", function () {
      resetModal("#regisModalForm", "#registerModalLabel");
      registerModal.show();
    });
  }
  registerRegisterModal();

  function registerPeepModal() {
    let peepModal = new bootstrap.Modal(document.querySelector("#peepModal"));
    document.querySelector("#callPeep").addEventListener("click", function () {
      resetPeepModal("#peepModalForm", "#peepModalLabel");
      peepModal.show();
    });
  }
  registerPeepModal();

  function registerSubmitLogin() {
    let submitLogin = document.querySelector("#loginModalForm");
    submitLogin.addEventListener("submit", (event) => {
      event.preventDefault();
      let inputFields = submitLogin.querySelectorAll("input[type]");
      chitterApp.loginUser(inputFields[0].value, inputFields[1].value);
      return;
    });
  }
  registerSubmitLogin();

  function registerSubmitRegis() {
    let submitRegister = document.querySelector("#regisModalForm");
    submitRegister.addEventListener("submit", (event) => {
      event.preventDefault();
      let inputFields = submitRegister.querySelectorAll("input[type]");
      chitterApp.createUser(inputFields[0].value, inputFields[1].value);
      return;
    });
  }
  registerSubmitRegis();

  function registerSubmitPeep() {
    let submitPeep = document.querySelector("#peepModalForm");
    submitPeep.addEventListener("submit", (event) => {
      event.preventDefault();
      let inputFields = submitPeep.querySelectorAll("textarea");
      chitterApp.createPeep(inputFields[0].value);
      return;
    });
  }
  registerSubmitPeep();

  function registerLogout() {
    let submitLogout = document.querySelector("#callLogout");
    submitLogout.addEventListener("click", () => {
      chitterApp.logout();
      return;
    });
  }
  registerLogout();

  function registerCallMyPeeps() {
    let callMyPeeps = document.querySelector("#callMyPeeps");
    callMyPeeps.addEventListener("click", (event) => {
      chitterApp.createViews.callMyPeeps();
    });
  }
  registerCallMyPeeps();

  function registerCallAllPeeps() {
    let callAllPeeps = document.querySelector("#callAllPeeps");
    callAllPeeps.addEventListener("click", (event) => {
      chitterApp.createViews.callAllPeeps();
    });
  }
  registerCallAllPeeps();

  function resetModal(modalForm, modalLabel) {
    modalForm = document.querySelector(modalForm);
    let modalFormInputs = modalForm.querySelectorAll("input[type]");
    modalFormInputs[0].value = "";
    modalFormInputs[1].value = "";
    modalLabel = document.querySelector(modalLabel);
    modalForm.setAttribute("data-hide-body", "false");
    modalLabel.innerHTML = "Registration form";
    modalLabel.setAttribute("data-error", "");
  }

  function resetPeepModal(modalForm, modalLabel) {
    modalForm = document.querySelector(modalForm);
    let modalFormInputs = modalForm.querySelectorAll("textarea");
    modalFormInputs[0].value = "";
    modalLabel = document.querySelector(modalLabel);
    modalForm.setAttribute("data-hide-body", "false");
    modalLabel.innerHTML = "Peep";
    modalLabel.setAttribute("data-error", "");
  }
});
