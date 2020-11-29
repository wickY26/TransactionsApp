context('Account Creation', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9001/accounts', { fixture: 'accounts' }).as('getAccounts');
    cy.visit('http://localhost:3000/accounts/create');
  });

  it('should have title Accounts', () => {
    cy.get('h4').should('contain', 'New Account');
  });

  it('should create new account and redirect to accounts page', () => {
    cy.intercept('POST', 'http://localhost:9001/account/create', (req) => {
      expect(req.body).to.eql({ name: 'Poyraz', surname: 'Yilmaz' });
      req.reply({ name: 'Poyraz', surname: 'Yilmaz' });
    });

    cy
      .get('[data-testid=name]')
      .type('Poyraz').should('have.value', 'Poyraz');

    cy
      .get('[data-testid=surname]')
      .type('Yilmaz').should('have.value', 'Yilmaz');

    cy
      .get('[data-testid=submitBtn]')
      .click();

    cy.url().should('include', '/accounts');
  });

  it('should navigate account creation page via back button', () => {
    cy.get('[data-testid=header-link]').click();
    cy.url().should('include', '/accounts');
  });
});
