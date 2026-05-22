describe('__PROJECT_NAME__ smoke', () => {
  it('loads the home page', () => {
    cy.visit('/');
    cy.contains('__PROJECT_NAME__').should('be.visible');
  });
});
