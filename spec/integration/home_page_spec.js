describe('Home Page', function() {
  beforeEach(function() {
    cy.fixture('multi_peep_response.json').as('multiPeepResponse')
    cy.server()
    cy.route('https://chitter-backend-api.herokuapp.com/peeps', '@multiPeepResponse')
  })
  it('shows the page', function() {
    cy.visit('/')
    cy.get('header').contains("Chitter")
  })
  it('shows a list if peeps', function() {
    cy.visit('/')
    cy.get('#peep-1').contains('Test Peep 1')
  })
})