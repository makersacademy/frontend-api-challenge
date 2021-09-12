describe('Peep', () => {

  let peep;

  beforeEach(() => {
    peep = new Peep(0, "");
  })

  describe('new', () => {

    it('is expected to be an instance of Peep', () => {
      expect(peep).toBeInstanceOf(Peep);
    })

    it('is expected to create a peep with text attribute', () => {
      expect(peep).toEqual(jasmine.objectContaining({id: 0, text: ""}))
    })
  })

})