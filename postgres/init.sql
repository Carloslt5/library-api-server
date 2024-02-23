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
  ),
  (
    '6d93e65b-9a28-4dc1-857f-65df4e66d041',
    'To Kill a Mockingbird',
    'Harper Lee',
    'Classic',
    'https://example.com/to-kill-a-mockingbird-page',
    1960,
    'https://onhfqcltzuwwklasplnd.supabase.co/storage/v1/object/public/books/public/imageData-1708098904089-481096129'
  ),
  (
    'e12e2e47-fb9e-4a4c-b0a4-b6dbff7e4267',
    '1984',
    'George Orwell',
    'Dystopian',
    'https://example.com/1984-page',
    1949,
    'https://onhfqcltzuwwklasplnd.supabase.co/storage/v1/object/public/books/public/imageData-1708098904089-481096129'
  ),
  (
    '83b07b5c-2d64-43c0-a2a2-d9ecb2e1ee3f',
    'The Catcher in the Rye',
    'J.D. Salinger',
    'Classic',
    'https://example.com/catcher-in-the-rye-page',
    1951,
    'https://onhfqcltzuwwklasplnd.supabase.co/storage/v1/object/public/books/public/imageData-1708098904089-481096129'
  ),
  (
    'ac1c73d3-0d24-4e42-a13f-118a8e6a72f2',
    'Pride and Prejudice',
    'Jane Austen',
    'Classic',
    'https://example.com/pride-and-prejudice-page',
    1813,
    'https://onhfqcltzuwwklasplnd.supabase.co/storage/v1/object/public/books/public/imageData-1708098904089-481096129'
  ),
  (
    '36b8cbe0-61b5-42c8-af82-bab6d04c0c2b',
    'The Hobbit',
    'J.R.R. Tolkien',
    'Fantasy',
    'https://example.com/the-hobbit-page',
    1937,
    'https://onhfqcltzuwwklasplnd.supabase.co/storage/v1/object/public/books/public/imageData-1708098904089-481096129'
  );