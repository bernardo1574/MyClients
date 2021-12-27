# My Clients

Project developed for a selection process in which the user should create a clients and cities registration rest api

## Author

- [@bernardo1574](https://www.github.com/bernardo1574)

## Badges

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

</div>

## Environment Variables

To run this project, you will need to add the following ​​environment variable to your .env file

`DATABASE_URL="postgresql://admin:admin@localhost:5432/compassUol?schema=public"`

If you are not going to use the docker, please change the url to the url of your machine's postgres

## Installation

<h3 style="color: red; margin-bottom:1rem;margin-top:1rem;">To run this project you will need the docker.</h3>

Clone the repository:

```bash
  git clone https://github.com/bernardo1574/MyClients.git
```

Create an .env file and insert the variables passed above

```
DATABASE_URL="postgresql://admin:admin@localhost:5432/compassUol?schema=public"
```

install dependencies::

```
yarn
or
npm install
```

Open a terminal and run docker-compose:

```
docker-compose up --force-recreate
```

Open another terminal and run the following command

Run migrations

```
yarn prisma migrate dev
or
npm prisma migrate dev
```

Run the seeds of cities, have all the cities of Minas Gerais

```
yarn prisma db seed
or
npm prisma db seed
```

Run the project

```
yarn dev
or
npm run dev
```

After you have done all the installation steps and the api is running go to /api-docs to view the documents.

```
http://localhost:3000/api-docs/
```

## Running Tests

To run tests, run the following command

```bash
  yarn
  yarn test
  or
  npm install
  npm run test
```
