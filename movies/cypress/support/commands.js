Cypress.Commands.add('testPeoplePage', (statusCode, body) => {
    cy.intercept('GET', 'https://api.themoviedb.org/3/person/popular?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US&page=1', {
      statusCode: statusCode,
      body: body
    }).as('getPeopleList');
    cy.visit('/people');
    cy.wait('@getPeopleList');
  });
  
  Cypress.Commands.add('testPeopleDetailPage', (id, statusCode, body) => {
    cy.intercept('GET', `https://api.themoviedb.org/3/person/${id}?api_key=cd337e2cdf6450aa6801acff1fa9bee5&language=en-US`, {
      statusCode: statusCode,
      body: body
    }).as('getPeopleDetail');
    cy.visit(`/people/${id}`);
    cy.wait('@getPeopleDetail');
  });