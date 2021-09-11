describe('peepApi', function () {

  let test;
  beforeEach(async function() {
    test = await peepApi.getPeeps();
    test2 = await peepApi.getPeepById(700);
  });
  
  it('does a thing', async function() {
    expect(test.length).toBeGreaterThan(49)
  });

  it('does a thing', async function() {
    expect(test2).toEqual(jasmine.objectContaining({
      id: 700
    }));
  });

  it('tests adding a peep', async function() {

  });
})
