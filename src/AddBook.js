import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Task - 15 mins
// /book/add  -> <AddBook />
//Add Book -> Book added  -> /book (book list page)
export function AddBook({ bookList, setBookList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();

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
    navigate("/book");
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
    </div>
  );
}
