(function(exports){

function PeepList(){
  this.peeps = []

};


PeepList.prototype.add = function(peep){
  // adds new peep

  this.peeps.push(peep);

  return peep
}




// PeepList.prototype.all = function(){

//   return this.peeps

// }


  exports.PeepList = PeepList;
})(this);