# GitHub Discovery API

GitHub Discovery API uses the public GitHub search endpoint to discover content on GitHub.

## Endpoints
### Repositories
GitHub Discovery API provides and endpoint `/repositories`, which can be used to discover popular repositories on GitHub. The term popularity refers to the set of star gazers a repository has. Repositories are beeing fetched in descending order, meaning more popular items beeing fetched first. For a detailed documentation of the usage of the repositories endpoint please see the Open API documentation of this project. 

## Local Usage

1. Clone repository
2. Create .env file in project root directory
3. In project root directory run `npm run dev`

## Environment Variables
In project root directory create .env file and add key value pairs as shown.

```
PORT=9000
GITHUB_SEARCH_API=https://api.github.com/search
```

## Scripts available

|Command |Description  | 
--- | --- |
|`npm run dev`|Start service in development mode|
|`npm run test`|Run unit tests|
|`npm run build`|Build application. Assets will be stored in /dist/|
|`npm start`|Run Build|

## Open API Documentation

Open API Documentation is available under `/api-docs`
