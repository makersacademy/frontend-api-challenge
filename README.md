# Chitter API frontend in pure vanilla JavaScript

![Homepage](https://i.gyazo.com/8c0c0eb4957b6bd482890c8b9f835492.png)
![Sign up](https://i.gyazo.com/f20854129f91f1b45099c33cf6d94d30.png)
![Deleting/Liking](https://i.gyazo.com/f309a8024a8b0a9a6220ba19b0f70768.gif)

-------

Single page app Twitter clone using makers Chitter API.
[The API documentation is here.](https://github.com/makersacademy/chitter_api_backend)

Here are some interactions the API supports and the ones I have implemented:

* ✔ Creating Users
* ✔ Logging in
* ✔ Posting Peeps
* ✔ Viewing all Peeps
* Viewing individual Peeps
* ✔ Deleting Peeps (only if they are yours)
* ✔ Liking Peeps
* Unliking Peeps

## Using the app

```
git clone https://github.com/ConorButler/frontend-api-challenge.git
cd frontend-api-challenge
npm install
node app.js
```

## Notes
* Refreshing resets the page and the session
* Click anywhere on the background to close a modal

## My Approach
This challenge consumes the Makers Academy Chitter API. As this was built without a framework (I didn't even know what they were at this point), I had trouble managing state, so users are not persisted between refreshes. I reused some styling from my full stack [Ruby twitter clone](https://github.com/ConorButler/chitter-challenge#readme), and tried to implement some fun features like modals, liking and deleting peeps instantly (by manipulating the DOM if the response is ok, instead of doing a full rerender of the feed), and conditionally rendering buttons.
