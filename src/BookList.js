import { Book } from "./Book";
import { useState, useEffect } from "react";
import { API } from "./global";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
// {book.name} rating -{book.rating} summary -{book.summary}
export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch(`${API}/book`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((bkdta) => {
        setBookList(bkdta);
      });
  }, []);

  return (
    <div className="add-book-form">
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            deleteButton={
              <IconButton
                onClick={() => {
                  fetch(`${API}/book/${bk.id}`, {
                    method: "DELETE",
                  })
                    .then((response) => response.json())
                    .then((bkdta) => {
                      setBookList(bkdta);
                    });
                }}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
