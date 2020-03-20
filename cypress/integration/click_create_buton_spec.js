describe('Create account', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Click on Create account', () => {
    cy.get('[data-test=sign-in-create-account-link]').click();
  });
  it('fill form', () => {
    cy.get('[data-test=sign-in-create-account-link]').click();
    cy.get(':nth-child(1) > [data-test=sign-up-non-phone-number-input]')
      .click()
      .type('Usertest');
    cy.get(':nth-child(2) > [data-test=sign-up-non-phone-number-input]')
      .click()
      .type('123456');
    cy.get(':nth-child(3) > [data-test=sign-up-non-phone-number-input]')
      .click()
      .type('test@gmail.com');
    cy.get('[data-test=sign-up-create-account-button]');
  });
});
