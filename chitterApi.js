class ChitterApi {

  constructor() {
    if ( localStorage.getItem("user_data") === null)
    {this.user_data = {user_id: 0, session_key: 0}}
    else
    {this.user_data = localStorage.getItem("user_data")};
    if ( localStorage.getItem("username") === null)
    {this.username = 'No User'}
    else
   { this.username = localStorage.getItem("username")};
   if (localStorage.getItem("lastsigninsuccess") === null)
   {this.last_sign_in_outcome = 'No sign in'}
   else
   { this.last_sign_in_outcome= localStorage.getItem("lastsigninsuccess")}
  }




  loadChitts(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  }

  signOut() {
    this.user_data = {user_id: 0, session_key: 0}
    this.username = 'No User'
    this.last_sign_in_outcome = 'Signed Out'
    window.location.reload()
  }

  createUser(callback) {}

  signIn(signInDetails) {
    console.log(signInDetails)
    const input = {session: signInDetails}
    console.log(input)
    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(input)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          this.user_data = [data.user_id,data.session_key]
          localStorage.setItem('user_data', this.user_data)
          this.username = input.session.handle
          localStorage.setItem('username', this.username)
          this.last_sign_in_outcome = `Signed in as ${this.username}`
          localStorage.setItem('lastsigninsuccess', this.last_sign_in_outcome)
          window.location.reload()
          return data
        })
        .catch((error) => {
          console.log(error);
          console.error('Error:', error);
          this.last_sign_in_outcome = `Sign in failed`
          localStorage.setItem('lastsigninsuccess', this.last_sign_in_outcome)
          return error
        });
  }

  my_username() {
    return this.username
  }

  user_details() {
    return this.user_data
  }

  last_sign_in() {
    return this.last_sign_in_outcome
  }

 
}

module.exports = ChitterApi;