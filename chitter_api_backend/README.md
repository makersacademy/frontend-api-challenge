## Chitter Backend

This is an API backend for a \*witter-like app. It has users, sessions posts,
and likes.

It is deployed at `https://chitter-backend-api-v2.herokuapp.com/`

## API docs

Each of these API endpoints are illustrated by a curl command that you can paste into your terminal to play around with.

If you ever need more information, pass the `-v` flag to curl in addition to the stated arguments. This will put it into verbose mode, and will show you the HTTP response code and other useful debugging information.

### Users

#### POST `/users`

Creates a new user.

```bash
curl "https://chitter-backend-api-v2.herokuapp.com/users" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"user": {"handle":"kay", "password":"mypassword"}}'
```

On success, the above command returns JSON structured like this:

```json
{
  "id" : 1,
  "handle" : "kay"
}
```

### Sessions

#### POST `/sessions`

Creates a new session, giving you a `user_id` and `session_key` required to perform actions on behalf of the user (e.g. posting peeps, liking peeps).

Creating a new session renders any previous `session_key`s invalid.

```bash
curl "https://chitter-backend-api-v2.herokuapp.com/sessions" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"session": {"handle":"kay", "password":"mypassword"}}'
```

On success, the above command returns JSON structured like this:

```json
{
  "user_id": 1,
  "session_key": "a_valid_session_key"
}
```

### Peeps

#### GET `/peeps`

Returns a list of the last 50 peeps in reverse chronological order.

```
curl "https://chitter-backend-api-v2.herokuapp.com/peeps"
```

On success, the above command returns JSON structured like this:

```
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
```

#### POST `/peeps`

Creates a new Peep.

This endpoint requires a `user_id` and `session_key` given as a token in the authorization header.

```bash
curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
  -X POST \
  -H "Authorization: Token token=a_valid_session_key" \
  -H "Content-Type: application/json" \
  -d '{"peep": {"user_id":1, "body":"my first peep :)"}}'
```

On success, the above command returns JSON structured like this:

```json
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
```

#### GET `/peeps/:id`

Returns a single Peep.

```bash
curl "https://chitter-backend-api-v2.herokuapp.com/peeps/1"
```

On success, the above command returns JSON structured like this:

```json
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
```

#### DELETE `/peeps/:id`

Deletes a Peep.

This endpoint requires a `user_id` and `session_key` given as a token in the authorization header.

```bash
curl "https://chitter-backend-api-v2.herokuapp.com/peeps/1" \
  -X DELETE \
  -H "Authorization: Token token=a_valid_session_key"
```

The above command returns a `204: No Content` response on success.

### Likes

#### PUT `/peeps/:peep_id/likes/:user_id`

Adds a Like to the Peep by the User.

This endpoint requires a `user_id` and `session_key` given as a token in the authorization header.

```bash
curl "https://chitter-backend-api-v2.herokuapp.com/peeps/2/likes/1" \
  -X PUT \
  -H "Authorization: Token token=a_valid_session_key"
```

On success, the above command returns JSON structured like this:

```json
{
  "user": {
    "id": 1,
    "handle": "kay"
  }
}
```

#### DELETE `/peeps/:peep_id/likes/:user_id`

Removes the Like on the Peep by the User.

This endpoint requires a `user_id` and `session_key` given as a token in the authorization header.

```bash
curl "https://chitter-backend-api-v2.herokuapp.com/peeps/2/likes/1" \
  -X DELETE \
  -H "Authorization: Token token=a_valid_session_key"
```

The above command returns a `204: No Content` response on success.

### Error responses

The create/update endpoints return errors of the form:

```json
{
  "peep": ["handle already taken"]
}
```

## API Development Quickstart

**If you're doing the challenge — you don't need to do this.**

```bash
$ bundle
$ rspec
$ rails server
```

### Heroku

Auth details for the Makers Heroku account are in 1passward

#### Logs
```bash
$ heroku logs -a chitter-backend-api-v2
```
