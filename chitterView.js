const ChitterApi = require('./chitterApi.js');

class ChitterView {

  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.signed_In = localStorage.getItem("sign_in_details")
    // console.log(this.signed_In)

    this.username = this.api.my_username()
    this.user_id = this.api.user_details().user_id
    this.user_id = this.api.user_details().session_key
    // console.log(this.username)

    this.user = `${this.username} Signed In`

    this.mainContainerEl = document.querySelector('#main-container');
    this.detailsEl = document.querySelector('#details-of-user')

    const signInForm = document.getElementById('sign-in')
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const handle = String(document.querySelector('#username').value);
  const password = String(document.querySelector('#password').value);
  console.log({handle:handle,password:password});
  this.api.signIn({handle:handle,password:password});
});
  }

  viewMyDetails() {
    const myDetailsEl = document.createElement('div')
    myDetailsEl.className = 'my-details'
    myDetailsEl.innerText = this.user
    this.detailsEl.append(myDetailsEl);
  }

  successful_signin(input) {
    const myDetailsEl = document.createElement('div')
    myDetailsEl.className = 'my-details'
    myDetailsEl.innerText = input
    this.detailsEl.append(myDetailsEl);
  }


  displayChitts() {
    // const removeNote = document.querySelectorAll('.note');
    // removeNote.forEach(note => {
    //   note.remove();
    // })
    
    // document.querySelector('#addChitt').value=""

    const chitts = this.model.getChitts()
    
    chitts.forEach(chitt => {
      const chittEl = document.createElement('div')
      let people
      if (chitt.likes === 1) {people = 'person'}
      else {people = 'people'}
      chittEl.innerText = `\n ${chitt.user}: ${chitt.chitt} \n Posted at:${chitt.posted} \n Liked by ${chitt.likes} ${people}`;
      chittEl.className = `chitt ${chitt.id}${chitt.posted}`;
      this.mainContainerEl.append(chittEl);
    });
    
  };

}

module.exports = ChitterView;