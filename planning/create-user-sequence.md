

alias user="User"
alias client="Client 
(Browser)"
alias server="Server 
(Local host)"
alias api="External API
https://chitter-backend-
api-v2.herokuapp.com"

user=>user:"I want to create a new login"
user->client:"type username & password, 
click signup"
client->client:"grab the username & password values 
(triggered by eventlistener in JS)"
client->api:"POST /users"
api->client:":( that username already exists"
client->client:"run code"
client->user:"displays 'please try again' page"
user->client:"type username & password, 
click signup"
client->client:"grab the username & password values 
(triggered by eventlistener in JS)"
client->api:"POST /users"
api->client:"this username & password combo 
is now associated with an id"
client->client:"run login code for this user"
client->api:"POST /sessions"
api->client:"here is a session id for this user"
client->client:"Code to compile the page 
completes, using the session 
and user ids from API"
client=>user:"Page now welcomes user by name 
and displays form for 'posting a quack'"