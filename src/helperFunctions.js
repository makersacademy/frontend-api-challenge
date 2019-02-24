// Formats response to look presentable on webpage
const renderPeepResponse = (res) => {
  // // handles if res is falsey
  // if(!res){
  //   console.log(res.status)

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

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // creating an empty object to store the JSON in key-value pairs
  let rawJson = {}
  for(let key in response){
    rawJson[key] = response[key]
  }
  // converting JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
  // manipulates responseField to show the returned JSON.
  peeps.innerHTML = `<pre>${rawJson}</pre>`
}
