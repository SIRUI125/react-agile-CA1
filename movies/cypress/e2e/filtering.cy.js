import '../support/commands'
import { filterByGenre, filterByTitle, filterByLanguage } from "../support/e2e";

let movies; 

describe("Filtering", () => {
  before(() => {
    cy.request(`https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`)
      .its("body")
      .then((response) => {
        movies = response.results;
      });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  describe("By movie language", () => {
    it("show movies with the selected language", () => {
        const selectedLanguage = "en";
        const matchingMovies = filterByLanguage(movies, selectedLanguage);
        cy.selectLanguage(selectedLanguage);
        cy.get(".MuiCardHeader-content").should("have.length", matchingMovies.length);
        cy.get(".MuiCardHeader-content").each(($card, index) => {
            cy.wrap($card).find("p").contains(matchingMovies[index].title);
        });
    });
  });

  describe("Combined genre, title and language", () => {
    it("show movies with 'm' in title and the selected genre and language", () => {
      const searchString = "m";
      const selectedGenreText = "Drama";
      const selectedLanguage = "en";
      const matchingMovies = filterByGenre(filterByTitle(filterByLanguage(movies, selectedLanguage), searchString), 18);
      
      cy.searchTitle(searchString);
      cy.selectLanguage(selectedLanguage);
      cy.selectGenre(selectedGenreText);
      
      cy.get(".MuiCardHeader-content").should("have.length", matchingMovies.length);
      cy.get(".MuiCardHeader-content").each(($card, index) => {
          cy.wrap($card).find("p").contains(matchingMovies[index].title);
      });
    });
  });
});
