// can view all peeps

describe('Peep', function(){

var peep;

  beforeEach(function(){
    peep = new Peep('hello1');
  })

  it('can create a peep', function() {
    expect(peep.body).toEqual('hello1')
    
  })








})


