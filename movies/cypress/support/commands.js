Cypress.Commands.add('selectLanguage', (language) => {
    cy.get("#language-select").click();
    cy.get("li").contains(language).click();
  });
  
  Cypress.Commands.add('selectGenre', (genreText) => {
    cy.get("#genre-select").click();
    cy.get("li").contains(genreText).click();
  });
  
  Cypress.Commands.add('searchTitle', (searchString) => {
    cy.get("#filled-search").clear().type(searchString);
  });
  
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    console.log('Visiting:', url);
    return originalFn(url, options);
  });
  