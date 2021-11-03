describe('webpage visit', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/findfriends');
  });

  // beforeEach().visit("http://localhost3000")

  it('should display other dogs in my area for potential playdates', () => {
    cy.get('.gallery').children().should('be.visible')
  })

})
