'use strict';

describe('PeepList', () => {

  let peepList;

  beforeEach(() => {
    peepList = new PeepList();
  })

  describe('new', () => {
    it('is expected to be an instance of PeepList', () => {
      expect(peepList).toBeInstanceOf(PeepList);
    })

    it('is expected to have an Array attribute', () => {
      expect(peepList).toEqual(jasmine.objectContaining({list: []}));
    })
  })

  describe('addPeep', () => {
    it('is expected to add a Peep to the array', () => {
      peepList.addPeep(0, 'Hello');
      expect(peepList.list).toContain(jasmine.objectContaining({id: 0, text: 'Hello' }));
    })
  })

})