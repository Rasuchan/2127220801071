# URL Shortener Microservice

## Overview
This project is a URL shortener microservice that provides functionalities to shorten long URLs and retrieve statistics about the shortened URLs. It is built using TypeScript and Express.

## Features
- Create short URLs from long URLs.
- Retrieve statistics for shortened URLs.
- Logging of requests and responses.

## Project Structure
```
url-shortener-microservice
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── shortenController.ts
│   │   └── statsController.ts
│   ├── routes
│   │   ├── shortenRoutes.ts
│   │   └── statsRoutes.ts
│   ├── services
│   │   ├── urlService.ts
│   │   └── statsService.ts
│   ├── middlewares
│   │   └── logger.ts
│   ├── models
│   │   └── urlModel.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd url-shortener-microservice
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. API Endpoints:
   - **POST /shorten**: Create a short URL.
     - Request Body: 
       ```json
       {
         "longUrl": "https://example.com"
       }
       ```
     - Response:
       ```json
       {
         "shortUrl": "http://short.url/abc123",
         "expiry": "2023-12-31T23:59:59.999Z"
       }
       ```

   - **GET /stats/:shortcode**: Retrieve statistics for a short URL.
     - Response:
       ```json
       {
         "shortcode": "abc123",
         "longUrl": "https://example.com",
         "clicks": 10,
         "createdAt": "2023-01-01T00:00:00.000Z"
       }
       ```

## Logging
The application includes middleware for logging incoming requests and responses, which helps in monitoring and debugging.

## License
This project is licensed under the MIT License.