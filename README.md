## technical-bubbo-api-server

1. Install dependencies

```
npm install
```

2. Init api-server

```
npm build
npm start
```

## Technologies

- Nodejs
- ExpressJS
- TypeScript
- Firebase Storage

## Books Routes

Base URL `/api/books`

| HTTP Method | URI path      | Description          |
| ----------- | ------------- | -------------------- |
| GET         | `/`           | All books list       |
| GET         | `/:id`        | Get one book details |
| POST        | `/create`     | Create a new book    |
| PUT         | `/edit/:id`   | Edit book            |
| DELETE      | `/delete/:id` | Add your favourites  |
