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
      cy.get('#handle')
      cy.get('#password')
      cy.get('#login-btn')
    })
  })
  describe('click login button', function() {
    it('renders the login form', function() {
      var handle = 'kdawg'
      var password = 'apassword'
      cy.get('#login-logout').click()
      cy.get('#handle').type(handle)
      cy.get('#password').type(password)
      cy.get('#login-btn').click()
      cy.contains('Log out')
      cy.contains('kdawg')
    })
  })
})