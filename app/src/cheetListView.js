var CheetListView = function(listOfCheets){
  this.listOfCheets = listOfCheets;
}

CheetListView.prototype = (function(){
  
  function inHTML(){
    var result = '';
    this.listOfCheets.display().forEach(cheet => {
      if(cheet.post.length > 20){
        result += `<li><div><a href='#cheet/${cheet.id}'>${cheet.post.slice(0,20)}...</a></div></li>`;
      }else{
        result += `<li><div><a href='#cheet/${cheet.id}'>${cheet.post}</a></div></li>`;
      }
    })
    return `<ul>${result}</ul>`;
  }return{
    inHTML: inHTML
  }
})()
