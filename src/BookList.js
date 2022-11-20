import { useState } from "react";
import { Book } from "./Book";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// {book.name} rating -{book.rating} summary -{book.summary}
export function BookList({ bookList, setBookList }) {
  // const bookList = INITIAL_BOOK_LIST;
  // const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleSubmit = () => {
    const newBook = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    // Copy the bookList and add newBook to it
    setBookList([...bookList, newBook]);
  };

  return (
    <div className="add-book-form">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Enter a Name"
        onChange={(event) => setName(event.target.value)} />

      {/* <input
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter a Name"
            /> */}
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        placeholder="Enter a Poster"
        onChange={(event) => setPoster(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        placeholder="Enter a Rating"
        onChange={(event) => setRating(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        placeholder="Enter a Summary"
        onChange={(event) => setSummary(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        placeholder="Enter a Trailer"
        onChange={(event) => setTrailer(event.target.value)} />
      {/* <Button variant="contained">Add Book</Button> */}
      <Button onClick={handleSubmit} variant="contained">
        Add Book
      </Button>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
