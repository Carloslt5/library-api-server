[![Node.js CI](https://github.com/Carloslt5/technical-bubbo-api-server/actions/workflows/node.js.yml/badge.svg)](https://github.com/Carloslt5/technical-bubbo-api-server/actions/workflows/node.js.yml)

## technical-bubbo-api-server

1. Install dependencies

```
npm install
```

2. Init api-server

```
npm start
```

## Technologies

- Nodejs
- ExpressJS
- TypeScript
- Zod schema validation
- Testing with Jest
- Supabase (Database and Storage)

## Books Routes

Base URL `/api/books`

| HTTP Method | URI path      | Description          |
| ----------- | ------------- | -------------------- |
| GET         | `/`           | All books list       |
| GET         | `/:id`        | Get one book details |
| POST        | `/create`     | Create a new book    |
| PUT         | `/edit/:id`   | Edit book            |
| DELETE      | `/delete/:id` | Add your favourites  |

## Upload File Routes

Base URL `/api/upload`

| HTTP Method | URI path | Description                     |
| ----------- | -------- | ------------------------------- |
| POST        | `/`      | Upload file to Supabase Storage |
