(function(exports) {

  function PeepsView(list){
   this.list = list;
  }

  PeepsView.prototype.addHTML = function(){
    let peepHTML = this.list.map((peep) => {
      return `<li><div id='peep-style'><a href='#${peep[0]}'><p>${(peep[1]).slice(0, 50)}</a><p>Posted at: ${peep[2]}<p>${peep[3]}<p>Likes: ${peep[4]}</div></li>`
    })
    joined = peepHTML.join("");
    return "<ul>" + joined + "</ul>"
  }

  exports.PeepsView = PeepsView;
  exports.PeepsView.addHTML = PeepsView.addHTML;

})(this);


