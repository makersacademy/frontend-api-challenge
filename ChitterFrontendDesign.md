# Chitter Frontend web application design recipe

To build a front-end single-page-app to interface with the API

## 1. Describe the problem

- Creating users
- Logging in
- Posting peeps
- Viewing all Peeps

## 2. Design classes

- To visualise the frame work of the application

1. client to fetch API
2. model to be bundled and loaded by the web page
3. View class to reflect model's data on the page by dynamically creating HTML elements

## 3. API class

- fetch API to make an HTTP request to back-end server

```javascript
class chitterClient {
  loadPeeps() {
    // GET all peeps data
  }

  createUser(userId, passowrd) {
    // POST to create a new user
  }

  newSession(userId, password) {
    // POST to create a new log in session
  }

  addPeep(uerId, sessionKey, newPeep) {
    // POST to add new peep
  }
}
```

## 4. Model class

- To create and add new user

```javascript
class PeepModel {
  getPeeps() {
    // returns the list of peeps
  }

  addPeep(peep) {
    // adds new peep
  }

  setPeeps() {
    // retrieve peeps from the API
  }
}
```

- To create and add new messages

```javascript
class UserModel {
  getUser() {
    // returns user object with userId and handle
  }

  setUser(UserId, userHandle) {
    // retrieve user data from the API after creating a new user
  }

  getSession() {
    // get session to start a new session
  }

  setSession(userId, sessionKey) {
    // retrieve user session data from the API
  }

  reset() {
    // reset the session
  }
}
```

## 5. View class

- To interact with html page, loading the data from model class.

```javascript
class ChitterView {
  addNewPeep(newPeep) {
    // add peeps into the peepModel
  }

  displayPeeps() {
    // display all peeps added
  }

  displayPeepsFromApi() {
    // display all peeps data from Api
  }

  signUP() {}

  logIn() {}
}
```
