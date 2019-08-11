
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
//Make sure you have the latest NPM & Node installed//
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
Delete your Peeps
```
- Usage should be fairly self explanatory!

### Final thoughts

- This was a lot of fun to make.  I would like to implement a database system, maybe to store results for multiple rounds with multiple players.  If I get time I'll definitely have a go.
- I probably should have refactored out another main object Frame, as my Bowling object is doing an awful lot at the moment.  But I think my code is fairly clear, so I decided to go with simplicity rather than the Single Responsibility Principle.
- I spent HOURS trying to get that bloody 10 button's text aligned properly, but it defeated me.  I would love to know how to fix it!
- I'm particularly pleased with animations on the Start New Game button.
- Would like to tweak the UI to display a more traditional bowling scorecard design.
- Maybe implement Node.js rather than Sinatra.
