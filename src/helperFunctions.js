// Formats response to look presentable on webpage
const renderPeepResponse = (res) => {
  // creating an array to contain the HTML strings
  let peepList = []
  // looping through the response and maxxing out at 10
  var MAXIMUMPEEPS = 20
  for(let i = 0; i < Math.min(res.length, MAXIMUMPEEPS); i++){
    // creating a list of words
    peepList.push(`<div class="message-box">${res[i].body}<br><div class="peep-handles">${res[i].created_at}, ${res[i].user.handle}</div></div>`)
  }
  // manipulates peeps to render the modified response
  peeps.innerHTML = `<p>The most recent ${MAXIMUMPEEPS} peeps:</p><ol>${peepList}</ol>`
  return
}

const renderRegisterResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, the username is already taken.</p><p>Try again.</p>";
  } else {
    responseField.innerHTML = `<p>Your user id is: </p><p> ${res.id} </p>Your user name is:</p><p> ${res.handle} </p>`;
  }
}

const renderSessionResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField2.innerHTML = "<p>Sorry, the username is already taken.</p><p>Try again.</p>";
  } else {
    responseField2.innerHTML = `<p>Your user id is: </p><p> ${res.user_id} </p>Your session key is:</p><p> ${res.session_key} </p>`;
  }
}
