[![Node.js CI](https://github.com/Carloslt5/technical-bubbo-api-server/actions/workflows/node.js.yml/badge.svg)](https://github.com/Carloslt5/technical-bubbo-api-server/actions/workflows/node.js.yml)

## REST API Server

### Requirements

```
 Docker (only test end to end)
 Node v20.0.0
```

### Init Server `./api`

1. Install dependencies

```
npm install
```

2. Init api-server

```
npm run dev
```

### Init unit test `./api`

```
npm test
```

### Init end-to-end test `./`

1. Init db test with Docker `./`

```
docker-compose up
```

2. Run test end to end `./api`

```
npm run test:e2e
```

## Technologies

- NodeJS
- ExpressJS
- TypeScript
- Zod schema validation
- Testing with Jest (unit test)
- Testing with playwright (end to end test)
- Supabase (SQL Database and Storage)
- Docker

## Books Routes

Base URL `/api/books`

| HTTP Method | URI path      | Description          |
| ----------- | ------------- | -------------------- |
| GET         | `/`           | All books list       |
| GET         | `/:id`        | Get one book details |
| POST        | `/create`     | Create a new book    |
| PUT         | `/edit/:id`   | Edit book            |
| DELETE      | `/delete/:id` | Delete book by ID    |

## Upload File Routes

Base URL `/api/upload`

| HTTP Method | URI path | Description                     |
| ----------- | -------- | ------------------------------- |
| POST        | `/`      | Upload file to Supabase Storage |
