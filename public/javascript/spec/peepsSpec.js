'use stict';

describe(`Peeps`, function() {

  var peep;

  beforeEach(function() {
    // jasmine.Ajax.install();
    // peep = new Peep(Peep.TEST_ID, Peep.TEST_BODY, Peep.TEST_CREATED_AT, Peep.TEST_UPDATED_AT, Peep.TEST_USER);
    Peeps.instance();
    Peeps.add(new Peep(Peep.TEST_ID, Peep.TEST_BODY, Peep.TEST_CREATED_AT, Peep.TEST_UPDATED_AT, Peep.TEST_USER));
  });

  afterEach(function() {
    // jasmine.Ajax.uninstall();
  });

  it(`gets Peeps from API`, function() {
    expect(Peeps.all[0].body).toBe(Peep.TEST_BODY);
  });

});