#CHITTER CHALLENGE

Deployed at: http://decorous-afternoon.surge.sh

x* Creating Users
x* Logging in
x* Posting Peeps
x* Viewing all Peeps
x* Viewing individual Peeps
x* Deleting Peeps
x* Liking Peeps
x* Unliking Peeps

I completely failed at testing with Jasmine with this. I have NO idea how to do it. I tried so many different things and just failed at life. As such, the modules.js file is redundant. This was just a way that I tried testing with Jasmine, so that I could remove the document.ready at the top.

Throughout implementation, I console.logged lots of things to ensure I knew what was happening. I originally wrote this in vanilla JS and then rewrote it in jquery to make it cleaner.

The page is clunky - some timeouts could probably be reduced - but it works. At present, if I delete a post, unless the timeout is long then reloading the peeps doesn't register that it has been deleted.

I've tried to ensure that it's DRY. I created custom headers so that I could reuse the postData function, passing it a different header where necessary.

The node modules have not been used. They are a relic of me trying to get testing to work.
