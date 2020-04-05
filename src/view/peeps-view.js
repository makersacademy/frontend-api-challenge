(function(exports) {

  function PeepsView(list){
   this.list = list;
  }

  PeepsView.prototype.addHTML = function(){
    let peepHTML = this.list.map((peep) => {
      return `<li><div><p>${peep[0]}<p>Posted at: ${peep[1]}<p>${peep[2]}<p>Likes: ${peep[3]}</div></li>`
    })
    joined = peepHTML.join("");
    return "<ul>" + joined + "</ul>"
  }

  exports.PeepsView = PeepsView;
  exports.PeepsView.addHTML = PeepsView.addHTML;

})(this);


