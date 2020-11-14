'use strict';

describe('index.html', function(){

  var peepList = document.getElementById('#peep-list');

  it('shows a list of peeps in chronological order', function(){
    setTimeout(function(){
      expect(peepList.innerHTML).toEqual("<ul><li><div id='3'><p>my first peep :)</p><br><i>kay</i></div></li></ul>");
    }, 1000);

  })


})
