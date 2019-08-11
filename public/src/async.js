
// examples only
$.get("dataWeWantToRetriecve" , function(data){


})

// the below function can be used to handle all errors across our Ajax get requests
function handleError(jqXHR, textStatus, error) {
  console.log(error); // how you handle your error.
},

$.ajax({
  type: "GET",
  url: "https://chitter-backend-api.herokuapp.com/peeps",
  success: cbPeeps, //what happens when we successfully retrieve the data
  error: handleError()
})

function cbPeeps(data){
  $.ajax({
    type: "GET",
    url: "https://chitter-backend-api.herokuapp.com/peeps",
    success: cbUsers, //what happens when we successfully retrieve the data
    error: handleError()
  })
}

function cbUsers(data){
  $.ajax({
    type: "GET",
    url: "https://chitter-backend-api.herokuapp.com/peeps",
    success: console.log(data), //what happens when we successfully retrieve the data
    error: handleError()
  })
}
