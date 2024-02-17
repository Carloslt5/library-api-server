CREATE TABLE books (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  categories VARCHAR(255),
  link VARCHAR(255),
  year NUMERIC,
  "imageURL" TEXT
);

INSERT INTO
  books (
    id,
    title,
    author,
    categories,
    link,
    year,
    "imageURL"
  )
VALUES
  (
    '46610b86-8b18-4f92-884d-011974aaf7db',
    'Harry Potter and the Philosopher''s Stone',
    'J.K. Rowling',
    'Fantasy',
    'https://example.com/harry-potter-page',
    1997,
    'https://onhfqcltzuwwklasplnd.supabase.co/storage/v1/object/public/books/public/imageData-1708098904089-481096129'
  ),
  (
    'd8e51b10-215f-4ec1-b97f-63f9c9d9c234',
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    'Classic',
    'https://example.com/great-gatsby-page',
    1925,
    'https://onhfqcltzuwwklasplnd.supabase.co/storage/v1/object/public/books/public/imageData-1708098904089-481096129'
  );