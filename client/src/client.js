fetch("https://chitter-backend-api.herokuapp.com/")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

//   function search(query) {
//   return fetch(`/api/food?q=${query}`, {
//     accept: 'application/json',
//   }).then(checkStatus)
//     .then(parseJSON);
// }
