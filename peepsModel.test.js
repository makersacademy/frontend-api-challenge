const { expect } = require('@jest/globals');
const PeepsModel = require('./peepsModel.js');

describe(PeepsModel, () => {
  
  let model;
  beforeEach(() => {
    model = new PeepsModel(); 
  });

  describe('getPeeps', () => {
    it('returns an empty array of peeps on creation', () => {
      expect(model.getPeeps()).toEqual([])
    })
  })

  describe('addPeep', () => {
    it('adds a peep to the peeps array', () => {
      model.addPeep("My first test peep")
      expect(model.getPeeps()).toEqual(['My first test peep'])
    })
  })

  describe('setPeeps', () => {
    it('sets the array of peeps from a given list', () => {
      const peeps = JSON.parse('[{"id": 1,"body": "My first test peep"},{"id": 2,"body": "Another test peep"}]')
      console.log(peeps)
      model.setPeeps(peeps)
      expect(model.getPeeps().length).toEqual(2)
      expect(model.getPeeps()[0].body).toEqual('My first test peep')
    })
  })

})