Cypress.Commands.add('login', (email, password) => {
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(password);
    cy.get('button').contains('Sign In').click();
  });
  
  Cypress.Commands.add('register', (email, password) => {
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(password);
    cy.get('button').contains('Sign Up').click();
  });
