let upComingMovies;
let topRatedMovies;
let movie;

describe("Movies Lists Test", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
      "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        topRatedMovies = response.results;
      });

    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
      "TMDB_KEY"
      )}&include_adult=false&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        upComingMovies = response.results;
      });

  });

  describe("Upcoming Movies List", () => {
    beforeEach(()=>{
      cy.visit("/movies/upcoming")
    })

    it("displays the page header", () => {
      cy.get("h3").contains("Upcoming Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
      });
    });
  });

  describe("Top Rated Movies List", () => {
    beforeEach(()=>{
      cy.visit("/movies/toprated")
    })

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(topRatedMovies[index].title);
      });
    });
  });
})

