
Chitter (front-end)
=================

![Screenshot](https://github.com/Timdavidcole/frontend-api-challenge/blob/master/public/Chitter-example.png)

## The Task

To make my first React project, a Twitter clone called Chitter!

## My Approach

- This was a mid-bootcamp project at Makers Academy.  They provided us with a backend API and asked us to construct a single page front-end in Javascript.  I thought this a good time to learn React so thought I'd give it a go in that!
- It's been a hell of a challenge.  My javascript is novice at best, JQuery around the same, HTML/CSS nothing to write home about, so not the firmest foundations to pick up a whole new framework!  But I find tutorials a little insubstantive, so thought I may as well throw myself in head first into a tricky project.
- I decided to just use React's "create-react-app" toolset to limit my variables.  https://github.com/facebook/create-react-app.  I think in future I'll just use vanilla, but it's been a great help with keeping me on the straight and narrow & debugging.
- (Don't tell my coaches) Seeing as I was trying to pick up a new framework I decided against TDD-ing this project.  There was too much to pick up without worrying about testing frameworks as well.  My next main goal is to add a complete testing suite if I have time.

### Installation

- In your terminal
```
git clone git@github.com:Timdavidcole/frontend-api-challenge.git
cd frontend-api-challenge
//Make sure you have the latest Node & NPM installed//
(in browser) visit/download/install https://nodejs.org/en/
//TO LAUNCH//
npm start
```

## How to use the site

- Not exactly brimming with features. But you can...
```
View All Peeps
Log In
Sign Up
Post a Peep
Like a Peep
Unlike a Peep
Delete your Peeps
```
- Usage should be fairly self explanatory!

### Challenges

- Man...  I spend a LONG time fiddling around with this one.  Just getting my head around the way state and props work was a bit of an adventure.
- I went down a massive rabit hole of trying to get react-bootstrap drop down login/signup elements to work but they defeated me!  So I just implemented my own version (which I'm pretty happy about).  The logic for making one disappear when you click the other took a particularly long time!
- I stole a bit of CSS for the Home-Own Peeps menu animation.  Pretty groovy but rather unneccessary haha.
- Managed to get CSSTransitionGroup working, so now when your peeps update they fade in (just the changing elements).  That took a while to work out too, needed to make sure each Peep had a unique key.
- 
