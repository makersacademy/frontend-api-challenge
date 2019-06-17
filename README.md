# Ed's Chitter API Frontend Challenge

![](chitter.gif)


To check:
-------
Download or fork this repo and open the ```chitter.html``` file

Progress:
-------

* Display the last 50 peeps in reverse order
* Register and Login options, with error handling. Sort of.
* Post new tweets as logged in user

Bugs
-----------

* refresh button doesn't seem to work properly
* the saved username for the greeting element doesn't seem to get correctly overwritten with a new login
* probably countless others I haven't spotted yet
* registering also logs you in, as it should, but still triggers the login modal for some reason
* buttons are sometimes appearing inconsistently

To Do:
------
SOOOOOO MUCH
* no tests done at all. really struggled with this and ended up working on the code exclusively
* this meant that I didn't have a clear process at all, which made it super tough
* I don't know how much of this is me not getting TDD well enough, and how much is struggling with new language, test framework etc
* loads of refactoring to do
* all of the extra functionality
* css is a mess

What I was working from;
------------

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
