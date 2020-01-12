var Post = function(text){
  this.text = text;
}

Post.prototype = (function(){
  function display(){
    return this.text;
  }return{
    display: display
  }
})()