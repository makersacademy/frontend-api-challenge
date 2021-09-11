document.addEventListener("DOMContentLoaded", () => {
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
    let loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
    document.querySelector("#callLogin").addEventListener("click", function () {
      loginModal.show();
    });
  }
  registerLoginModal();

  function registerRegisterModal() {
    let registerModal = new bootstrap.Modal(
      document.querySelector("#registerModal")
    );
    document.querySelector("#callRegis").addEventListener("click", function () {
      registerModal.show();
    });
  }
  registerRegisterModal();

  function registerPeepModal() {
    let peepModal = new bootstrap.Modal(document.querySelector("#peepModal"));
    document.querySelector("#callPeep").addEventListener("click", function () {
      peepModal.show();
    });
  }
  registerPeepModal();

  function registerSubmitLogin() {
    let submitLogin = document.querySelector("#loginModalForm");
    submitLogin.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(submitLogin.parentElement.textContent);
      return;
    });
  }
  registerSubmitLogin();

  function registerSubmitRegis() {
    let submitRegister = document.querySelector("#regisModalForm");
    submitRegister.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(submitRegister.parentElement.textContent);
      return;
    });
  }
  registerSubmitRegis();

  function registerSubmitPeep() {
    let submitPeep = document.querySelector("#peepModalForm");
    submitPeep.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(submitPeep.parentElement.textContent);
      return;
    });
  }
  registerSubmitPeep();
});

/*
<i class="fa fa-user mr-2"> &nbsp;</i>
*/
