describe('Peep', function () {
  
  describe('all', function () {

  beforeEach( async function() {
    spyOn(peepApi, "getPeeps").and.returnValue([{body: "test",
      created_at: "2021-09-11T18:41:24.728Z",
      id: 718,
      likes: [],
      user: {id: 34, handle: "kay"}}])
      result = await Peep.all();
  });

    it("test", function() {
      expect(result.length).toEqual(1)
    })

    it('test', async function() {
      expect(result[0]).toEqual(jasmine.objectContaining({
        id: 718,
        likes: [],
      }));
    });

  })

  describe('find by id', function () {

    beforeEach( async function() {
      spyOn(peepApi, "getPeepById").and.returnValue([{body: "test",
        created_at: "2021-09-11T18:41:24.728Z",
        id: 718,
        likes: [],
        user: {id: 34, handle: "kay"}}])
        result = await Peep.find(718);
    });

    it("test", function() {
      expect(result.length).toEqual(1)
    })

    it('test', async function() {
      expect(result[0]).toEqual(jasmine.objectContaining({
        id: 718,
        likes: [],
      }));
    });
  })

  // unit test for addPeep
  describe('', function () {

    beforeEach( async function() {

    });

    it("test", function() {

    })

    it('test', async function() {
      
    });
  })













})
