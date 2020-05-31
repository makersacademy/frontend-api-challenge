'use strict';

$(document).ready(function() {
  // var peeps = new Peeps();
  Peeps.instance();

  updateAppName();
  loadPeeps();
  // updatePeeps();
  
  // testApiCall();

  function updateAppName() {
    $(`#appName`).text(`Chitter`);
  }

  function loadPeeps() {
    // var i;
    // fetch(Peeps.API_GET_PEEPS)
    //   .then(response => response.json())
    //   .then(function(data) {
      // const fetchPromise = fetch(Peeps.API_GET_PEEPS);

      const main = document.getElementById('main');

      main.innerHTML = "<p>Loading...";

      fetch(Peeps.API_GET_PEEPS)
        .then(response => response.json())
        .then(data => {
        // const peeps = data.map(peep => peep.body).join("\n");
        // console.log(peeps);
        main.innerHTML = listOfPeeps(data);
        // console.log(data.body);
      // })


        // for (i = 0; i < data.length; i++) {
        //   Peeps.add(new Peep(data[i].id, data[i].body, data[i].created_at, data[i].updated_at, Peep.TEST_USER));
        //   // console.log(Peeps.all[i])
        //   // console.log(data[i].user);
        // }
        // console.log(data[data.length -1].body);
        // console.log(data);
        // return data[0];
        // let peeps = data.results;
        // console.log(data);
        // return peeps.map(function(peep) {
        //   console.log(peep.body);
      });
        
    //   });
    // fetch(Peeps.API_GET_PEEPS)
    //   .then(
    //     function (response){
    //       if (response.status !== 200) {
    //         console.log('Looks like there was a problem. Status Code: ' +
    //           response.status);
    //         return;
    //       }

    //       response.json().then(function(data) {

    //         console.log(data[0]);
    //       });
    //     }
    //   )
    //   .catch(function(err) {
    //     console.log('Fetch Error :-S', err);
    //   });

    // return `Congrats for successfully requesting the peeps from the Chitter API! This is the first peep :)`;

    // Peeps.add(new Peep(Peep.TEST_ID, Peep.TEST_BODY, Peep.TEST_CREATED_AT, Peep.TEST_UPDATED_AT, Peep.TEST_USER));
  // updatePeeps();
  }


  function listOfPeeps(data) {
    // console.log(`2`)
    // $(`#peep1`).text(`Congrats for successfully requesting the peeps from the Chitter API! This is the first peep :)`);
    // console.log(peeps.body);
    // let peep = Peeps.all[0];
    // console.log(Peeps.all)
    const peeps = data.map(peep => `<li>${peep.body}</li>`).join("\n");
    return `<ul>${peeps}</ul>`
  }

  // function testApiCall() {
  //   fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps`)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

});