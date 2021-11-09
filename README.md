# Snïff

- [Project Spec](https://frontend.turing.edu/projects/module-3/stretch.html)

## Contributors

- [Joshua Benefield](https://github.com/Jabene)
- [Nolan Caine](https://github.com/n0land0)

## Abstract

Sniff is a service for dog owners looking to find friends for their lonely pups. Users have the ability to set up playdates with other users at a local dog park of their choosing. This application was built utilizing React, React Router, SCSS, ExpressJS, KnexJS, and PostgresQL.

## Snapshots of Application

DASHBOARD VIEW:

![landing page/dashboard](https://i.imgur.com/2oxQTCz.png)

BROWSE PROFILES VIEW:

![playdate scheduling](https://i.imgur.com/uMSUS0z.png)

1. The landing page of the app is a dashboard view, from which a user can view all of their scheduled past and present (upcoming) playdates
2. From this same dashboard view, a user may choose to cancel/remove any playdates from their private profile page and/or search for potential new "matches", perusing through other profiles on the site for users who present as good fits for a doggie playdate

## Technologies

FRONT-END:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

BACK-END:

![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![KnexJS](https://user-images.githubusercontent.com/79823098/140978950-21ceb46e-55dd-40e7-b395-65a4afccfbbf.png)
![PostgresQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

## Wins

- Moving beyond MVP into extensions - e.g. implementing Google Maps API, writing 3 tables, adding DELETE functionality
- Building our first complete backend with Knex and PostgresQL

## Challenges

- Self-teaching Knex and PostgresQL in a day while building our first table-style database
- Resources for using Knex were very hard to come by so it was hard to find anyone to reach out to - we were mostly on our own with the documentation
- Troubleshooting some obscure Heroku-specific bugs related to SSL permissinos

## Install/ Set Up Instructions

1. Clone down this repository using the following command:
  ```
  git clone git@github.com:n0land0/sniff.git
  ```
2. In your terminal, run:
  ```
  npm install
  npm start
  ```
3. Enter the following url in your browser: http://localhost:3000/
4. Explore the website...adventure awaits! HUZZAH!

## Future Features

- Log In functionality. 
- Sockets.io for client to client direct messaging 
