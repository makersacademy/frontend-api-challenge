# Chitter API Frontend Challenge

## Approach by Claire Nelson

#### Break down the requirements 

- Capture the flow of how the backend and front end talk to each other [flow diagram](https://github.com/nelsonclaire/frontend-api-challenge/blob/master/images/using-fetch.png). 
- Use https://chitter-backend-api-v2.herokuapp.com/users to test for users you have created and errors for those that already exist.


## Technologies used

- Javascript
- Jest (test framework)
- Esbuild (build tool)
- ESLint (code checker)


## Steps to download

1. Install node if required, which will execute the javascript, from [here](https://nodejs.org/en/)

2. Fork this [repo](https://github.com/nelsonclaire/frontend-api-challenge)

3. `git clone git@github.com:<userName>/frontend-api-challenge.git` onto your local machine

## To bundle the javascript files

1. After cloning run `npm install -g esbuild` from [esbuild](https://esbuild.github.io/getting-started/)

2. Run `npm install`


## To run tests

1. After cloning run `npm init -y`

2. Copy into package.json `"build": "esbuild index.js --bundle  --outfile=bundle.js --watch"` under scripts as show below:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "esbuild index.js --bundle  --outfile=bundle.js --watch"
  },
```

3. Run `npm install jest` or `npm install --save jest`

4. Run `npm install --save jest-fetch-mock` for mocks in tests from [jest mock](https://www.npmjs.com/package/jest-fetch-mock)

4. Run `jest` directly in root of your local project

## To install ESLint

1. Run `npm install eslint --save-dev`

2. Install configuration file by running `npm init @eslint/config` (do this after you have package.json installed by running `npm init`)

3. Run `npx eslint yourfile.js` directly in root of your local project

## My approach

1. Break down into simple steps 

2. Write first unit test 

3. Follow red, green, refactor cycle for each test with commits before a refactor

4. Continue with simple tests 

5. Repeat until basic user story functionality is covered

#### Structure
- Specs: `.test.js`
- Models: `.js`

#### What I know I need to work on



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
