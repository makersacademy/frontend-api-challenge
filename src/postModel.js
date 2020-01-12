var Post = function(id, text){
  this.id = id;
  this.text = text;
}

Post.prototype = (function(){
  function display(){
    return this.text;
  }return{
    display: display
  }
})()