# ONE PAGE CHITTER CHALLENGE
* This is my attempt at the one page [Chitter challenge] (https://github.com/makersacademy/frontend-api-challenge)


## NOTE TO REVIEWER
* Below is a list of what functionalities I have managed to implement.

* Apologies if the code is not the most readable - this is my first attempt at using several jQuery Ajax API requests.

* To run the page in your web browser:
- Clone this repo,
- Run ```node node_modules/http-server/bin/http-server``` from your terminal.
- Browse the page at the URL in the console output, e.g.
```
localhost:8080
```

* To run the capybara tests:
- run ```bundle``` from your terminal to get the necessary Ruby gems
- run ```rspec```

* Unfortunately if you make a new peep it does not show up until you refresh the page. Alas, I ran out of time to work out what the issue was with this.

## Approach
* I used TDD with capybara and a sinatra server. There may be a better solution to TDD for a front-end only program but, given the time constraints, I went with what I was familiar with.

* I used jQuery Ajax get and post requests to send and receive data from the API, details of which can be found [here](https://github.com/makersacademy/chitter_api_backend)

* If I had more time I would have liked to have used mocks and stubs for testing creating user accounts and posting pretend tweets. Instead I feature tested these manually on the web page itself.  

## Functionalities to implement in order of importance
* ✅ Viewing all Peeps *(I suggest you start here)*
* ✅ Creating Users
* ✅ Logging in
* ✅ Posting Peeps
* Viewing individual Peeps (although if you click on the hyperlink it will show that page at the top)
* Deleting Peeps
* Liking Peeps
* Unliking Peeps

# INSTRUCTIONS

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday morning

Challenge:
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
