# Chitter API Frontend Challenge

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


### My Approach


#### View all Peeps

I will begin by tackling the first challenge which is to simply view all peeps, to do this I will begin by test driving the following

- [x] Begin by setting up the directory with the necessary packages and a simple index.html which displays Chitter

chitterModel class:
- [x] This will be responsible for holding all the peeps and in the future communicating with the backend database
- [x] should be able to getPeeps() which should return all peeps
- [x] should be able to add a new peep

chitterView class:
- [x] This class will be responsible for displaying the data from the model and database
- [x] should be able to displayPeeps() from the ChitterModel 


#### Posting Peeps

To complete this I will add a button allowing users to add a new peep to the ChitterModel, this button should also refresh the page showing the new peep added to the webpage.

- [x] Create a test that fills in a field with a new peep looks for a button, clicks it and expect the new peep to be added to the page.
- [x] begin by creating the input field and the Add Peep button
- [x] Create a method called addNewPeep() in ChitterView which adds the content in the input field to the ChitterModel
- [x] Then add an event listener to this button which calls addNewPeep() to add a peep and then calls displayPeeps() to refresh the page

Now the new peeps are successfully being added to the page, however the older peeps are not being removed so we are ending up with duplicates, and the input field is not being cleared.

Lets solve these issues before moving on to the next feature.

- [x] let begin by creating a test that adds two peeps and expects that only those two peeps remain on the page i.e. expects no duplicate peeps to show up

The problem is that whenever displayPeeps() is called it just generates all the peeps without clearing the page of the previous peeps
- [x] to pass this test I will need to create a method to clear all peeps from the page and make displayPeeps() call this method first before doing anything that way it can start with a clean page.

now lets clear the message input
- [x] lets create a test which fills the input field and clicks Add peep button and expects the input field value to be null

The simplest way to empty the input field is to replace the text currently in the input field with a pair of quotes "" i.e an empty string 
- [x] create a method called clearInputField() which replaces the inputEl value with an empty string


#### Linking the backend server

Now we have the frontend set up to display and add new peeps, now lets introduce the backend server using a fetch command. Let start with fetching the peeps from the backend server and displaying them on our website.

- [ ] To begin lets testdrive the creation of a ChitterApi class with a method to loadPeeps() from the backend make sure to mock fetch in this situation.