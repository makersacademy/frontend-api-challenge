
Chitter
=================

![Screenshot](https://github.com/Timdavidcole/Chitter-frontend-api-challenge/blob/master/public/Chitter-Test.png)

[Click here to view](https://chitter-frontend-api-challenge.herokuapp.com/)

## The Task

To make my first React project, a Twitter clone called Chitter! Using a pre-made [API](https://github.com/Timdavidcole/Chitter-frontend-api-challenge/blob/master/README.old.md).

## My Approach

- This was a mid-bootcamp project at Makers Academy.  They provided us with a backend API and asked us to construct a single page front-end in Javascript.  I thought this a good time to learn React so thought I'd give it a go in that!
- It's been a hell of a challenge.  I'm a Javascript novice at best, JQuery about the same, HTML/CSS nothing to write home about, so not the firmest foundations to pick up a whole new framework.  And rather than putting myself through the tutorials grindstone, I thought I may as well just throw myself in head first into a tricky project.
- I decided to just use React's "create-react-app" toolset to limit my variables.  https://github.com/facebook/create-react-app.  I think in future I'll try to use vanilla, but it's been a great help with keeping me on the straight and narrow & debugging.
- (Don't tell my coaches) Seeing as I was trying to pick up a new framework I decided against TDD-ing this project.  There was too much to pick up without worrying about testing frameworks as well.  My next main goal is to add a complete testing suite if I have time.

### Usage

- Just go to the Heroku deployment - [https://chitter-frontend-api-challenge.herokuapp.com/](https://chitter-frontend-api-challenge.herokuapp.com/)
- Or install locally in your terminal
```
git clone git@github.com:Timdavidcole/frontend-api-challenge.git
cd frontend-api-challenge
//Make sure you have the latest Node & NPM installed//
(in browser) visit->download->install https://nodejs.org/en/
npm install
//TO LAUNCH//
npm start
```

## How to use the site

- Not exactly brimming with features as was restricted by the API. But you can...
```
View All Peeps
Log In
Sign Up
Post a Peep
Like a Peep
Unlike a Peep
Delete your Peeps
Log Out
```
- Usage should be fairly self explanatory!

### Challenges

- Man...  I spent a LONG time fiddling around with this one.  Just getting my head around the way state, props and the React lifecycle work was a bit of an adventure.
- I went down a massive rabit hole of trying to get react-bootstrap drop down login/signup elements to work but they defeated me!  So I just implemented my own version (which I'm pretty happy about).  The logic for making one disappear when you click the other took a particularly long time!
- I stole a bit of CSS for the Home-Own Peeps menu animation.  Pretty groovy but rather unneccessary haha.
- Managed to get CSSTransitionGroup working, so now when your peeps update they fade in (just the changing elements).  That took a while to work out too, needed to make sure each Peep had a unique key.
- The liking function was particularly tricky.  Especially liking/deleting like in real time.

### Future Challenges

- Testing!!!  Jest looks the way to go with React.
- Major MAJOR refactoring.  The project is a mess at the moment, there's some mammoth functions and very little DRY/SRP.
- The speed at which the Like button changes colour after liking is painfully slow, no doubt due to some over-engineered code on my part.  Would like to change.
- Maybe design my own backend API.  We did actually do this a while back on the course, in Sinatra. At some point I want to learn Node.js so this could be a great test bed for that.  Although saying that I do like seeing all my coursemate's gibberish test Peeps in the feed.
- Customize appearance.  Maybe 4 or 5 themes you can select from.
- Maybe get it looking nicer on mobile.  Very much out of the scope of this challenge, but looks a little janky.
