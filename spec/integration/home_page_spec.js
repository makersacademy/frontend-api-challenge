describe('Home Page', function() {
  beforeEach(function() {
    cy.fixture('single_peep_response.json').as('singlePeepResponse')
    cy.server()
    cy.route('https://chitter-backend-api.herokuapp.com/peeps', '@singlePeepResponse')
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