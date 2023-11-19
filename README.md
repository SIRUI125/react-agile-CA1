# Assignment 1 - Agile Software

Name: Sirui Yao

## Overview.

This assignment is based on web assignment and add cypress tests and GitLab CI pipeline,and also use code splitting in the assignment.
When a new and separate branch is created every time a new function is tested.Then the new branch will be merged into develop branch.At last,the new branches will be all merged into main branch.
### Features.
+ Add toprated page
+ Add people page 
+ Add people detail page
+ Add all the pages of movies (from 1 to 500)
+ Add language filter 
+ Add pagination function
+ Add tv page
+ Add details in tv page
+ Add tv filter and review
+ Add authentication with firebase
+ Add login and logout page
+ Add login and logout function
+ Write reviews about movies
## Setup requirements.

When you need to Auto-deployment,you should npm install --save gh-pages and add "homepage": "https://sirui125.github.io/my-app" to my package.json
In the assignments,I use cypress custom commands to do tests.
## Cypress tests
+ Filtering Test:Use cypress custom commands test to the existing filters such as find movies by category, and also tested the new language filter I added.
+ Firebase Test:Use cypress custom commands to test whether an existing account password can be logged in, and test whether a new account can be registered.
+ Movieslist Test:Test that the movieslist interface works properly, and test that each movie card goes to the detail screen when clicked.
+ Pagination Test:Use cypress custom commands to test my newly added pagination feature,Observe whether the pagination function works properly on all pages.
+ People Test:Use cypress custom commands to test whether the Most Popular Actors screen is working properly, and whether the character's details are being presented.
+ Toprated Test:Use error/exception testing for the movie list and the title of the movies,filter card function of the topratedmovie page,the movie genres in movie detail page.Ensure that all these interfaces work properly by testing.
+ TV Test:Use cypress custom commands to test tv page,if the tv page can be presented and show the details of tv.
## Cypress Custom commands tests
cypress/e2e/filtering.cy.js
cypress/e2e/firebase.cy.js
cypress/e2e/people.cy.js
cypress/e2e/tv.cy.js
## Error/exception test
cypress/e2e/toprated.cy.js
## Independent learning
I study the cypress custom commands("https://docs.cypress.io/api/cypress-api/custom-commands#Syntax")
Auto-deployment("https://create-react-app.dev/docs/deployment/#github-pages")
Gitlab("https://gitlab.com/SIRUI125/agile-ca1.git")
## Auto-deployment
Reference:"https://github.com/SIRUI125/react-agile-CA1/settings/pages"
