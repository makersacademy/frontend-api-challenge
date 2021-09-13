# Chitter API Frontend Challenge

## About this app

This (incomplete) program provides the front end for the Chitter API. You can:

- create a user
- log in
- see a list of the 50 latest peeps
- send a peep (when logged in)

There is also code to allow the user to view a single peep, but this is not yet implemented into the interface.

The interface.js file is not tested, but there are Jasmine tests to check the API-calling functions.

## Installation Instructions

```
https://github.com/edpackard/frontend-api-challenge.git
```

## How to use this app

```
cd frontend-api-challenge
open index.html
```

- by default the app will show a list of 50 peeps
- first, create a new account by clicking `Create User` and enter your details followed by clicking `Submit`
- if your account is successfully created, click `Log In` and enter your handle and password followed by clicking `Submit`
- to send a peep, when logged in, click `Send a Peep`, enter some text, and click `Peep!`
- to return to the list of peeps at any point, click `See all Peeps`

Be warned, `Create User` and `Log In` are not fully functional yet and contain several bugs: for instance, you will receive a successful log in message regardless of whether the attempt was successful or not. You will know if you actually succeeded if you can send a peep or not.

## How to run the tests

```
cd frontend-api-challenge
open SpecRunner.html
```

## What I learned

I had huge fun with this weekend challenge: I accepted that owing to a busy weekend I would not get as much time as usual on the challenge, and decided to see what I could learn and do in the time I had, rather than putting excessive pressure on myself. I was surprised by how much I managed to achieve with this approach! What I am most pleased with:

- learning how to test API fetch requests with Jasmine
- making 'POST' fetch requests
- using session storage
- using `style.display = "block"` and `style.display = "none"` to switch HTML elements on and off - probably not the most elegant way to do this, but it worked!
- showing more patience in researching how to solve a problem
- gaining more confidence in navigating the DOM

In terms of future improvements, I think my project suffered from a lack of planning: now I have more experience with APIs and JS, I think I'd be more confident in planning out the project next time. I also think my approach to displaying/hiding elements on the page was rather rough and ready, and would appreciate feedback on different approaches.

## Things to do

- more (and better) tests - at the moment tests are very basic
- display more info on peeps: handle, time/date etc.
- include buttons for user to move to another page after creating new user/sending peep/logging in etc.
- implement error handling for create user/login/sending peep - at the moment, will always give positive message even if unsuccessful (though page gives alert if try to send peep without logging in)
- when user is logged in, display status in header 'user_name is logged in'
- allow user to click on a peep to view it on own page
- provide log out button/functionality
- hide create user button when user logged in
- do not display peep link/box if no user logged in
- wipe innerHTML of the div tags in SpecRunner.html after each test
- deleting peeps functionality
- liking / unliking peeps functionality
- more and better css

## Challenge:

We are going to write a small Twitter clone that will allow the users to post messages to a public stream.

The scenario is similar to the [Chitter Challenge](https://github.com/makersacademy/chitter-challenge), except someone has already built a backend API for you and hosted it on Heroku.

Your task is to build a front-end single-page-app to interface with this API. You can do this in any framework you like, or in pure Javascript. [The API documentation is here.](https://github.com/makersacademy/chitter_api_backend)

Here are some interactions the API supports. Implement as many as you see fit.

- Creating Users - done (though needs polishing)
- Logging in = done (though needs polishing)
- Posting Peeps - done (though needs polishing)
- Viewing all Peeps - done (though needs polishing)
- Viewing individual Peeps - code exists, but not implemented
- Deleting Peeps
- Liking Peeps
- Unliking Peeps

We are looking for well tested, easy to read, easy to change code. This is more important than the number of interactions you implement.

Note that others may be doing the same task at the same time, so the data may change as you are using it.

## Utilities you might find useful

- [The Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for making requests.
- [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/) for exploring the API.
