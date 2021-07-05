(function(exports){

  function Peep(texts){
    this.peep = texts
  }
  Peep.prototype.getText = function () {
    return this.peep;
  };
  exports.Peep = Peep;
})(this);
