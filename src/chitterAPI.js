class chitterAPI {
  constructor() {
    this.url = 'https://chitter-backend-api.herokuapp.com';
    this.sessionKey;
    this.sessionUserId;
  }

  renderPeeps() {
    $.get(`${this.url}/peeps`, function(responseData) {
      $(responseData).each(function() {
        $('#listPeeps').append(`<li class="peep" id="${this.id}">${this.body}<br>${this.user.handle} <br>${this.created_at.substr(11,5)} ${this.created_at.substr(0,10)}</li>`)
      })
    })
  }

  signUpUser(handle, password) {
    var userData = {"user": {"handle":handle, "password":password}};
    console.log(userData)

    this._createUser(userData).then(
      console.log("user sign up successful")
    )
  }

  loginUser(handle, password) {
    var userData = {"handle":handle, "password":password};
    this._createSession(userData); // doesn't need to create user but otherwise same process
  }

  _createUser(userData) {
    console.log("create user ajax request")
    var userPromise = $.ajax({
      method: 'POST',
      url: `${this.url}/users`,
      headers: 'Content-Type: application/json',
      data: userData,
      error: function(error) {
        console.log('error')
      },
      success: this._createSession
    })
    return userPromise;
  }

  _createSession() {
    var sessionData = {"session": {"handle":handle, "password":password}};
    console.log("create session ajax request")
    var sessionPromise = $.ajax({
      method: 'POST',
      url: `https://chitter-backend-api.herokuapp.com/sessions`, //'this' updated to /user ?
      headers: 'Content-Type: application/json',
      data: sessionData,
      error: function(error) {
        console.log('Failed to create session ' + error)
      },
      success: function(sessionInfo){
        console.log('In success for create session. ' + sessionInfo);
        this.sessionUserId = sessionInfo.user_id;
        this.sessionKey = sessionInfo.session_key;
      }
    })
    return sessionPromise;
  }

}
