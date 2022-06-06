# Chitter API Frontend Challenge

## Motivation

The purpose of this challenge is to write a Single Page Application that makes calls to back end server for 'Chitter'. The following API interactions were provided by the server:

* Creating Users
* Logging in
* Posting Peeps
* Viewing all Peeps *(I suggest you start here)*
* Viewing individual Peeps
* Deleting Peeps
* Liking Peeps
* Unliking Peeps

## Functions Implemented

* Logging In - This requires users to already be signed up. With further time I would have implemented a signing up feature.
* Viewing Peeps - The page automatically renders the most recent 50 peeps.
* Posting Peeps - You can post a peep, which is then saved on the server.

## Functions to be Implemented

* Creating Users
* Viewing individual Peeps
* Deleting Peeps
* Liking Peeps
* Unliking Peeps

## Structure

The Application is split into three classes, each with distinct responsibilities:

* ChitterApi - handles outgoing and incoming fetch requests with asynchronus fucntions.
* ChitterModel - manages and manipulates data (peeps) which come from the server.
* ChitterView - this is responsible for the functions of the user interface. It displays peeps and extracts data input by the user for requests sent by the API.

The application is rendered through an HTML file, which runs a bundled script of the classes above, plus an 'index' script, which executes the classes and functions on the web page.
With more time I would have stylised the page using CSS.

The backend server was already created by Makers. The API documentation are found through the following link:

[Chitter Backend](https://github.com/makersacademy/chitter-challenge)

## How to Use

 - Fork and clone repository.
 - Install jest, node and npm.
 - To run tests, run 'jest' from the terminal.
 - To open the page run 'open index.html' from the terminal.
