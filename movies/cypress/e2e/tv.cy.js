import '../support/commands'
let TVs;

describe("Base tests about TV shows lists", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    )
    .its("body")
    .then((response) => {
      TVs = response.results;
    });
  });

  describe("TV Shows List", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/movies/TV") 
    });
    it("displays the page header", () => {
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });
    it("displays the correct TV show titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(TVs[index].name); 
      });
    });
  });
});