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
  window.location.href="./login.html"; //when the user clicks login button - load login html
})

signupButton.addEventListener('click', () => {
  window.location.href="./signup.html"; //when the user clicks login button - load login html
})

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

  for (var i = 0; i < Object.keys(JSONData).length; i ++ ) {
    returnedHTMLString += `${JSONData[i].user.handle}: ${(JSONData[i].body)} @${JSONData[i].created_at.slice(11,16)} on ${JSONData[i].created_at.slice(0,10)}\n `
  }
  return returnedHTMLString
}

function loginOrSignupOrPost(){


}
