  Cypress.Commands.add('selectPage', (pageNum) => {
    cy.get(`a[href='/${pageNum}']`).click({ multiple: true });
  });
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    console.log('Visiting:', url);
    return originalFn(url, options);
  });