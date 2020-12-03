'use strict';

describe ("peepstore", function() {

  var peep_store;

  beforeEach(function() {
    peep_store = new PeepStore()
  })

  it('includes the word Testing in one of the peeps', function() {
    expect(peep_store.dumpOutput()).toInclude('Testing');
  });
})
