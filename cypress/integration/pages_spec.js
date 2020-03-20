describe('Pages in the App', () => {
  beforeEach(() => {
    cy.fixture('login.json').as('loginData');
    cy.visit('http://localhost:3000');
    cy.get('@loginData').then(({ user, password }) => {
      cy.get('[data-test=username-input]').type(user);
      cy.get('[data-test=sign-in-password-input]').type(password, { log: false });
      cy.get('[data-test=verify-contact-skip-link]').click();
    });
  });

  it('Get Threads Page', () => {
    cy.get(
      ':nth-child(3) > .MuiBottomNavigationAction-wrapper > .MuiBottomNavigationAction-label',
    ).click();
    cy.url().should('include', 'http://localhost:3000/Threads');
  });

  it('Get Dashboard Page', () => {
    cy.get(
      ':nth-child(2) > .MuiBottomNavigationAction-wrapper > .MuiBottomNavigationAction-label',
    ).click();
    cy.url().should('include', 'http://localhost:3000/Dashboard');
  });
});
