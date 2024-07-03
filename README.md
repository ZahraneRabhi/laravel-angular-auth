# Laravel & Angular Authentication Example using Sanctum for a token-based auth flow

This project demonstrates how to implement token-based authentication using Laravel as an Api and Angular for the frontend, with Sanctum managing the authentication tokens.

## How to Run

### Angular Client

1. Navigate to the `Client` directory:
```bash
cd Client
npm install
npm start
```

2. Open your browser and navigate to http://localhost:4200/ to view the Angular app.


### Laravel Server

1. Navigate to the `Server` directory:
```bash
cd Server
composer install
```

2. Setup ***.env*** Database credentials
```bash
DB_CONNECTION=mysql
DB_HOST=<>
DB_PORT=<>
DB_DATABASE=auth
DB_USERNAME=<your_username>
DB_PASSWORD=<your_password>
```

3. Navigate to the `Server` directory:
```bash
yarn start
```
4. Open your browser and navigate to http://localhost:4300/ to run the server