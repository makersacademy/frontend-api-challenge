window.onload = function() {
  (function listPeeps() {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://chitter-backend-api.herokuapp.com/peeps')

    request.onload = function() {
      const data = JSON.parse(this.response)

      data.forEach(peep => {
        const article = Peep.format(peep);
        $('#peep-list').append(article);
      });
    }
    request.send();
  }());

  $('#sign-up-button').click(function() {
    $('#home-page').hide();
    $('#sign-up-page').show();
  });

  $('#sign-up-submit').click(function(event) {
    event.preventDefault();
    const handle = document.getElementById('sign-up-handle').value;
    const password = document.getElementById('sign-up-password').value;
    const dataString = {"user": {"handle": handle, "password": password}};

    const request = new XMLHttpRequest();
    request.open('POST', 'https://chitter-backend-api.herokuapp.com/users');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      alert('You signed up!');
    };
    request.send(JSON.stringify(dataString));

    $('#sign-up-page').hide();
    $('#home-page').show();
  });

  $('#sign-in-button').click(function() {
    $('#home-page').hide();
    $('#sign-in-page').show();
  });
}
