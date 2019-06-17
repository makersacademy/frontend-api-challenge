# Chitter API Frontend Challenge
Created a front end in JS, using JQuery and html files(added bootstrap for styling).
The page is displaying all the peeps when it first loads.
You can create a new user, log in log out and create new peeps after logging in.

The application is making ajax calls to the backend api to create users, log users in and add new peeps.

There was not enough time to finish the challenge in one day. Improvements:
  - I should have written tests, split controller into multiple files and remove commented out code as well as fix the indentations
  - I should have added navigation bar instead of buttons to add users etc.
  - styling is not great, need to look into overwriting the space after hiding fields
  - the modal that enables creating new posts should disappear after posting and content of the message should be wiped out

Challenge:
-------

The scenario is similar to the [Chitter Challenge](https://github.com/makersacademy/chitter-challenge), except someone has already built a backend API for you and hosted it on Heroku.

Your task is to build a front-end single-page-app to interface with this API. You can do this in any framework you like, or in pure Javascript. [The API documentation is here.](https://github.com/makersacademy/chitter_api_backend)

Here are some interactions the API supports. Implement as many as you see fit.

* Creating Users
* Logging in
* Posting Peeps
* Viewing all Peeps *(I suggest you start here)*
* Viewing individual Peeps
* Deleting Peeps
* Liking Peeps
* Unliking Peeps

We are looking for well tested, easy to read, easy to change code. This is more important than the number of interactions you implement.

Note that others may be doing the same task at the same time, so the data may change as you are using it.

## Utilities you might find useful

* [The Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for making requests.
* [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/) for exploring the API.
