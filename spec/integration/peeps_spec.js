describe('peeps', function() {
  beforeEach(function() {
    cy.fixture('single_peep_response.json').as('singlePeepResponse')
    cy.fixture('multi_peep_response.json').as('multiPeepResponse')
    cy.server()
    cy.route('https://chitter-backend-api.herokuapp.com/peeps', '@multiPeepResponse')
    cy.route('https://chitter-backend-api.herokuapp.com/peeps/1', '@singlePeepResponse')
  })
  describe('view a single peep', function() {
    it('renders the peep', function() {
      cy.visit('/')
      cy.get('#peep-1').click()
      cy.get('.card').last().contains('Test Peep 1')
    })
  })
})