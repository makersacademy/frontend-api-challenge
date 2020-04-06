
(function(exports){

  function Controller(){
    // this.peepsView = new PeepsView();
  }

  async function getAllPeeps(){
    const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
    const peeps = await response.json();
    const peepData = [];
    await peeps.forEach(function(peep){
      peepData.push([peep.id, peep.body, (peep.created_at).slice(0, 10), peep.user.handle, (peep.likes).length])
    });
    let peepsview = new PeepsView(peepData)
    document.getElementById('all-peeps').innerHTML = await peepsview.addHTML();
  }

  async function showSinglePeep() {
    var peepId = window.location.hash.split('#')[1];
    console.log(peepId)
    const singleresponse = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`)
    const peep = await singleresponse.json();
    const singlePeepData = [];
    await singlePeepData.push(peep.id, peep.body, (peep.created_at).slice(0, 10), peep.user.handle, (peep.likes).length);
    console.log(singlePeepData)
    let peepslist = new PeepList(singlePeepData);
    console.log(peepslist)
    let mypeep = this.singlePeep.getPeepByID([peepId]);
    console.log(mypeep)

    // window.addEventListener('hashchange', function(){
    //   document.getElementById('all-peeps').innerHTML = peepslist.getPeepByID([peepId]);
    // }, false);
  };
  
  
  
  // Controller.prototype.signUp = function () {
  //   window.addEventListener('hashchange', function(){
  //     let signup = new SignUpView()
  //     console.log(signup.addHTML)
  //     document.getElementById('otherpage').innerHTML = signup.addHTML
  //   })
  // }
  

  // console.log('about to fetch some peeps')
  // fetch('https://chitter-backend-api-v2.herokuapp.com/peeps').then(response => {
  //   console.log(response);
  // })
  // .catch(error => {
  //   console.log('errorrrrr!');
  //   console.error(error);
  // });

   getAllPeeps();
  showSinglePeep();
   exports.Controller = Controller;
  //  exports.Controller.signUp = Controller.signUp;


})(this);  


