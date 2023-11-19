import '../support/commands'
describe('LoginPage Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('allows a user to sign in', () => {
    cy.login('1908146704@qq.com', 'ysr928812');
    cy.url().should('include', 'http://localhost:3000/login'); 
  });

  it('allows a new user to sign up', () => {
    cy.register('newuser@example.com', 'newpassword123');
    cy.url().should('include', 'http://localhost:3000/login'); 
  });
});