`use stict`;

describe(`Peep`, function() {

  var peep;
  
  beforeEach(function() {
    peep = new Peep(Peep.TEST_ID, Peep.TEST_BODY, Peep.TEST_CREATED_AT, Peep.TEST_UPDATED_AT, Peep.TEST_USER);
  });

  it(`has an id`, function(){
    expect(peep.id).toEqual(Peep.TEST_ID);
  });

  it(`has a body`, function(){
    expect(peep.body).toEqual(Peep.TEST_BODY);
  });

  it(`has a created_at`, function(){
    expect(peep.created_at).toEqual(Peep.TEST_CREATED_AT);
  });

  it(`has an updated_at`, function(){
    expect(peep.updated_at).toEqual(Peep.TEST_UPDATED_AT);
  });

  it(`has a user`, function(){
    expect(peep.user).toEqual(Peep.TEST_USER);
  });

});