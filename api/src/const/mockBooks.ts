import { Book, BookNotID } from '../schema/book.schema'

export const mockBooks: Book[] = [
  {
    id: '46610b86-8b18-4f92-884d-011974aaf7db',
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    description:
      "Join Arthur Dent, an ordinary human, as he finds himself catapulted into an extraordinary adventure through the cosmos after Earth's unexpected demolition to make way for an intergalactic highway. Armed with nothing but his trusty towel and the titular guidebook, Arthur navigates a universe filled with eccentric aliens, improbable encounters, and a quest for the ultimate answer to life, the universe, and everything. Douglas Adams' blend of wit, satire, and absurdity makes this science fiction classic a journey unlike any other.",
    categories: 'Science Fiction',
    link: 'https://example.com/hitchhikers-guide',
    year: 1979,
    imageURL: 'https://imagenURL.com',
  },
  {
    id: '7427b02d-7046-49c6-b393-3b10f67b1cb9',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description:
      'Set in the fictional town of Maycomb, Alabama, "To Kill a Mockingbird" is a poignant coming-of-age story narrated by Jean Louise "Scout" Finch. Through the innocent eyes of Scout, readers witness the moral complexities of racial injustice, compassion, and courage in the deep South during the 1930s. Atticus Finch, Scout\'s father and a principled lawyer, defends a black man falsely accused of raping a white woman, exposing the deep-seated prejudices and societal divides of the time. Harper Lee\'s timeless masterpiece explores themes of empathy, tolerance, and the loss of innocence with profound insight and compassion.',
    categories: 'Fiction',
    link: 'https://example.com/to-kill-a-mockingbird',
    year: 1960,
    imageURL: 'https://imagenURL.com',
  },
]

export const mockBookInput: BookNotID = {
  title: 'Test Title',
  author: 'Test Author',
  description: 'Test description',
  categories: 'Test Categorie',
  link: 'https://example.com/song-of-achilles',
  year: 2000,
  imageURL: 'https://imagenURL.com',
}

export const updateBookMock: BookNotID = {
  title: 'Update mock',
  author: 'Update mock',
  description: 'Test description',
  categories: 'Updatemock',
  link: 'https://UpdateMock.com/',
  year: 1111,
  imageURL: 'https://UpdateMock.com',
}
