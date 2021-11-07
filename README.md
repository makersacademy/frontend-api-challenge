# Anthony's Chitter API Frontend Challenge

To setup:  
`git clone https://github.com/AJOsmaston/frontend-api-challenge.git`

Install the dependencies:  
`npm install`

Run the project:  
`npm run build`  
`open index.html`

Project Key Features:
-----
* Most recent 50 peeps are displayed on the right side of the screen
* Peeps are sorted with the most recent at the top
* Peeps have user that posted the peep, body of peep, and approximate time ago the peep was posted
* Can register a new user
* Can log in with an existing user (checks for authentication)
* After logging in, can post a new peep and see peep update in real time

Key skills demonstrated:
-----
* Javascript
* API calls via fetch
* Manipulation of the JS DOM
* HTML
* CSS

Overall thoughts
-----

I have identified that a key weekness I have at the moment is being able to test drive a web application using Javascript - this is somewhere that I will be looking to focus my education when I get a chance. I'm moderately happy with the functionality that the application has, but feel if I were to continue I would be better refactoring the existing code so that it was easier to follow.   
  
I would love to extend the project by looking into some JS frameworks (such as react) in order to make the SPA more reactive and user friendly.  

The Challenge:
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
