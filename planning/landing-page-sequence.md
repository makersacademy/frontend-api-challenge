Displaying 50 most recent quacks at page loadup



alias user="User"
alias client="Client 
(Browser)"
alias server="Server 
(Local host)"
alias api="External API
https://chitter-backend-
api-v2.herokuapp.com"

user=>user:"I want to see the 50 most recent 
quacks when I visit the landing page"
user->client:"URL"
client->server:"GET"
server->client:"Here are the HTML, CSS and 
JS files that Beca wrote"
client->client:"Run code provided by server, 
encounter fetch(url) in JS"
client->api:"Fetch = GET request to 
/peeps"
api->client:"Quack data"
client->client:"Code to compile the page 
completes, with data from API"
client=>user:"Displays landing page"