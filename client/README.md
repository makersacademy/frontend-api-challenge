Users
POST /users
Creates a new user.

curl "https://chitter-backend-api.herokuapp.com/users" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"user": {"handle":"kay", "password":"mypassword"}}'
On success, the above command returns JSON structured like this:

{
  "id" : 1,
  "handle" : "kay"
}
Sessions
POST /sessions
Creates a new session, giving you a user_id and session_key required to perform actions on behalf of the user (e.g. posting peeps, liking peeps).

Creating a new session renders any previous session_keys invalid.

curl "https://chitter-backend-api.herokuapp.com/sessions" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"session": {"handle":"kay", "password":"mypassword"}}'
On success, the above command returns JSON structured like this:

{
  "user_id": 1,
  "session_key": "a_valid_session_key"
}
Peeps
GET /peeps
Returns a list of the last 50 peeps in reverse chronological order.

curl "https://chitter-backend-api.herokuapp.com/peeps"
On success, the above command returns JSON structured like this:

[
  {
    "id": 3,
    "body": "my first peep :)",
    "created_at": "2018-06-23T13:21:23.317Z",
    "updated_at": "2018-06-23T13:21:23.317Z",
    "user": {
      "id": 1,
      "handle": "kay"
    },
    "likes": [{
      "user": {
        "id": 1,
        "handle": "kay"
      }
    }]
  }
]
POST /peeps
Creates a new Peep.

This endpoint requires a user_id and session_key given as a token in the authorization header.

curl "https://chitter-backend-api.herokuapp.com/peeps" \
  -X POST \
  -H "Authorization: Token token=a_valid_session_key" \
  -H "Content-Type: application/json" \
  -d '{"peep": {"user_id":1, "body":"my first peep :)"}}'
On success, the above command returns JSON structured like this:

{
  "id": 3,
  "body": "my first peep :)",
  "created_at": "2018-06-23T13:21:23.317Z",
  "updated_at": "2018-06-23T13:21:23.317Z",
  "user": {
    "id": 1,
    "handle": "kay"
  },
  "likes": [{
    "user": {
      "id": 1,
      "handle": "kay"
    }
  }]
}
GET /peeps/:id
Returns a single Peep.

curl "https://chitter-backend-api.herokuapp.com/peeps/1"
On success, the above command returns JSON structured like this:

{
  "id": 1,
  "body": "my first peep :)",
  "created_at": "2018-06-23T13:12:29.945Z",
  "updated_at": "2018-06-23T13:12:29.945Z",
  "user": {
    "id": 1,
    "handle": "kay"
  },
  "likes": []
}
DELETE /peeps/:id
Deletes a Peep.

This endpoint requires a user_id and session_key given as a token in the authorization header.

curl "https://chitter-backend-api.herokuapp.com/peeps/1" \
  -X DELETE \
  -H "Authorization: Token token=a_valid_session_key"
The above command returns a 204: No Content response on success.

Likes
PUT /peeps/:peep_id/likes/:user_id
Adds a Like to the Peep by the User.

This endpoint requires a user_id and session_key given as a token in the authorization header.

curl "https://chitter-backend-api.herokuapp.com/peeps/2/likes/1" \
  -X PUT \
  -H "Authorization: Token token=a_valid_session_key"
On success, the above command returns JSON structured like this:

{
  "user": {
    "id": 1,
    "handle": "kay"
  }
}
DELETE /peeps/:peep_id/likes/:user_id
Removes the Like on the Peep by the User.

This endpoint requires a user_id and session_key given as a token in the authorization header.

curl "https://chitter-backend-api.herokuapp.com/peeps/2/likes/1" \
  -X DELETE \
  -H "Authorization: Token token=a_valid_session_key"
The above command returns a 204: No Content response on success.

Error responses
The create/update endpoints return errors of the form:

{
  "peep": ["handle already taken"]
}


Creating Users
Logging in
Posting Peeps
Viewing all Peeps (I suggest you start here)
Viewing individual Peeps
Deleting Peeps
Liking Peeps
Unliking Peeps