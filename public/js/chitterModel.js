function User() {
  Object.defineProperties(this, {
    "handle": {
      "get": function() { return this._handle },
      "set": function(handle) { this._handle = handle }
    },
    "password": {
      "get": function() { return this._password },
      "set": function(password) { this._password = password }
    }
  })
}

function Session() {
  Object.defineProperties(this, {
    "userId": {
          "get": function() { return this._userId },
          "set": function(userId) { this._userId = userId }
    },
    "sessionKey": {
      "get": function() { return this._sessionKey },
      "set": function(sessionKey) { this._sessionKey = sessionKey }
    }
  })
}

function Peeps() {
  Object.defineProperties(this, {
    "all": {
          "get": function() { return this._peeps },
          "set": function(peeps) { this._peeps = peeps }
    },
  })
}