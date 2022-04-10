const ChitterModel = require('./chitterModel')


describe('ChitterModel', ()=> {
  describe('getPeeps() method', () => {
    it('should return an empty array when first created', () => {
      model = new ChitterModel();
      expect(model.getPeeps()).toEqual([])
    })
  })

  describe('addPeep() method', () => {
    it ('should add a peep to the peepsArray', () => {
      model = new ChitterModel();
      peep = "I lost my shoes today"
      
      expect(model.addPeep(peep)).toEqual(peep)
      expect(model.getPeeps()).toEqual([peep])
    })
  })
})