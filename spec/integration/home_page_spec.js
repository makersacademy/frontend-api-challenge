describe('Home Page', function() {
  beforeEach(function() {
    cy.fixture('multi_peep_response.json').as('multiPeepResponse')
    cy.server()
    cy.route('https://chitter-backend-api.herokuapp.com/peeps', '@multiPeepResponse')
    cy.visit('/')
  })
  it('shows the page', function() {
    cy.get('header').contains("Chitter")
  })
  it('shows a list if peeps', function() {
    cy.get('#peep-1').contains('Test Peep 1')
  })
  it('shows the login button', function(){
    cy.get('#login-logout').contains('Log in')
  })
})