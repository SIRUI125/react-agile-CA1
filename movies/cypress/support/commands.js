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

  Cypress.Commands.add('selectPage', (pageNum) => {
    cy.get(`a[href='/${pageNum}']`).click({ multiple: true });
  });
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    console.log('Visiting:', url);
    return originalFn(url, options);
  });

