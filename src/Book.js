import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
//BookApp
// book title, poster, summary, rating
export function Book({ book, id }) {
  const navigate = useNavigate();
  // const book = {
  //   name: "The charlotte's web",
  //   poster: "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
  //   summary: "Charlotte's Web, classic children's novel by E.B. White, published in 1952, with illustrations by Garth Williams. The widely read tale takes place on a farm and concerns a pig named Wilbur and his devoted friend Charlotte, the spider who manages to save his life by writing about him in her web.",
  //   rating: 8
  // }
  const styles = {
    color: book.rating > 8 ? "green" : "red",
    fontSize: "25px",
    fontWeight: "bold",
  };

  //true - visible
  //false - hidden
  const [show, setShow] = useState(true);
  //True - block
  //False - none
  const summaryStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-title">
          {book.name} -ID -{id}{" "}
        </h2>
        <p style={styles} className="book-rating">
          {" "}
          ⭐{book.rating}
        </p>
      </div>
      {/* /book/0 or book/1 */}
      {/* <button onClick={() =>navigate("/book/" + id) } >Info</button> */}
      {/* toggle button */}
      <IconButton
        onClick={() => setShow(!show)}
        aria-label="toggle-description"
        color="primary"
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      {/* //info icon */}
      <IconButton
        onClick={() => navigate(`/book/${id}`)} 
        aria-label="toggle-description"
        color="primary"
      >
        <InfoIcon />
      </IconButton>

      {/* <button onClick={() => setShow(!show)}>Toggle Summary</button> */}
      {/* conditional styling */}
      <p style={summaryStyles} className="book-summary">
        {book.summary}
      </p>
      {/* conditional rendering */}
      {/* {show ? <p className='book-summary'>{book.summary}</p> : "" }  */}
      <Counter />
    </div>
  );
}
