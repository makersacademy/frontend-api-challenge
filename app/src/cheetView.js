var CheetView = function(post){
  this.post = post;
}

CheetView.prototype = (function(){

  function inHTML(){
    return `<div>${this.post.post}</div>`;
  }return{
    inHTML: inHTML
  }
})()
