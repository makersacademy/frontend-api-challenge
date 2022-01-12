# Chitter API Frontend

The task was to write a small Twitter clone using Javascript that will allow the users to post messages to a public stream. The backend API was already built and hosted on Heroku, [see the API documentation here.](https://github.com/makersacademy/chitter_api_backend)

### Use

Simply open the `index.html` file in a browser of your choice.

### Functionality

* View the most recent 50 'peeps' from newest to oldest
* Create user
* Log in
* Post peep

### Approach

My first focus was on using fetch to get the data to the page. I started with a simple GET request, using the developer console to guide and debug, before moving on to other routes.

Once I had the functionality I wanted I then began to think about what I wanted to learn from implementing a front end. I really wanted to see how a single webpage application would work and how it differs to a multi-webpage application, so the main area I decide to focus on was making a sign-up and log-in box appear on the screen. 

### Reflections

My first solution was a Javascript-heavy solution, whereby the HTML elements were created in Javascript when a button was clicked. This was largely done before researching the best way to implement my desired outcome and was not in hindsight the best approach, but it was helpful for learning purposes such as how to manipulate the DOM. I refined the approach with the help of resources. Instead, the elements were written in the HTML and CSS files, and Javascript was used simply to make the box appear/dissappear. 

Although I think I extracted much of what I wanted in terms of learning outcomes from this exercise, there are a few more actions I would like to take. I am less concerned with implementing more features, and more concerned with improving the depth of the coding. For example, I encountered the issue that the fetch API function is not readily available in NodeJS; I spent some time trying to mock or import a module to fix the issue, but in the end decided to direct my attention elsewhere. I would also like to look at edge cases, and look at how the code would differ with ES6 updates.
