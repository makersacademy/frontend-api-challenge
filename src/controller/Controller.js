
(function(exports){

  function PeepController(){
    // this.peepsView = new PeepsView();
  }

  async function getAllPeeps(){
    const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
    const peeps = await response.json();
    let peepData = [];
    await peeps.forEach(function(peep){
      peepData.push([peep.body, peep.created_at, peep.user.handle, (peep.likes).length])
    });
    let peepsview = new PeepsView(peepData)
    // console.log(peepData);
    // console.log(peepsview)
    document.getElementById('all-peeps').innerHTML = await peepsview.addHTML();

  }
  

  // console.log('about to fetch some peeps')
  // fetch('https://chitter-backend-api-v2.herokuapp.com/peeps').then(response => {
  //   console.log(response);
  // })
  // .catch(error => {
  //   console.log('errorrrrr!');
  //   console.error(error);
  // });

   getAllPeeps();


   exports.PeepController = PeepController;

})(this);  


