// Information to reach API
const postPeepUrl = 'https://chitter-backend-api.herokuapp.com/peeps'

// Some page elements
const peepTextField = document.querySelector('#text-box');
const peepSubmit = document.querySelector('#peep-submit');

// AJAX function
const postPeeps = () => {

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };
  xhr.open('POST', postPeepUrl);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
};

// Clear previous results and display results to webpage
// const displayPeeps = (event) => {
//   event.preventDefault();
//   while(responseField.firstChild){
//     responseField.removeChild(responseField.firstChild);
//   }
//   getPeeps();
// }

peepSubmit.addEventListener('click', displayPeeps);
