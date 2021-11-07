const renderPeep = require("../templates/peep")

const feed = document.getElementById('feed');

let Token = null

const checkFetch = (response) => {
  if (!response.ok) {
    console.log(response)
    throw Error(response.status);
  } else {
    return response;
  }
};

const fetchAllPeeps = (callback) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json()
  .then(peeps => callback(peeps)))
  .catch(error => {
    console.log("Fetch all peeps error:", error)
  })
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
  });
});

const showModal = (modal) => {
  modal.classList.add('active');
  overlay.classList.add('active');
};

const hideModal = (modal) => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  let error = modal.querySelector('.error.active');
  if (error) {
    hideError(error);
  };
  let inputs = modal.querySelectorAll('input');
  inputs.forEach((input) => {
    input.value = ""
  });
  // value doesn't reset because it's not a form - might change this
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
  })
  .then((response) => {
    checkFetch(response);
  })
  .then(() => {
    signUpSuccess(handle);
  })
  .catch((error) => {
    console.log('Sign up error:', error);
    let errString = error.toString()
    if (errString.includes('422')) {
      errString = "That username is already taken"
    }
    let errorElement = document.getElementById('signup-error');
    flashError(errString, errorElement);
  });
};

const signUpSuccess = (handle) => {
  const signupFormModal = document.getElementById('signup-form');
  hideModal(signupFormModal);
  const successModal = document.getElementById('signup-success');
  const signupWelcome = document.getElementById('signup-welcome');
  signupWelcome.textContent = `Your account has been created successfully, welcome to Chitter ${handle}.`;
  showModal(successModal);
};

const logInSuccess = (responseToken) => {
  const loginFormModal = document.getElementById('login-form');
  hideModal(loginFormModal);
  Token = responseToken;
  loggedInView()
};

const loggedInView = () => {
  hideButton(document.getElementById('signup-button'));
  hideButton(document.getElementById('login-button'));
  showButton(document.getElementById('logout-button'));
  showButton(document.getElementById('peep-button'));
};

const showButton = (button) => {
  button.classList.add('active');
};

const hideButton = (button) => {
  button.classList.remove('active');
};

const flashError = (error, errorElement) => {
  errorElement.textContent = error
  showError(errorElement);
}

const showError = (error) => {
  error.classList.add('active');
};

const hideError = (error) => {
  error.classList.remove('active');
};

const attemptLogin = (handle, password) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: `{"session": {"handle":"${handle}", "password":"${password}"}}`
  })
  .then((response) => {
    checkFetch(response);
  })
  .then(() => {
    logInSuccess();
  })
  .catch((error) => {
    console.log('Log in error:', error);
    let errString = error.toString()
    errorElement = document.getElementById('login-error');
    flashError(errString, errorElement);
  });
};

const loginFormButton = document.getElementById('login-form-submit')

loginFormButton.addEventListener('click', () => {
  let handle = document.getElementById('login-form-handle').value;
  let password = document.getElementById('login-form-password').value;
  attemptLogin(handle, password)
});
