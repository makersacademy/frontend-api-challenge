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
        div.setAttribute('class', 'card text-white bg-success mb-3', 'style', 'width: 18rem');
        
        var div2 = document.createElement("div");
        div2.setAttribute('class', 'card-body');
        
        var h5 = document.createElement("h5");
        h5.setAttribute('class', 'card-header');
       
        var p = document.createElement("p");
        p.setAttribute('class', 'card-text');

        var p2 = document.createElement("p");
        p2.setAttribute('class', 'card-text');

        var small = document.createElement("small");
        small.setAttribute('class', 'text-muted');
        
                  h5.innerHTML = 'Name: ' + content[i].user.handle + ' ';
                  p.innerHTML = 'Body ' + content[i].body + ' ';
                  small.innerHTML = 'Created @' + content[i].created_at + '';
                  p2.appendChild(small);
                  div2.appendChild(h5);
                  div2.appendChild(p);
                  div2.appendChild(p2);
                  div.appendChild(div2);
                  mainContainer.appendChild(div);
      }
    }
  });