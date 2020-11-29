context('Transaction Creation', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9001/transactions', { fixture: 'transactions' }).as('getTransactions');
    cy.intercept('GET', 'http://localhost:9001/accounts', { fixture: 'accounts' }).as('getAccounts');
    cy.visit('http://localhost:3000/transactions/create');
    cy.wait('@getAccounts');
  });

  it('should have title Transactions', () => {
    cy.get('h4').should('contain', 'New Transaction');
  });

  it('should create new transaction and redirect to transactions page', () => {
    cy.intercept('POST', 'http://localhost:9001/transaction/create', (req) => {
      expect(req.body).to.eql({ from: 0, to: 1, amount: 100, description: 'description' });
      req.reply({ from: 0, to: 1, amount: 100, description: 'description' });
    });

    cy
      .get('[data-testid=from-autocomplete]')
      .type('Po{enter}')
      .find('input')
      .should('have.value', 'Poyraz Yilmaz');

    cy
      .get('[data-testid=to-autocomplete]')
      .type('Ne{enter}')
      .find('input')
      .should('have.value', 'Neslihan Yilmaz');

    cy
      .get('[data-testid=amount]')
      .type('100').should('have.value', '100');

    cy
      .get('[data-testid=description]')
      .type('description').should('have.value', 'description');

    cy
      .get('[data-testid=submitBtn]')
      .click();

    cy.url().should('include', '/transactions');
  });

  it('should navigate transaction creation page via back button', () => {
    cy.get('[data-testid=header-link]').click();
    cy.url().should('include', '/transactions');
  });
});
