import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

// Task - 15 mins
// /book/add  -> <AddBook />
//Add Book -> Book added  -> /book (book list page)

//Validation - on Add and Edit book
//name - required
// poster - min 4, required
// rating - 0 -10, required
//summary - min 20 chars, required
// trailer - min 4 , required
const bookValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name?😉"),
  poster: yup
    .string()
    .min(4, "Need a longer poster😆")
    .max(100, "Too much of poster length😆")
    .required("Why not fill this poster?😉"),
  rating: yup
    .number()
    .min(0, "Need a higher rating😆")
    .max(10, "Too much rating")
    .required("Why not fill this poster?😉"),
  summary: yup
    .string()
    .min(20, "Need a longer summary")
    .required("Why not fill this summary?😉"),
  trailer: yup
    .string()
    .min(4, "Need a longer trailer")
    .required("Why not fill this trailer?😉"),
});

export function AddBook() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: bookValidationSchema,
    onSubmit: (newBook) => {
      createBook(newBook);
    },
  });

  const createBook = (newBook) => {
    console.log("createBook", newBook);
    fetch(`${API}/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/book"));
  };

  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   const newBook = {
  //     name: name,
  //     poster: poster,
  //     rating: rating,
  //     summary: summary,
  //     trailer: trailer,
  //   };
  //   // Copy the bookList and add newBook to it
  //   // setBookList([...bookList, newBook]);
  //   // navigate("/book");
  //   //1. method - POST
  //   //2. body - data - JSON
  // };

  return (
    <form onSubmit={formik.handleSubmit} className="add-book-form">
      <TextField
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="name"
        variant="outlined"
        placeholder="Enter a Name"
        helperText={"Name"}
        error
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
      <TextField
        id="poster"
        name="poster"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="poster"
        variant="outlined"
        placeholder="Enter a poster"
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}
      <TextField
        id="rating"
        name="rating"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="rating"
        variant="outlined"
        placeholder="Enter a rating"
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
      <TextField
        id="summary"
        name="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="summary"
        variant="outlined"
        placeholder="Enter a summary"
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}
      <TextField
        id="trailer"
        name="trailer"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="trailer"
        variant="outlined"
        placeholder="Enter a trailer"
      />
      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : ""}
      {/* <Button variant="contained">Add Book</Button> */}
      <Button
        type="submit"
        onClick={createBook}
        variant="contained"
        // onClick={() => {
        //   const newBook = {
        //     // name: name,
        //     // poster: poster,
        //     // rating: rating,
        //     // summary: summary,
        //     // trailer: trailer,
        //   };
        //   //1. method - POST
        //   //2. body - data - JSON
        //   //3 . Headers - JSON
        //   fetch(`${API}/book`, {
        //     method: "POST",
        //     body: JSON.stringify(newBook),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then(() => navigate("/book"));
        // }}
        // variant="contained"
      >
        Add Book
      </Button>
    </form>
  );
}
