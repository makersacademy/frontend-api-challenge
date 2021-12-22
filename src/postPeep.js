const postPeep = (body) => {
  console.log("Token " + `token=${sessionStorage.getItem("key")}`)
  data = {"peep": {"user_id":`${sessionStorage.getItem("id")}`, "body":`${body}`}}
  fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
    method: 'POST',
    headers: {
      'Authorization': `Token token=${sessionStorage.getItem("key")}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    window.location.reload();
  })
}

module.exports.postPeep = postPeep