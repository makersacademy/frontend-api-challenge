'use strict';

class Peeps {

  static API_GET_PEEPS = `https://chitter-backend-api-v2.herokuapp.com/peeps`;

  static instance(){
    this.all = [];
  }

  static add(peep){
    this.all.push(peep);
  }
  // constructor {
  //   this.all [];
  // }

  // add(peep) {
  //   this.all.push(peep)
  // }

  get body() {
    var i;
    fetch(Peeps.API_GET_PEEPS)
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(function(data) {

        // for (i = 0; i < data.length; i++) {
        //   console.log(data[i].body);
        // }
        // console.log(data[data.length -1].body);
        console.log(data);
        return data[0];
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
  }
}