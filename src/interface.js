window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  event.preventDefault()
  let element = document.getElementById('app')
  let client = new Client
  let chitter = new Chitter(element, client)
  let viewChitter = new ViewChitter(element)
  viewChitter.renderHomePage()
  // chitter.renderHomePage()
  window.addEventListener('hashchange', (event) => {
    event.preventDefault()
    if (location.hash === "#peeps") {
      chitter.peeps()
    } else {
      let peepId = location.hash.slice(1)
      chitter.likePeep(peepId)
    }
  })
  let signUpForm = document.getElementById('sign-up')
  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let handle = document.getElementById('handle')
    let password = document.getElementById('password')
    chitter.createNewUser(handle.value, password.value)
    viewChitter.renderSignUp()
    let signInForm = document.getElementById('sign-in')
    signInForm.addEventListener('submit', (event) => {
      event.preventDefault()
      let handle = document.getElementById('sign-in-handle')
      let password = document.getElementById('sign-in-password')
      chitter.loginUser(handle.value, password.value)
      viewChitter.renderLogIn()
      let postPeepForm = document.getElementById('post-peep')
      postPeepForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let peep = document.getElementById('peep')
        chitter.postPeep(peep.value)
        viewChitter.renderPost()
      });
    });
  })
  let signInForm = document.getElementById('sign-in')
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let handle = document.getElementById('sign-in-handle')
    let password = document.getElementById('sign-in-password')
    chitter.loginUser(handle.value, password.value)
    chitter.renderLogIn()
    let postPeepForm = document.getElementById('post-peep')
    postPeepForm.addEventListener('submit', (event) => {
      event.preventDefault()
      let peep = document.getElementById('peep')
      chitter.postPeep(peep.value)
      chitter.renderPost()
    });
  });
});
