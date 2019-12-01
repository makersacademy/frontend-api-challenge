$(document).ready(function() {

  $('#see').on('click', function() {

    fetch('https://chitter-backend-api.herokuapp.com/peeps').then(function(response) {
      return response.json();
    }).then(function(data) {

      $.each(data, function(index, value) {
        var node1 = document.createElement("P");
        var node2 = document.createElement("P");
        var node3 = document.createElement("P");
        var br = document.createElement("BR");

        var text = document.createTextNode(value.body);
        var time = document.createTextNode("Written on: " + value.created_at.substring(0, 10));
        var author = document.createTextNode("Authored by: " + value.user.handle);

        node1.appendChild(text);
        node2.appendChild(time);
        node3.appendChild(author);

        document.getElementById('main').appendChild(node1);
        document.getElementById('main').appendChild(node2);
        document.getElementById('main').appendChild(node3);
        document.getElementById('main').appendChild(br);

      });

    });

  });

  document.getElementById('signup').addEventListener('submit', signup);

  function signup(event) {
    event.preventDefault();

    fetch('https://chitter-backend-api.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "user": {
            handle: document.getElementById('handle').value,
            password: document.getElementById('password').value
          }
        })
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        $.each(data, function(index, value) {
          var node4 = document.createElement("P");
          var myindex = document.createTextNode(index);
          var myvalue = document.createTextNode(value);

          node4.appendChild(myindex);
          node4.appendChild(myvalue);

          document.getElementById('confirmed').appendChild(node4);

        });

      });
  };

  document.getElementById('login').addEventListener('submit', login);

  function login(event) {
    event.preventDefault();

    fetch('https://chitter-backend-api.herokuapp.com/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "session": {
            handle: document.getElementById('loghandle').value,
            password: document.getElementById('logpassword').value
          }
        })
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {

        var mysession = data.session_key;
        var myuser = data.user_id;

        $.each(data, function(index, value) {
          var node5 = document.createElement("P");
          var myindex = document.createTextNode(index);
          var myvalue = document.createTextNode(value);

          node5.appendChild(myindex);
          node5.appendChild(myvalue);

          document.getElementById('confirmed2').appendChild(node5);

        });

      });
  };

  $('#write').on('click', function() {

    fetch('https://chitter-backend-api.herokuapp.com/peeps', {
        method: 'POST',
        headers: {
          'Authorization': 'Token token=mysession',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "peep": {
            user_id: myuser,
            body: document.getElementById('peep').value
          }
        })
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        });

      });

});
