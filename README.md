Chitter API Frontend Challenge (JavaScript)
=================

The purpose of the challenge was to create a single page Twitter clone, using only frontend JavaScript using an external API to manage the messages, users and likes. Documentation about API can be found here: [API documentation](https://github.com/makersacademy/chitter_api_backend).

At the current state, the page will show the last 50 messages written by the users, indicating the user who wrote them and the time they were created.

It also allows to login into the web with you username and password (at current state, user needs to have been created manually in advance using curl or browser console).

Once logged in, user can write a new message and post it. The message will be saved on the server and the page will refresh automatically to show this last message and clear the input box to write a new message if wanted to.

Added some CSS to make the page look nicer.


Getting started:
-----

Install package:
```
npm install
```

Usage:
-----

Run on the terminal `open index.html` to open the page on the browser


Running tests:
-----

Run `jest` on main folder
