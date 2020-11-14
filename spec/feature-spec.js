'use strict';

describe('index.html', function(){

  var peep-list = document.getElementById('#peep-list');

  it('shows a list of peeps in chronological order', function(){
    expect(peep-list.innerHTML).toEqual("<ul><li><div id='3'><p>my first peep :)</p><br><i>kay</i></div></li></ul>")
  })


})
