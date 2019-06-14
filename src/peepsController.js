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
        //jquery way of setting multiple attributes
        $(div).attr(
          {
            'class' : 'card text-white bg-success mb-3',
            'style': 'width: 40rem',
            'id': 'singlePeep'//+ i,
            // 'position' : 'absolute !important',
            // 'top': '50% !important',
            // 'left': '50% !important',
            // 'margin': '0'
          }
        )
        
        var div2 = document.createElement("div");
        div2.setAttribute('class', 'card-body');
        
        var h5 = document.createElement("h5");
        h5.setAttribute('class', 'card-header');
       
        var p = document.createElement("h6");
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

                  
                  // pep =  new Peep(keepId(content[i]), content[i].body, content[i].user);
                  // showOnePeepsBody(content[i].id, );
      }
    }
    function keepId(peep) {
      peep.id;
    }

    function Peep(id, body, user) {
      this.id = id;
      this.body = body;
      this.user = user;
    }

    $('#all-peeps').click( 'singlePeep', function() {
      // ('#all-peeps singlePeep').
      //this is displaying all of the bodies
      alert($(this).find("h6").text());
    });
  //   function showOnePeepsBody(id) {
      
  //   $('#singlePeep' + id).click(function() {
  //     alert('Hi');
  //     $.ajax({
  //       type: 'GET',
  //       url: 'https://chitter-backend-api.herokuapp.com/peeps/'+ id
  //     })
  //     .done(function(result){
  //       var data = JSON.stringify(result);
  //     var peep = JSON.parse(data);
  //       alert(peep.body);
  //     })
     
  //   });
  // };
$('#submit').click(function() {
 
  $.ajax({
  type: "POST",
  url: "https://chitter-backend-api.herokuapp.com/users",
  contentType: "application/json",
  data: JSON.stringify({"user": {"handle": document.getElementById("username").value , "password": document.getElementById("password").value}}),
  success: function(resultData) { 
    
    var data = JSON.stringify(resultData);
    var newUser = JSON.parse(data);
    alert("Save Complete, Your Handle is " + newUser.handle);
  }
 
});

document.getElementById("create").style.visibility = "hidden";
});


  });