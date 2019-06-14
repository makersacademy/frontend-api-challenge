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