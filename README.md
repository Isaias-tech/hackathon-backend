# [Hackathon Backend](https://hackathonapi.isaias-tech.com)

This is an app for the hackathon of VoiceTeam.

## How to set the development enviroment

The following requirements must be met to create the development environment:
 - Docker must be installed.
 - The .env file must have the necesary variables for the containers.
 - The git repository must be clone.

After the requirements are met, follow these steps:
 - Open the directory where the repository was cloned.
 - Execute this `docker-compose -f docker-compose.dev.yml up -d`.
 - After this the following ports will be open:
   - http://localhost:8000 for app.
   - http://localhost:9000 for the database.
   - http://localhost:8080 for pgadmin.

## How to deploy

For the app to be deployed the only thing that have to be done is to update the main branch.

## Enviroment variables

### Database
|Name|Value|
|---|---|
|POSTGRES_USER|This optional environment variable is used in conjunction with `POSTGRES_PASSWORD` to set a user and its password. This variable will create the specified user with superuser power and a database with the same name. If it is not specified, then the default user of `postgres` will be used.|
|POSTGRES_PASSWORD|This environment variable is required for you to use the PostgreSQL image. It must not be empty or undefined. This environment variable sets the superuser password for PostgreSQL.|
|POSTGRES_DB|This optional environment variable can be used to define a different name for the default database that is created when the image is first started. If it is not specified, then the value of `POSTGRES_USER` will be used.|

### PgAdmin

|Name|Value|
|---|---|
|PGADMIN_DEFAULT_EMAIL|This is the email address used when setting up the initial administrator account to login to pgAdmin. This variable is required and must be set at launch time.|
|PGADMIN_DEFAULT_PASSWORD|This is the password used when setting up the initial administrator account to login to pgAdmin. This variable is required and must be set at launch time.|

### Application

|Name|Value|
|---|---|
|PORT|The port that will be used inside the docker container, this is the port that the application will be configure with.|