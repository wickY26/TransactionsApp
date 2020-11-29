context('Transaction Listing', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9001/transactions', { fixture: 'transactions' }).as('getTransactions');
    cy.intercept('GET', 'http://localhost:9001/accounts', { fixture: 'accounts' }).as('getAccounts');
    cy.visit('http://localhost:3000/transactions');
    cy.wait('@getTransactions');
  });

  it('should have title Transactions', () => {
    cy.get('h4').should('contain', 'Transactions');
  });

  it('should list 3 transactions which is coming from mock fixture', () => {
    cy
      .get('[data-testid=transactions-list]')
      .children()
      .should('have.length', 3)
      .first()
      .should('contain', 'Poyraz Yilmaz sent 50€ to Neslihan Yilmaz')
      .should('contain', 'First transaction')
      .next()
      .should('contain', 'Neslihan Yilmaz sent 25€ to Badem Yilmaz')
      .should('contain', 'Second transaction')
      .next()
      .should('contain', 'Badem Yilmaz sent 25€ to Poyraz Yilmaz')
      .should('contain', 'Third transaction');
  });

  it('should navigate transaction creation page via add button', () => {
    cy.get('[data-testid=header-link]').click();
    cy.url().should('include', '/transactions/create');
  });
});
