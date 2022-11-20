import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NotFoundPage } from "./NotFoundPage";

export function BookDetail({ bookList }) {
  const { bookid } = useParams();
  const navigate = useNavigate();
  const book = bookList[bookid];
  console.log(book);
  console.log(book.name);
  console.log(book.summary);
if(!book){
  // navigate ("/404")
  return <NotFoundPage />;
}

  return (
    <div>
      <iframe
        width="100%"
        height="550"
        src={book.trailer}
        title="The Power of Your Subconscious Mind (1963) by Joseph Murphy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-title">{book.name}</h2>
          <p className="book-rating"> ⭐{book.rating}</p>
        </div>
        <p className="book-summary">{book.summary}</p>
        {/* <button onClick={() => navigate(-1)}>BACK</button> */}
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
