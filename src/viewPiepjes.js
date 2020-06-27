async function requestPeipjesList() {
  await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => out = response.json())
  return out
};

function peipjesList() {

  requestPeipjesList().then(function(data) {
    console.log(data)
    document.getElementById('peipjesList').innerHTML = data[0].body
  })

}
