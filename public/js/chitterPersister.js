function UserPersister() {
}

UserPersister.prototype = {
  create: function(handle, password, callback) {
    $.ajax({
      type: 'POST',
      url: `https://chitter-backend-api.herokuapp.com/users`,
      data: { "user": {'handle': handle, 'password': password} }
    })
    .done(function(result){
      console.log(result)
      callback(result)
    })
  }
}

function SessionPersister() {
}

SessionPersister.prototype = {
  create: function(handle, password, callback) {
    $.ajax({
      type: 'POST',
      url: `https://chitter-backend-api.herokuapp.com/sessions`,
      data: { "session": {'handle': handle, 'password': password} }
    })
    .done(function(result){
      console.log(result)
      callback(result)
    })
  }

}

function PeepsPersister() {
}

PeepsPersister.prototype = {
  create: function(session, body, callback) {
    $.ajax({
      type: 'POST',
      url: `https://chitter-backend-api.herokuapp.com/peeps`,
      data: { "peep": {'user_id': session.userId, 'body': body} },
      headers: {"Authorization": "Token token=" + session.sessionKey}
    })
    .done(function(result){
      console.log(result)
      callback(result)
    })
  },

  get: function(callback) {
    $.ajax({
      type: 'GET',
      url: `https://chitter-backend-api.herokuapp.com/peeps`
    })
    .done(function(result){
      console.log(result)
      callback(result)
    })
  }
}