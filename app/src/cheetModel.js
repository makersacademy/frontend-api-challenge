var CheetModel = function(id, post){
  this.id = id;
  this.post = post;
}

CheetModel.prototype = (function(){
  
  function display(){
    return this.post;
  }return{
    display: display
  }
})()
