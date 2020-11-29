context('Account Listing', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9001/accounts', { fixture: 'accounts' }).as('getAccounts');
    cy.visit('http://localhost:3000/accounts');
    cy.wait('@getAccounts');
  });

  it('should have title Accounts', () => {
    cy.get('h4').should('contain', 'Accounts');
  });

  it('should list 3 accounts which is coming from mock fixture', () => {
    cy
      .get('[data-testid=accounts-list]')
      .children()
      .should('have.length', 3)
      .first().should('contain', 'Poyraz Yilmaz')
      .next().should('contain', 'Neslihan Yilmaz')
      .next().should('contain', 'Badem Yilmaz');
  });

  it('should navigate account creation page via add button', () => {
    cy.get('[data-testid=header-link]').click();
    cy.url().should('include', '/accounts/create');
  });
});
