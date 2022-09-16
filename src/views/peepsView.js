class PeepsView {
  constructor(model, api) {
    this.model = model
    this.api = api
    this.containerCreateUser = document.getElementById('container-createUser');
    this.showCreateUserbtn = document.getElementById('showCreateUser');
    this.createUserFormBtn = document.getElementById('createUserFormBtn')

    //Create User Button
    this.showCreateUserbtn.addEventListener('click', () => {
      if (this.containerCreateUser.style.visibility === 'hidden') {
        this.containerCreateUser.style.visibility = 'visible';
  
        this.showCreateUserbtn.textContent = 'Cancel creating an account';
      } else {
        this.containerCreateUser.style.visibility = 'hidden';
  
        this.showCreateUserbtn.textContent = 'Create an account';
      }
    });

    //Create user form button
    this.createUserFormBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.createUser()
    })
   

  };

  createUser() {
    const username = document.getElementById('createUsername').value
    const password = document.getElementById('createPassword').value
    this.api.createUser(username, password, (data) => console.log('Successful store of:' + data.handle))
  }
}

module.exports = PeepsView