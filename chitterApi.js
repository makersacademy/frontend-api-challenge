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
   if ( localStorage.getItem("created_account") === null)
    {this.created_account= "No New account created"}
    else
    {this.created_account = localStorage.getItem("created_account")};
  }




  loadChitts(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  }

  signOut() {
    console.log("I'm signing out!")
    this.user_data = {user_id: 0, session_key: 0}
    localStorage.setItem('user_data', this.user_data)
    this.username = 'No User'
    localStorage.setItem('username', this.username)
    this.last_sign_in_outcome = `Signed Out`
    localStorage.setItem('lastsigninsuccess', this.last_sign_in_outcome)
    window.location.reload()
  }

  signUp(details) {
    const user_details = {user:details}
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user_details),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          this.created_account = `Account created! Now please sign in`
          console.log("Created")
          localStorage.setItem('created_account', this.created_account)
        })
        .catch((error) => {
          console.error('Error:', error);
          this.created_account = `Account creation failed`
          console.log("Failed")
          localStorage.setItem('created_account', this.created_account)
        });
  }

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

  postChitt(chitt) {
    console.log(this.user_data)
    const user_data_for_posting = this.user_data.split(",")
    console.log(user_data_for_posting)
    const newinput = {peep:{user_id: user_data_for_posting[0], body:chitt.body }}
    console.log(JSON.stringify(newinput))
    console.log(user_data_for_posting[1])
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': user_data_for_posting[1]
            
          },
          body: JSON.stringify(newinput)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          window.location.reload()
          return data
        })
        .catch((error) => {
          console.log(error);
          console.error('Error:', error);
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