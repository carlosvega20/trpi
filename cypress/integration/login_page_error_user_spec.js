describe('Login Page', () => {
  beforeEach(() => {
    cy.fixture('login.json').as('loginData');
    cy.visit('http://localhost:3000');
  });
  it('Visit Therapi Web page and check correct content', () => {
    cy.contains('Username');
  });
  it('login', () => {
    cy.get('@loginData').then(({ nouser, password }) => {
      cy.get('[data-test=username-input]').type(nouser);
      cy.get('[data-test=sign-in-password-input]').type(password, { log: false });
    });
  });
});
