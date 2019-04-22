describe('PeepList', function(){

  var peepList;
  var peep;

  beforeEach(function(){
    peepList = new PeepList();

  })

  it('displays all peeps', function(){
    peep = new Peep("hello1")

    peepList.add(peep)

    console.log(peepList.peeps)

    expect(peepList.peeps).toContain(jasmine.objectContaining(
      {body: "hello1"}
    )
    );
  });





})