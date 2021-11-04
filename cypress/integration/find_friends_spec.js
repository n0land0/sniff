describe('webpage visit', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/findfriends');
  })

  it('should display other dogs in my area for potential playdates', () => {
    cy.get('.gallery').children().should('be.visible')
  })

  it('should be able to select an owner\'s profile to see more info about their dog', () => {
    cy.get('.profile-card').first().click()
    cy.get('.profile').should('be.visible')
  })



})
