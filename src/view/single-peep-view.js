(function(exports) {

  function SinglePeepView(){
  };
  
  async function display() {
    var peepId = window.location.hash.split('#')[1];
    var peepId_integer = Number(peepId)
    console.log(peepId)
    const singleresponse = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`)
    const peep = await singleresponse.json();
    const singlePeepData = [];
    await singlePeepData.push(peep.id, peep.body, (peep.created_at).slice(0, 10), peep.user.handle, (peep.likes).length);
    console.log(singlePeepData)
    let peepslist = new PeepList(singlePeepData);
    console.log(peepslist)
    let mypeep = peepslist.getPeepByID(peepId_integer);
    console.log(mypeep)
  };

  exports.SinglePeepView = SinglePeepView;
  exports.SinglePeepView.display = SinglePeepView.display

})(this);
