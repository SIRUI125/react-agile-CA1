describe('People Page', () => {
    it('shows spinner and then people list', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/person/popular*', {
      }).as('getPeopleList');
      cy.visit('/people'); 
    });
  
    it('displays error message on failure', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/person/popular*', {
        statusCode: 500,
        body: { message: 'Internal Server Error' }
      }).as('getPeopleListFail');
      cy.visit('/people');
    });
  });