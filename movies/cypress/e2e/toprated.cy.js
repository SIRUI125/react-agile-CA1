let movies; 
let movie; 
let review;
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);
describe("TopRatedMovieBase test", () => {
  before(() => {
   
    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body") 
      .then((response) => {
        movies = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/movies/toprated");
  });

  describe("The Discover TopRatedMovies page", () => {
    it("displays the page header and 20 movies", () => {
      cy.get("h3").contains("Toprated Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(movies[index].title);
      });
    });
  });
  describe("Filtering", () => {
    describe("By movie title", () => {
     it("should only display movies with m in the title", () => {
       let searchString = "m";
       let matchingMovies = filterByTitle(movies, searchString);
       cy.get("#filled-search").clear().type(searchString); 
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingMovies.length
       );
       cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(matchingMovies[index].title);
       });
     })
     it("should only display movies with o in the title", () => {
       let searchString = "o";
       let matchingMovies = filterByTitle(movies, searchString);
       cy.get("#filled-search").clear().type(searchString); 
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingMovies.length
       );
       cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(matchingMovies[index].title);
       });
     });
    
   });
   
  
  describe("The movie details page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/movie/${
          movies[0].id
        }?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body")
        .then((movieDetails) => {
          movie = movieDetails;
        });
    });
    beforeEach(() => {
      cy.visit(`/movies/${movies[0].id}`);
    });
    it(" displays the movie title, overview and genres ", () => {
      cy.get("h3").contains(movie.title);
      cy.get("h3").contains("Overview");
      cy.get("h3").next().contains(movie.overview);
      cy.get("ul")
        .eq(1)
        .within(() => {
          const genreChipLabels = movie.genres.map((g) => g.name);
          genreChipLabels.unshift("Genres");
          cy.get("span").each(($card, index) => {
            cy.wrap($card).contains(genreChipLabels[index]);
          });
        });
    });
    
  });
 
  describe("moviereview content tests", () => {
    before(() => {
     
      cy.request(
        `https://api.themoviedb.org/3/movie/${
          movies[0].id
        }?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body") 
        .then((response) => {
          review = response.results;
        });
    });
    beforeEach(() => {
      cy.visit(`/movies/238`);
    });

    describe("The Review ", () => {
      it("displays review button", () => {
       
        cy.get(".MuiGrid-grid-xs-9>button").contains("Reviews");
       
      });  
      
    });
  it("displays review page", () => {

   cy.get(".MuiGrid-grid-xs-9>button").click();

    cy.get(".MuiTableHead-root tr th").eq(0).contains("Author");
    cy.get(".MuiTableHead-root tr th").eq(1).contains("Excerpt");
    cy.get(".MuiTableHead-root tr th").eq(2).contains("More");
    cy.get(".MuiTableRow-root  td").eq(1).contains("Full Review");
   
  });
  
}); 

describe("moviereview Error/Exception testing tests", () => {
  before(() => {
   
    cy.request(
      `https://api.themoviedb.org/3/movie/${
        movies[0].id
      }?api_key=${Cypress.env("TMDB_KEY")}`
    )
      .its("body") 
      .then((response) => {
        review = response.results;
      });
  });
  beforeEach(() => {
    cy.visit(`/movies/851644
    }`);
  });

  describe("The Review ", () => {
    it("displays review button", () => {
     
      cy.get(".MuiGrid-grid-xs-9>button").contains("Reviews");
     
    });  
    
  });
it("displays only the header of review page", () => { //Error/Exception testing some moviews do not have the content of the review, only header

 cy.get(".MuiGrid-grid-xs-9>button").click();

  cy.get(".MuiTableHead-root tr th").eq(0).contains("Author");
  cy.get(".MuiTableHead-root tr th").eq(1).contains("Excerpt");
  cy.get(".MuiTableHead-root tr th").eq(2).contains("More");
 
 
});

}); 
});
});