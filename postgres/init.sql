CREATE TABLE books (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  description TEXT,
  categories VARCHAR(255),
  link VARCHAR(255),
  year SMALLINT,
  "imageURL" TEXT
);

INSERT INTO
  books (
    id,
    title,
    author,
    description,
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
    'Harry Potter and the Philosopher''s Stone is the first novel in the Harry Potter series written by J.K. Rowling. The story follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to the Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry''s parents, but failed to kill Harry when he was just a baby.',
    'Fantasy',
    'https://es.wikipedia.org/wiki/Harry_Potter_y_la_piedra_filosofal',
    1997,
    'https://onhfqcltzuwwklasplnd.supabase.co/storage/v1/object/public/books/public/imageData-1708098904089-481096129'
  ),
  (
    'd8e51b10-215f-4ec1-b97f-63f9c9d9c234',
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    'Set in the decadent Jazz Age of the 1920s, ''The Great Gatsby'' is a timeless tale of love, ambition, and the elusive American Dream. Jay Gatsby, a mysterious and wealthy man, throws lavish parties at his Long Island mansion in pursuit of his lost love, Daisy Buchanan. Narrated by Nick Carraway, Daisy''s cousin, the novel delves into the intricate web of relationships and the disillusionment that accompanies the pursuit of wealth and status. F. Scott Fitzgerald''s masterpiece captures the essence of an era marked by excess, longing, and the fragility of human aspirations.',
    'Classic',
    'https://es.wikipedia.org/wiki/El_gran_Gatsby',
    1925,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/440px-The_Great_Gatsby_Cover_1925_Retouched.jpg'
  ),
  (
    '6d93e65b-9a28-4dc1-857f-65df4e66d041',
    'To Kill a Mockingbird',
    'Harper Lee',
    'Harper Lee''s ''To Kill a Mockingbird'' is a timeless exploration of racial injustice, moral integrity, and the innocence of childhood in the American South. Set in the fictional town of Maycomb, Alabama, during the 1930s, the novel follows the Finch family, particularly young Scout Finch, as her father, Atticus, a principled lawyer, defends Tom Robinson, a black man wrongly accused of raping a white woman. Through Scout''s eyes, readers witness the harsh realities of bigotry and prejudice, as well as the resilience and compassion of the human spirit. Harper Lee''s masterpiece continues to resonate with its powerful portrayal of social issues and universal themes.',
    'Classic',
    'https://es.wikipedia.org/wiki/Matar_un_ruise%C3%B1or',
    1960,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/440px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg'
  ),
  (
    'e12e2e47-fb9e-4a4c-b0a4-b6dbff7e4267',
    '1984',
    'George Orwell',
    'George Orwell''s ''1984'' is a haunting dystopian novel set in a totalitarian society where individuality and freedom are suppressed by the omnipresent Party led by Big Brother. Winston Smith, a disillusioned member of the Outer Party, rebels against the oppressive regime by engaging in forbidden activities and forming a forbidden relationship. As Winston navigates the perilous landscape of surveillance and thought control, he grapples with the consequences of seeking truth and resisting tyranny. Orwell''s chilling vision of a dystopian future serves as a stark warning against the dangers of totalitarianism and the erosion of human rights.',
    'Dystopian',
    'https://es.wikipedia.org/wiki/1984_(novela)',
    1949,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nineteen_Eighty-Four_cover_Soviet_1984.jpg/440px-Nineteen_Eighty-Four_cover_Soviet_1984.jpg'
  ),
  (
    '83b07b5c-2d64-43c0-a2a2-d9ecb2e1ee3f',
    'The Catcher in the Rye',
    'J.D. Salinger',
    'J.D. Salinger''s ''The Catcher in the Rye'' is a timeless classic that follows the introspective journey of Holden Caulfield, a disenchanted teenager navigating the complexities of adolescence and adulthood in post-World War II America. After being expelled from yet another prep school, Holden embarks on a three-day odyssey through New York City, grappling with themes of alienation, identity, and the phoniness he perceives in the adult world. Through Holden''s candid and cynical voice, Salinger captures the angst and disillusionment of youth, making ''The Catcher in the Rye'' a landmark novel in American literature.',
    'Classic',
    'https://es.wikipedia.org/wiki/The_Catcher_in_the_Rye',
    1951,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Catcher-in-the-rye-red-cover.jpg/440px-Catcher-in-the-rye-red-cover.jpg'
  ),
  (
    'ac1c73d3-0d24-4e42-a13f-118a8e6a72f2',
    'Pride and Prejudice',
    'Jane Austen',
    'Jane Austen''s ''Pride and Prejudice'' is a timeless romantic comedy that follows the tumultuous courtship between the spirited Elizabeth Bennet and the enigmatic Mr. Darcy in early 19th-century England. As Elizabeth navigates the societal expectations of marriage and class, she grapples with her initial prejudices and misconceptions about Mr. Darcy, ultimately discovering the true nature of love and understanding. Austen''s sharp wit and keen observations of human nature are on full display in this beloved classic, making ''Pride and Prejudice'' a quintessential novel of manners and romance.',
    'Classic',
    'https://en.wikipedia.org/wiki/Pride_and_Prejudice',
    1813,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/440px-PrideAndPrejudiceTitlePage.jpg'
  ),
  (
    '36b8cbe0-61b5-42c8-af82-bab6d04c0c2b',
    'The Hobbit',
    'J.R.R. Tolkien',
    'J.R.R. Tolkien''s ''The Hobbit'' is a timeless fantasy adventure that follows the journey of Bilbo Baggins, a reluctant hobbit who is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Joined by the wizard Gandalf and a band of dwarves led by Thorin Oakenshield, Bilbo encounters trolls, goblins, and other fantastical creatures as they traverse the treacherous lands of Middle-earth. Along the way, Bilbo discovers courage, friendship, and the true meaning of heroism, making ''The Hobbit'' a beloved classic of fantasy literature.',
    'Fantasy',
    'https://en.wikipedia.org/wiki/The_Hobbit',
    1937,
    'https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg'
  );