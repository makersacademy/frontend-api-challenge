// peep model
(function(exports){

function Peep(argument){
  this.body = argument;


}

Peep.prototype.body = function() {
  console.log(this.body)
  return this.body
}

exports.Peep= Peep;
}) (this);

