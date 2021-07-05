var peepsListContainer = document.getElementById('peeps-list');
var loginButton = document.getElementById('login');
var signupButton = document.getElementById('signup')
var postForm = document.getElementById('post-form');
var newPeep = document.getElementById('create-peep');

//

window.onload = () => {
  renderPeeps();
  loginOrSignupOrPost();
};

//when user clicks on login button
loginButton.addEventListener('click', () => {
  if (sessionStorage.getItem('sessionkey')) {
    signOut();
  } else {
  window.location.href="./login.html"; //when the user clicks login button - load login html
}
});


signupButton.addEventListener('click', () => {
if (sessionStorage.getItem('sessionkey')) {
  signOut();
} else {
  window.location.href="./signup.html"; //when the user clicks login button - load login html
}
});

postForm.addEventListener('submit', function(event) {
  event.preventDefault();
  postPeep();
});

async function renderPeeps(){
  var apiPeeps = await fetchPeepsFromAPI();
  wrapAllPeepsInHTML(apiPeeps);
};

function fetchPeepsFromAPI(url = 'https://chitter-backend-api.herokuapp.com/peeps'){
  return fetch(url)
  .then((allAPIPeepsRawData) => {
    return allAPIPeepsRawData.json();
  }).then((allPeepsJSONData) => {
      return allPeepsJSONData;
    }).catch((err) => {
      console.log('Oops, Something went Wrong. Try again!', err); //fetch promises only gives network (failed request)errors so we have to manual construct a a type error for this function
    });
};

function wrapAllPeepsInHTML(JSONData){
  var returnedHTMLString = '';
  var hideDeleteBetweenText = '';
  var hideLikesBetweenText = '';

  if (sessionStorage.getItem('sessionkey')){
    returnedHTMLString += `Posting as: ${sessionStorage.getItem('username')} `
  } else {
    postForm = null
  };


  for (var i = 0; i < Object.keys(JSONData).length; i ++ ) {

    var likeButtonText = returnLikeButtonText(JSONData[i])

    if (JSONData[i].user.id === parseInt(sessionStorage.getItem('id'), 10)) {
      hideDeleteBetweenText = ''
    } else {
      hideDeleteBetweenText = 'hidden';
    }

    if(sessionStorage.getItem('sessionkey') === null){
      hideLikesBetweenText = 'hidden';
    }

    returnedHTMLString += `${JSONData[i].user.handle}: ${(JSONData[i].body)} @${JSONData[i].created_at.slice(11,16)} on ${JSONData[i].created_at.slice(0,10)}\n `
    console.log(returnedHTMLString)
    return returnedHTMLString
  }

  peepsListContainer.insertAdjacentHTML('beforeend', returnedHTMLString)
}

function loginOrSignupOrPost(){
  if (sessionStorage.getItem('sessionkey')){
    loginButton.innerHTML = 'Log Out'
  } else {
    loginButton.innerHTML = 'Log In'
  }

function postPeep(){
  var url = 'https://chitter-backend-api.herokuapp.com/peeps';
  var data = { peep: { user_id: sessionStorage.getItem('id'), body: newPeep.value} };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'applicayion/json',
      Authorization: `Token token=${sessionStorage.getItem('sessionkey')}`,
    },
  }).then(res => res.json())
  .then((response) => {
    console.log('Posted!:', response);
    window.location.reload();
  })
  .catch(error => console.log('Error: ', error));
}

function deletePeep(postId) {
  var id = postId.slice(6);
  var url = `https://chitter-backend-api.herokuapp.com/peeps/${id}`

  fetch(url, {
    method: 'DELETE',
    headers: { Authorization: `Token token=${sessionStorage.getItem('sessionkey')}` },
  }).then((response) => {
    console.log('Deleted!: ', response);
    window.location.reload()
  })
  .catch(error => console.log('Error: ', error));
};
};
