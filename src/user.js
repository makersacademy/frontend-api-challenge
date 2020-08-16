'use strict';

class User {
  constructor() {}
}

User.createNewUser = function(ajaxFunction, handle, password) {
  let newUserResult = new Promise(function(resolve) {
    ajaxFunction({
      url: "https://chitter-backend-api-v2.herokuapp.com/users",
      method: 'POST',
      data: {"user": {"handle":handle, "password":password}},
      success: function(result) {
        console.log(result)
        resolve(result)
      }
    })
  })
  return newUserResult
}