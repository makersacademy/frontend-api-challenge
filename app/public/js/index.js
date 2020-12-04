const output = document.querySelector('.peeps-bucket')
const signUpBtn = document.getElementById('sign-up');
const logInForm = document.getElementById('log-in-form');

window.addEventListener('load', ()=>{

// Call the function get the peeps and call them .
  updatePeepsList();
// Get the peeps and post them
  function updatePeepsList(){
    const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
    fetch(url).then(function(res){
      return res.json()
    }).then(function(data){
      data.forEach(function(peeps){
        output.innerHTML += `${peeps.body} <br>posted by ${peeps.user.handle} <br><br>`
      })
    })
  }


  let callOfThesignUpBtn = function(){
    console.log(1,'SignUp');
    logInForm.hidden = true;
  }
//Add event listeners - event Listener for the signup btn
signUpBtn.addEventListener('click',callOfThesignUpBtn)

// Clicks the signup button


// Sends the data for the username




// Sends the data for the session






})
