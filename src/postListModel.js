var ListOfPosts = function(){
  this.list = [];
  this.id = 0;
}

ListOfPosts.prototype = (function(){
  function add(text){
    this.list.push(new Post(this.id, text));
    this.id ++;
  }

  function display(){
    return this.list;
  }return{
    add: add,
    display: display
  }
})()