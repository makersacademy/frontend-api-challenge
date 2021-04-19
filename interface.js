signInSheet()
signUpSheet()

function signInSheet() {
  $('.sign-in').click(function() {
    $('.peep-body').html(signInHtml)
    cancel()
    SignInUser()
    homeFeed()
  })
}

function cancel() {
  $('.cancel').click(function() {
    $('.peep-body').html(homeScreen)
    signInSheet()
    signUpSheet()
  })
}

function signUpSheet() {
  $('.sign-up').click(function() {
    $('.peep-body').html(signUpHtml)
    cancel()
    SignUpUser()
    homeFeed()
  })
}

function SignUpUser() {
  $('.submit').click(function() {
    let handle = $('#sign-up-username').val()
    let password = $('#sign-up-password').val()
    $.post("https://chitter-backend-api-v2.herokuapp.com/users", {"user": {"handle": handle, "password": password}}, function() {
      $.post("https://chitter-backend-api-v2.herokuapp.com/sessions", {"session": {"handle": handle, "password": password}}, function(data) {
        localStorage.setItem('handle', handle)
        localStorage.setItem('session-key', data.session_key)
        localStorage.setItem('id', data.user_id)
      })
    })
  })
}

function SignInUser() {
  $('.submit').click(function() {
    let handle = $('#sign-up-username').val()
    let password = $('#sign-up-password').val()
    $.post("https://chitter-backend-api-v2.herokuapp.com/sessions", {"session": {"handle": handle, "password": password}}, function() {})
    localStorage.setItem('handle', handle)
    localStorage.setItem('session-key', data.session_key)
    localStorage.setItem('id', data.user_id)
  })
}

function newPeepBox() {
  let userHandle = localStorage.getItem('handle')
  let newPeepBox = `<div class='new-peep'>
      <textarea class='new-peep-text' placeholder='Hi @${userHandle}! What is on your mind?'></textarea>
      <button class='new-peep-button'><img class='new-peep-img' src='./public/new-peep-button.png'></button>
    </div>`
    $('.new-peep-area').html(newPeepBox)
    createPeep()
}


function homeFeed() {
  $('.submit').click(function() {
    newPeepBox()
    $.get("https://chitter-backend-api-v2.herokuapp.com/peeps", function(data) {
      let htmlChunks = data.map((data) => { 
        return `<div class='peep-box'>
        <div class='peep-information'>
          <p class='user_handle'>@${data.user.handle}</p>
          <p class='user_handle'>${data.created_at}</p>
        </div>
        <div class='peep'>
          <h3 class='peep-text'>${data.body}</h3>
        </div>
        <div class='buttons'>
          <button class='comment'><img class='comment-button' src='./public/comment_button.png'></button>
          <button class='like' >${data.likes.length}<img class='like-button' src='./public/like_button.png'></button>
        </div>
        <br/>`
      })
      $('.peep-body').html(htmlChunks)
    })
  })
}

function createPeep() {
  $('.new-peep-button').click(function() {
    let session_key = localStorage.getItem('session-key')
    let user_id = localStorage.getItem('id')
    let peep = $('.new-peep-text').val()
    console.log(peep)
    console.log(user_id)
    console.log(session_key)
      $.ajax({
        type: 'POST',
        url: "https://chitter-backend-api-v2.herokuapp.com/peeps",
        headers: { "Authorization": token=session_key },
        data:{"peep": {"user_id": user_id, "body": peep}
      }
    });
  })
}
 
let signInHtml = `<input type='text' class='sign-up-in' id='sign-in-username' placeholder='username'>
      <input type='password' class='sign-up-in' id='sign-in-password' placeholder='password'>
      <button class='cancel'>Cancel</button>
      <button class='submit'>Sign In</button>
    </div>`

let homeScreen = ` <div class='welcome'>
      <div class='sign-in'>
        <h1> Welcome to Chitter! </h1>
        <label for='sign-in'>Already a user?</label><button class='sign-in'>Sign In</button><br>
        <label for='sign-up'>New to chitter?</label><button class='sign-up'>Sign Up</button>
      </div>
    </div>`

let signUpHtml = `<div class='sign-up-menu'>
      <input type='text' class='sign-up-in' id='sign-up-username' placeholder='username'>
      <input type='text' class='sign-up-in' id='sign-up-email' placeholder='email adress'>
      <input type='text' class='sign-up-in' id='sign-up-password' placeholder='password'>
      <button class='cancel'>Cancel</button>
      <button class='submit'>Sign up</button>
    </div>`

