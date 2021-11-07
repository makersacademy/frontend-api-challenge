const renderPeep = require("../templates/peep")

const feed = document.getElementById('feed');

const fetchAllPeeps = (callback) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json()
  .then(peeps => callback(peeps)))
};

const showAllPeeps = (peeps) => {
  peeps.forEach((peep) => {
    feed.insertAdjacentHTML('beforeend', renderPeep(peep));
  })
};

fetchAllPeeps((peeps) => showAllPeeps(peeps));

const modalButtons = document.querySelectorAll('[data-target-modal]')
// if it has this data attribute, it's a button that opens a modal
const modalCloseButtons = document.querySelectorAll('[data-modal-close')
// if it has this data attribute, it's a button that closes a modal
const overlay = document.getElementById('overlay')

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    let modal = document.querySelector(button.dataset.targetModal);
    // selecting the modal the button is targeting
    // it converts the data attributes to camel case:
    // button.target.modal = button.targetModal
    showModal(modal);
  });
});

modalCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    let modal = button.closest('.modal');
    // finds the closest parent element that is a modal
    hideModal(modal);
  });
});

overlay.addEventListener('click', () => {
  let modals = document.querySelectorAll('.modal.active')
  // selecting all the active (visible) modals
  modals.forEach(modal => {
    hideModal(modal);
  })
});

const showModal = (modal) => {
  modal.classList.add('active');
  overlay.classList.add('active');
};

const hideModal = (modal) => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

const signupFormButton = document.getElementById('signup-form-submit')

signupFormButton.addEventListener('click', () => {
  let handle = document.getElementById('signup-form-handle').value;
  let password = document.getElementById('signup-form-password').value;
  attemptSignup(handle, password)
});

const attemptSignup = (handle, password) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: `{"user": {"handle":"${handle}", "password":"${password}"}}`
  }).then(flashSuccess(handle));
};

const flashSuccess = (handle) => {
  const signupFormModal = document.getElementById('signup-form');
  hideModal(signupFormModal);
  const successModal = document.getElementById('signup-success');
  const signupWelcome = document.getElementById('signup-welcome');
  signupWelcome.innertext = `Your account has been created successfully, welcome to Chitter ${handle}.`;
  showModal(successModal);
};
