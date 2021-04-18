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
  - As a maker, So that I can see what others are saying, I want to see all peeps in reverse chronological order
  - Set up a div in the html - Done
  - test out the JS request in the console to the chitter api
  - set up tests for the interface.js
  - write interface js code to meet the tests
  - wrote mocked jasmine and duck tests
  - developed code to display tweets, using a fetch request to get the api

  - NEED TO FIX TESTS! - DONE

4. Going to develop creating users and logging in
