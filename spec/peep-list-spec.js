'use strict';

describe('exportPeepListAsHTML', function(){
  var testPeepList;

  beforeEach(function(){
    testPeepList = [
  {
    "id": 3,
    "body": "my first peep :)",
    "created_at": "2018-06-23T13:21:23.317Z",
    "updated_at": "2018-06-23T13:21:23.317Z",
    "user": {
      "id": 1,
      "handle": "kay"
    },
    "likes": [{
      "user": {
        "id": 1,
        "handle": "kay"
      }
    }]
  }
];
  })

  it('exports the list of peeps as HTML', function(){
    expect(exportPeepListAsHTML(testPeepList)).toEqual("<ul><li><div id='3'><p>my first peep :)</p><br><i>kay</i></div></li></ul>")
  })


})
