describe('Login Page', () => {
  beforeEach(() => {
    cy.fixture('login.json').as('loginData');
    cy.visit('http://localhost:3000');
  });
  it('Visit Therapi Web page and check correct content', () => {
    cy.contains('Username');
  });
  it('login', () => {
    cy.get('@loginData').then(({ user, nopassword }) => {
      cy.get('[data-test=username-input]').type(user);
      cy.get('[data-test=sign-in-password-input]').type(nopassword, { log: false });
    });
  });
});
