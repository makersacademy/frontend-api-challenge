$(document).ready(function() { 

  fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(function(response) {
      return response.json();
    })
    .then(function(myPeeps) {
      var data = JSON.stringify(myPeeps);
      var peeps = JSON.parse(data);
      var arr = displayP(peeps);
      // $('#all-peeps').html(arr);
    })
    .catch(function (err) {
      console.log(err);
    });
  
    function displayP(content) {
      var i;
      var mainContainer = document.getElementById("all-peeps");
      for(i = 0; i < content.length; i ++) {
        // '<span>' + content[i].body + '</span><br></br>';
        var div = document.createElement("div");
                  div.innerHTML = 'Name: ' + content[i].body + ' ';
                  mainContainer.appendChild(div);
      }
    }
  });