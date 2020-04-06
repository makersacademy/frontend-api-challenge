// (function(exports) {

//   function SinglePeepView(){
//     this.singlePeepData = []
//   };
  
//     async function display() {
//     var peepId = window.location.hash.split('#')[1];
//     console.log(peepId)
//     const singleresponse = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`)
//     const peep = await singleresponse.json();
//     //const singlePeepData = [];
//     await this.singlePeepData.push(peep.id, peep.body, (peep.created_at).slice(0, 10), peep.user.handle, (peep.likes).length);
//     console.log(this.singlePeepData)
//     let peepslist = new PeepList(this.singlePeepData)
//     console.log(peepslist)
//     console.log(peepId)
//   };
  

//   exports.SinglePeepView = SinglePeepView;
//   exports.SinglePeepView.display = SinglePeepView.display

// })(this);
