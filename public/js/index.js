const renderPeep = require("../templates/peep")
const renderAuthoredPeep = require("../templates/authoredPeep")

const feed = document.getElementById('feed');

// storing the session
let currentUser = {
  userid: null,
  handle: null,
  token: null
};

// this doesn't work properly, the promises still get executed
const checkFetch = (response) => {
  if (!response.ok) {
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

const setupDeleteButtons = () => {
  let deletePeepButtons = document.querySelectorAll('.peep__delete-icon')
  deletePeepButtons.forEach(button => {
    button.addEventListener('click', () => {
      let peep = button.closest('.peep');
      tryDeletePeep(peep.dataset.peepId);
    });
  });
};

const setupLikeButtons = () => {
  let likeButtons = document.querySelectorAll('.peep__like-icon')
  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let peep = button.closest('.peep');
      tryLikePeep(peep.dataset.peepId, currentUser.userid);
    });
  });
};


const showAllPeeps = (peeps) => {
  peeps.forEach((peep) => {
    if (peep.user.id == currentUser.userid) {
      feed.insertAdjacentHTML('beforeend', renderAuthoredPeep(peep, peep.id));
    } else {
      feed.insertAdjacentHTML('beforeend', renderPeep(peep, peep.id));
    }
  });
  // these must be done after all peep elements have been made:
  setupDeleteButtons();
  setupLikeButtons();
};

const refreshPeeps = () => {
  feed.innerHTML = "";
  fetchAllPeeps((peeps) => showAllPeeps(peeps));
};

// showing the peeps when you initially load the page
refreshPeeps()

// anything with these data tags is a button targetting a modal
const modalButtons = document.querySelectorAll('[data-target-modal]')

// anything with these data tags is a modal close button
const modalCloseButtons = document.querySelectorAll('[data-modal-close]')

const overlay = document.getElementById('overlay')

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    let modal = document.querySelector(button.dataset.targetModal);
    /* selecting the modal the button is targeting,
    it converts the data attributes to camel case:
    button.target.modal = button.targetModal */
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

const peepDeleteSuccess = (peepid) => {
  let peep = document.querySelector(`[data-peep-id="${peepid}"]`);
  peep.remove();
};

// when a modal is open, you can click on the background to close it
overlay.addEventListener('click', () => {
  let modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    hideModal(modal);
  });
});

/* active class is added which makes it visible in css
this is used for all show/hide methods */
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
    return checkFetch(response);
  })
  .then(() => {
    signUpSuccess(handle);
  })
  .catch((error) => {
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

const logInSuccess = (handle, response) => {
  const loginFormModal = document.getElementById('login-form');
  hideModal(loginFormModal);
  currentUser.handle = handle;
  response.json().then((body) => {
    currentUser.userid = body.user_id;
    currentUser.token = body.session_key;
    loggedInView();
  }).then(refreshPeeps())
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
    return checkFetch(response);
  })
  .then((response) => {
    logInSuccess(handle, response);
  })
  .catch((error) => {
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

const scrollToTopButton = document.getElementById('scroll-to-top-button')

scrollToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
  // for different browsers
});

const createPeepButton = document.getElementById('peep-create-form-submit');

createPeepButton.addEventListener('click', () => {
  let content = document.getElementById('peep-create-content').value;
  attemptCreatePeep(content)
});

const attemptCreatePeep = (content) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
  method: 'POST',
  headers: {
    'Authorization': `Token token=${currentUser.token}`,
    'Content-Type': 'application/json'
  },
  body: `{"peep": {"user_id": ${currentUser.userid}, "body":" ${content}"}}`
  })
  .then((response) => {
    return checkFetch(response);
  })
  .then((response) => {
    peepCreateSuccess(response);
  })
  .catch((error) => {
    console.log('Create peep error:', error)
    let errString = error.toString()
    errorElement = document.getElementById('peep-create-error');
    flashError(errString, errorElement);
  });
};

const peepCreateSuccess = (response) => {
  const peepCreateModal = document.getElementById('peep-create-form');
  response.json().then((peep) => {
    feed.insertAdjacentHTML('afterbegin', renderPeep(peep));
    hideModal(peepCreateModal);
  })
  // .then(refreshPeeps())
  /* I choose not to refresh here as if the program gets here the peep was
  created successfully, so a full refresh is unnecessary and slow */
};

const tryDeletePeep = (peepid) => {
  fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepid}`, {
  method: 'DELETE',
  headers: {
    'Authorization': `Token token=${currentUser.token}`,
  }})
  .then((response) => {
    return checkFetch(response);
  })
  .then(
    peepDeleteSuccess(peepid)
  )
  .catch((error) => {
    console.log('Delete peep error:', error)
    let errString = error.toString()
    errorElement = document.getElementById('peep-create-error');
    flashError(errString, errorElement);
  });
};

const tryLikePeep = (peepid, userid) => {
  fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepid}/likes/${userid}`, {
  method: 'PUT',
  headers: {
    'Authorization': `Token token=${currentUser.token}`,
  }})
  .then((response) => {
    return checkFetch(response);
  })
  .then(
    peepLikeSuccess(peepid)
  )
  .catch((error) => {
    console.log('Like peep error:', error)
    let errString = error.toString()
    errorElement = document.getElementById('peep-create-error');
    flashError(errString, errorElement);
  });
};

const peepLikeSuccess = (peepid) => {
  let likeCount = document.getElementById(`like-count-${peepid}`);
  likeCount.textContent++
};
