describe('Reset password', () => {
  beforeEach(() => {
    cy.fixture('login.json').as('loginData');
    cy.visit('http://localhost:3000');
  });

  it('Click on reset password', () => {
    cy.get('[data-test=sign-in-forgot-password-link]').click();
    cy.contains('Reset your password');
    cy.get('[data-test=username-input]')
      .click()
      .type('test@gmail.com');
    cy.get('[data-test=forgot-password-send-code-button]').click();
  });
});
