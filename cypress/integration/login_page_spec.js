describe('Login Page', () => {
  beforeEach(() => {
    cy.fixture('login.json').as('loginData');
    cy.visit('http://localhost:3000');
  });
  it('Visit Therapi Web page and check correct content', () => {
    cy.contains('Username');
  });
  it('login', () => {
    cy.get('@loginData').then(({ user, password }) => {
      cy.get('[data-test=username-input]').type(user);
      cy.get('[data-test=sign-in-password-input]').type(password, { log: false });
      cy.wait(500);
      cy.get('[data-test=verify-contact-skip-link]').click();

      cy.wait(500);
      cy.get(
        ':nth-child(2) > .MuiBottomNavigationAction-wrapper > .MuiBottomNavigationAction-label',
      ).click();
      cy.wait(800);
      cy.get(
        ':nth-child(3) > .MuiBottomNavigationAction-wrapper > .MuiBottomNavigationAction-label',
      ).click();
      // cy.wait(800);
      // cy.get(
      //   '.makeStyles-gridContainer-191 > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > .MuiGrid-grid-xs-8 > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input',
      // )
      //   .click()
      //   .type('This is a test,i feel anxious and worried right now, I hope this test works well');
      // cy.get('.MuiGrid-container > .MuiFab-primary > .MuiFab-label > .MuiSvgIcon-root').click();
      // cy.get(
      //   '.makeStyles-gridContainer-191 > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > .MuiGrid-grid-xs-8 > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input',
      // )
      //   .click()
      //   .type('This is a second message that i hope to delete forward');
      // cy.get('.MuiGrid-container > .MuiFab-primary > .MuiFab-label > .MuiSvgIcon-root').click();
      // cy.wait(400);
      // cy.get(
      //   ':nth-child(1) > .MuiPaper-root > .MuiGrid-wrap-xs-nowrap > .MuiGrid-container > :nth-child(3) > .MuiButtonBase-root > .MuiFab-label > .MuiSvgIcon-root',
      // ).click();
      // cy.wait(400);
      // cy.get(
      //   '.MuiGrid-wrap-xs-nowrap > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiFab-label',
      // ).click();
      // cy.get(
      //   '.MuiGrid-wrap-xs-nowrap > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiFab-label',
      // ).click();
      // cy.get(
      //   '.MuiGrid-wrap-xs-nowrap > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiFab-label',
      // ).click();
    });
  });
});
