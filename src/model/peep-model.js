(function(exports){

  function PeepList(singlePeep){
    this.singlePeep = singlePeep
  }

  PeepList.prototype.getPeepByID = function(id){
      if (id === this.singlePeep[0]){
        return `<div id='peep-style'><p>${this.singlePeep[1]}<p>Posted at: ${this.singlePeep[2]}<p>${this.singlePeep[3]}<p>Likes: ${this.singlePeep[4]}</div>`
      }
  }

  exports.PeepList = PeepList;
  exports.PeepList.getPeepByID = PeepList.getPeepByID;

})(this);