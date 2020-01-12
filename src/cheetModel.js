var Cheet = function(id, post){
  this.id = id;
  this.post = post;
}

Cheet.prototype = (function(){
  function display(){
    return this.post;
  }return{
    display: display
  }
})()