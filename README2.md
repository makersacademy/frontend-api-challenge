Overview

I didn't finish the material we should have covered during the week. Because of this, I spent much of my weekend reviewing and completing that material. In particular, it was a challenge to integrate my understanding of the various parts of the system with each other. 

I came to the weekend challenge late and prioritised delivering simple functionality as soon as possible, building on the understanding I had gained. There are no automated unit tests. Tests were carried out manually on a feature basis

Specifics

* Creating Users
  Achieved. Be careful to use a unique username
* Logging in
  Not achieved. I expect I would do this by taking a submitted username and password, and finding that username with an API call. If the username doesn't exist, or the passwords don't match, login fails and an error message is displayed. If username exists and password matches, a session is created, which is then reflected in a change in the html
* Posting Peeps
  Not achieved. Now that sessions are possible, this should be straightforward
* Viewing all Peeps *(I suggest you start here)*
  Achieved, though it is not pretty
* Viewing individual Peeps
  Not achieved. I would need to review how to create a webpage ad hoc for a group of items. One thing is unclear - how can this be a single-page app if the specification requires many pages?
* Deleting Peeps
  Not achieved. Now that sessions are possible, this should be straightforward
* Liking Peeps
  Not achieved. This combines sessions and ad hoc webpages, which is more complex
* Unliking Peeps
  Not achieved. This combines sessions and ad hoc webpages, which is more complex

Reflections
It would be nice to spend some time on css.
I'd also like to spend time clarifying the architecture and relationships in a single-page app like this.
I'd like to add tests. In particualy, stubbing out calls to APIs is a new area that I'd like to get to.

