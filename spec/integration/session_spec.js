describe('sessions', function() {
  beforeEach(function() {
    cy.fixture('multi_peep_response.json').as('multiPeepResponse')
    cy.server()
    cy.route('https://chitter-backend-api.herokuapp.com/peeps', '@multiPeepResponse')
    cy.visit('/')
  })
  describe('click login button', function() {
    it('renders the login form', function() {
      cy.get('#login-logout').click()
      cy.get('#login-form').contains('Username')
      cy.get('#login-form').contains('Password')
    })
  })
})