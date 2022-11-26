import { Book } from "./Book";

// {book.name} rating -{book.rating} summary -{book.summary}
export function BookList({ bookList }) {
  // const bookList = INITIAL_BOOK_LIST;
  // const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);

  return (
    <div className="add-book-form">
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
