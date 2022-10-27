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
class ChitterClient {
  loadPeeps() {}

  createUser() {}

  newSession() {}

  postPeep() {}
}
```

## 4. Model class

- To create and add new user

```javascript
class PeepModel {
  getPeeps() {}

  addPeep() {}

  setPeeps() {}
}
```

- To create and add new messages

```javascript
class UserModel {
  getUser() {}

  setUser() {}

  addUser() {}
}
```

## 5. View class

- To interact with html page, loading the data from model class.

```javascript
class ChitterView {
  addNewPeep() {}

  displayPeeps() {}

  displayPeepsFromApi() {}

  signUP() {}

  logIn() {}
}
```
