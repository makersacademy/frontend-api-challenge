fetch('https://chitter-backend-api.herokuapp.com/peeps').then(function(response) {
  return response.json();
}).then(function(data) {

  $.each(data, function (index, value) {
    var node = document.createElement("P");
    var text = document.createTextNode(value.body);
    var time = document.createTextNode(value.created_at);
    var br = document.createElement("BR");
    node.appendChild(text);
    node.appendChild(br);
    node.appendChild(time);

    document.getElementById('main').appendChild(node);
    console.log(value);


    $.each(this, function (index, value) {
      // second loop
    });
  });

});

//var nicej = JSON.stringify(j, null, 2);
// document.getElementById("main").innerHTML = "<pre>"+ nicej +"</pre>";

// for (var i = 0; i < 10; i++) {
//   document.getElementById("main").innerHTML = "<pre>"+ j[0]["body"] +"</pre>";
// };
