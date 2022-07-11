# Chitter API Frontend Challenge

This is my version of a challenge to create a frontend of Chitter (A Twitter Clone), using a backend API that had been pre-built.
I used javascript to make the page dynamic and responsive and developed it using TDD.

To install this on your computer
------------------------------
* Clone this respository
* run `npm install` in the local repo on your computer
* run `open index.html` to view the webpage in the browser
* run `jest` to run the tests

Design
-------

![](images/diagram.png?raw=true)

In Use
--------

![](images/pre-login.png?raw=true)

![](images/post-login.png?raw=true)


User Stories
------------

TO BEGIN

`As a maker` \
`So that I can see what others are saying` \
`I want to see all peeps in reverse chronological order` 

`As a Maker` \
`So that I can better appreciate the context of a peep` \
`I want to see the time at which it was made` 

THEN: USER

`As a Maker` \
`So that I can post messages on Chitter as me` \
`I want to sign up for Chitter` 

`As a Maker` \
`So that only I can post messages on Chitter as me` \
`I want to log in to Chitter` 

THEN: POST INTERACTION

`As a Maker` \
`So that I can let people know what I am doing` \
`I want to post a message (peep) to chitter` 

`As a Maker` \
`So that I can show my appreciation for a peep` \
`I want to be able to like a peep`

What I achieved
---------------
I managed to complete my first 5 user stories. You can sign up, login - and once you have done either of those things, you can view the las 50 peeps in reverse chronological order. You can post a peep as you.

What I would add with more time
-----------------------------
* Better CSS. I used the template from https://github.com/makersacademy/javascript-web-applications/blob/main/contents/18_making_it_look_nice.md and adapted it slightly for this.
* Show error messages when the user leaves a field blank for either the username or password, or if the username/password is invalid for login.
* Add text to the 'Share Peep' button.
* Add labels to the form input fields.
* Try to refactor to manage the complexity in my ChitterView and the tests.


Challenge I followed:
-------

As usual please start by forking this repo.

We are going to write a small Twitter clone that will allow the users to post messages to a public stream.

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