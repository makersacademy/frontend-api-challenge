window.onload = function() {
  let session = null;
  listPeeps();

  function listPeeps() {
    document.getElementById('peep-list').innerHTML = '';
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
  };

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

  function newSession(response) {
    session = new Session(response.user_id, response.session_key);
  }

  function showSignedInPage() {
    $('#signed-in-buttons').show();
  }

  $('#sign-in-submit').click(function(event) {
    event.preventDefault();
    const handle = document.getElementById('sign-in-handle').value;
    const password = document.getElementById('sign-in-password').value;
    const dataString = {"session": {"handle": handle, "password": password}};

    const request = new XMLHttpRequest();
    request.open('POST', 'https://chitter-backend-api.herokuapp.com/sessions');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      newSession(JSON.parse(this.response));
      showSignedInPage();
      alert('You have signed in!');
    };
    request.send(JSON.stringify(dataString));

    $('#sign-in-page').hide();
    $('#home-page').show();
  });

  $('#post-a-peep').click(function(event) {
    event.preventDefault();
    const text = document.getElementById('peep-text').value;
    const dataString = {"peep": {"user_id": session.getUserId(), "body": `${text}`}};
    const request = new XMLHttpRequest();
    request.open('POST', 'https://chitter-backend-api.herokuapp.com/peeps');
    console.log(session.getSessionKey());
    request.setRequestHeader('Authorization', `Token token=${session.getSessionKey()}`);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      listPeeps();
      document.getElementById('peep-text').value = '';
    };
    request.send(JSON.stringify(dataString));
  });
}
