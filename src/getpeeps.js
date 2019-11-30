fetch('https://chitter-backend-api.herokuapp.com/peeps').then(function(response) {
  return response.json();
}).then(function(j) {
  console.log(j);
});
