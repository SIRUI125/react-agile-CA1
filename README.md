# Assignment 1 - Agile Software

Name: Sirui Yao

## Overview.

This assignment is based on web assignment and add cypress tests and GitLab CI pipeline,and also use code splitting in the assignment.
When a new and separate branch is created every time a new function is tested.Then the new branch will be merged into develop branch.At last,the new branches will be all merged into main branch.This repository contains the implementation of a React App, its associated Cypress tests and the GitLab CI pipeline.

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

## Automated Tests.

##  Best test cases.
cypress/e2e/movieslist.cy.js
cypress/e2e/filtering.cy.js
## Unique functionality testing 
Movieslist Test:Test that the movieslist interface works properly, and test that each movie card goes to the detail screen when clicked.
+ cypress/e2e/movieslist.cy.js
## Error/Exception testing 
Toprated Test:
1.Show the movie list and the title of the movies when no movies has been chosen.
2.On topratedmovie page,the filter card function will start.
3.Show the movie genres in movie detail page.
4.Ensure that all these interfaces work properly by testing.
+ cypress/e2e/toprated.cy.js

## Cypress Custom commands tests
Filtering Test:Use cypress custom commands test to the existing filters such as find movies by category, and also tested the new language filter I added.
+ cypress/e2e/filtering.cy.js
Firebase Test:Use cypress custom commands to test whether an existing account password can be logged in, and test whether a new account can be registered.
+ cypress/e2e/firebase.cy.js
Pagination Test:Use cypress custom commands to test my newly added pagination feature,Observe whether the pagination function works properly on all pages.
+ cypress/e2e/pagination.cy.js
People Test:Use cypress custom commands to test whether the Most Popular Actors screen is working properly, and whether the character's details are being presented.
+ cypress/e2e/people.cy.js
TV Test:Use cypress custom commands to test tv page,if the tv page can be presented and show the details of tv.
+ cypress/e2e/tv.cy.js
## Auto-deployment
file:image/auto-deployment.png,url:"https://github.com/SIRUI125/react-agile-CA1/settings/pages"
## Code Splitting
file:image/CodeSplitting.png

Route-based Code Splitting
src/index.js
Pages (src/pages)
src/pages/homepage.js
src/pages/loginPage.js
src/pages/logoutpage.js
src/pages/movieDetailPage.js
src/pages/peoplePage.js
src/pages/topratedPage.js
Components (src/components/)
src/components/movielist/index.js
src/components/TVReview/index.js
src/components/templateTVpage/index.js
src/components/TVCard/index.js
src/components/TVReviewForm/index.js
## Pull Requests
URL:https://github.com/SIRUI125/react-agile-CA1/pulls
## Independent learning
I study the cypress custom commands("https://docs.cypress.io/api/cypress-api/custom-commands#Syntax")
Auto-deployment("https://create-react-app.dev/docs/deployment/#github-pages")
I studied the tutorials on the firebase website and added them to my project.With firebase installed,users can log in with their email and password safely.
## Reference
Pagination:" https://mui.com/material-ui/react-pagination/#basic-pagination"
Install firebase:"https://firebase.google.com/docs/web/setup?authuser=0&hl=zh"

