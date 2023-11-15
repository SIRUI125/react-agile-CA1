let firebase;
describe('LoginPage', () => {
    beforeEach(() => {
      cy.visit('/login');
    });

    it('allows a user to sign in', () => {
      cy.get('input[type="email"]').type('1908146704@qq.com');
      cy.get('input[type="password"]').type('ysr928812');
      cy.get('form').contains('Login').click();
      cy.url().should('eq', 'http://localhost:3000/1')
    });

    it('allows a user to sign up', () => {
      // avoid conflict with existing users
      const uniqueEmail = `test_user_${new Date().getTime()}@example.com`;
      cy.get('input[type="email"]').type(uniqueEmail);
      cy.get('input[type="password"]').type('password');
      cy.get('button').contains('Sign Up').click();
      cy.url().should('eq', 'http://localhost:3000/1')
    });
  });