# Snïff

## Abstract

Sniff is a service for Denver-based dog owners looking to find friends for their lonely pups. Users have the ability to set up playdates with other users at a local dog park of their choosing. This application was built utilizing React, React Router, SCSS, ExpressJS, KnexJS, and PostgresQL.

## Snapshots of Application

DASHBOARD VIEW:

![landing page/dashboard](https://i.imgur.com/2oxQTCz.png)

BROWSE PROFILES VIEW:

![playdate scheduling](https://i.imgur.com/uMSUS0z.png)

PROFILE VIEW WITH MAP AND PLAYDATE FORM:

![profile](https://user-images.githubusercontent.com/79823098/140982299-33d72e18-f544-4352-90dc-90a0282d71a0.png)


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


## Back End Repository

The repository for the Sniff API can be found [here](https://github.com/n0land0/sniff-api).

## Wins

- Moving beyond MVP into extensions - e.g. implementing Google Maps API, creating 3 Postgres tables, adding DELETE functionality
- Building our first complete backend with Knex and PostgresQL
- Using Context API for the first time in a section of the project

## Challenges

- This project was scoped for a larger group, but one of our members came down with COVID at the beginning and had to drop out - trying to make up for that with 2 people proved challenging
- Self-teaching Knex and PostgresQL in a day while building our first table-style database
- Resources for using Knex were very hard to come by so it was hard to find anyone to reach out to - we were mostly on our own with the documentation
- Troubleshooting some obscure Heroku-specific bugs related to SSL permissions

## Install/ Set Up Instructions

The deployed app can be viewed [here](https://sniff-app.surge.sh/).

If you'd like to run this repo locally:

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

- Ability to create and log in a user
- Ability to approve or reject requested playdates
- Socket-based messaging
- Expanding coverage to other areas besides Denver

## Contributors

- [Joshua Benefield](https://github.com/Jabene)
- [Nolan Caine](https://github.com/n0land0)

## Project Spec
- [Project Spec](https://frontend.turing.edu/projects/module-3/stretch.html) provided by [Turing School of Software & Design](https://turing.edu/)
