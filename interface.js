window.onload = function() {
  (function listPeeps() {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://chitter-backend-api.herokuapp.com/peeps')
    request.send();

    request.onload = function() {
      const data = JSON.parse(this.response)
      console.log(data);

      data.forEach(peep => {
        const article =
          `<article>
             <p class='peep-handle'>${peep.user.handle}</p>
             <p class='peep-body'>${peep.body}</p>
             <p class='peep-date'>
               ${peep.created_at.slice(0, 10).split('-').reverse().join('/')}
             </p>
           </article>`;

        $('#peep-list').append(article);
      });
    }
  }());

  $('#sign-up-button').click(function() {
    $('#home-page').hide();
    $('#sign-up-page').show();
  });
}
