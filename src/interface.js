window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  event.preventDefault()
  let element = document.getElementById('app')
  let client = new Client
  let chitter = new Chitter(element, client)
  let viewChitter = new ViewChitter(element)
  viewChitter.renderHomePage()
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
    chitter.createNewUser(event.target[0].value, event.target[1].value)
    viewChitter.renderSignUp()
    let signInForm = document.getElementById('sign-in')
    signInForm.addEventListener('submit', (event) => {
      event.preventDefault()
      chitter.loginUser(event.target[0].value, event.target[1].value)
      viewChitter.renderLogIn()
      let postPeepForm = document.getElementById('post-peep')
      postPeepForm.addEventListener('submit', (event) => {
        event.preventDefault()
        chitter.postPeep(event.target[0].value)
        viewChitter.renderPost()
      });
    });
  })
  let signInForm = document.getElementById('sign-in')
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault()
    chitter.loginUser(event.target[0].value, event.target[1].value)
    chitter.renderLogIn()
    let postPeepForm = document.getElementById('post-peep')
    postPeepForm.addEventListener('submit', (event) => {
      event.preventDefault()
      chitter.postPeep(event.target[0].value)
      chitter.renderPost()
    });
  });
});
