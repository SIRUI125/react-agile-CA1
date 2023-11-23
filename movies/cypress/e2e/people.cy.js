import '../support/commands'
describe('People Page Test', () => {
    it('shows spinner and then people list', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1', {
      }).as('getPeopleList');
      cy.visit('/people'); 
    });
  
    it('displays error message on failure', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1', {
        statusCode: 500,
        body: { message: 'Internal Server Error' }
      }).as('getPeopleListFail');
      cy.visit('/people');
    });
  });

  describe('People Detail Page Test', () => {
    it('shows spinner and then people details', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/person/${id}?api_key=${Cypress.env("TMDB_KEY")}&language=en-US', {
      }).as('getPeopleDetail');
      cy.visit('/people/1');
    });
  
    it('displays error message on failure', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/person/${id}?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US', {
        statusCode: 500,
        body: { message: 'Internal Server Error' }
      }).as('getPeopleDetailFail');
      cy.visit('/people/1');
    });
  });