fetch('https://chitter-backend-api.herokuapp.com/peeps').then(function(response) {
  return response.json();
}).then(function(data) {

  console.log(data);

  $.each(data, function (index, value) {
    $.each(this, function (index, value) {
      //console.log(index + " :: " + value);
      var node = document.createElement("LI");
      var textnode = document.createTextNode(value);
      node.appendChild(textnode);
      document.getElementById("main").appendChild(node);
    });
  });

});

//var nicej = JSON.stringify(j, null, 2);
// document.getElementById("main").innerHTML = "<pre>"+ nicej +"</pre>";

// for (var i = 0; i < 10; i++) {
//   document.getElementById("main").innerHTML = "<pre>"+ j[0]["body"] +"</pre>";
// };
