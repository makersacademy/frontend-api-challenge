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


Plan for development:

- Test CURL and the api to make requests - figured out a bit about how curl works and how to request Api
- Investigate HTTP server - not entirely sure why this is needed.
- implement the jasmine and it's ducking working? Testing frameworks?
-
- Build Html and CSS and interface JS for viewing all peeps interactions,
- Look at bootstrap -
- Workthrough user stories

- Look at hosting on github?
- Put onto the Github Fork

- If possible look at News Stories

Development notes

1. Installed Jasmine - done
2. Set up Is It Ducking Working? - done (hope to be able to improve on this testing suite)

3. Taking on first user story - viewing all the peeps
  - As a maker, So that I can see what others are saying, I want to see all peeps in reverse chronological order - DONE

  - As a Maker, So that I can better appreciate the context of a peep, I want to see the time at which it was made - DONE
  - Set up a div in the html - Done
  - test out the JS request in the console to the chitter api - DONE
  - set up tests for the interface.js - DONE
  - write interface js code to meet the tests - DONE
  - wrote mocked jasmine and duck tests - DONE
  - developed code to display tweets, using a fetch request to get the api - DONE

  - NEED TO FIX TESTS! - DONE

4. Going to develop creating users and logging in

  - Creating Users
    - As a Maker, So that I can post messages on Chitter as me, I want to sign up for Chitter

    - need a welcome sign at the top - done
    - one buttons - sign up - done
    - when you click it a form appears - done
    - with username, password - done
    - need to build a test on Jasmine - no fail - cannot get a passing test, I figured out how to dummy it, but cannot get past auto clicking the alert.
    - need to build interface login - done

  - Logging in
    - As a Maker, So that only I can post messages on Chitter as me, I want to log in to Chitter
    - As a Maker, So that I can avoid others posting messages on Chitter as me, I want to log out of Chitter

    - need a login button
    - when clicked it will make a form (with username and password) appear with a submit button
    - need to built a test on jasmine
    - need to build an interface login -
    - this also starts the session - d

    - once signed in
      - need a new welcome banner with your name
      - need a log out button which ends the session

- IMPLEMENTED - put together the login and create crys which also update the page.

- succesfully mocked the tests 
