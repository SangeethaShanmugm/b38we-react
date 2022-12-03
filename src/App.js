import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { AddColor } from "./AddColor";
import { ColorBox } from "./ColorBox"; //named import
import { UserList } from "./UserList";
import { Home } from "./Home";
import { BookList } from "./BookList";
import { BookDetail } from "./BookDetail";
import { NotFoundPage } from "./NotFoundPage";
import { AddBook } from "./AddBook";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";

// const INITIAL_BOOK_LIST = [
//   {
//     name: "Charlotte's web",
//     poster:
//       "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
//     rating: 8.8,
//     summary:
//       "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
//   },
//   {
//     name: "The power of your subconscious mind",
//     poster:
//       "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
//     rating: 7,
//     summary:
//       "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
//     trailer: "https://www.youtube.com/embed/Solb9uA-tgQ",
//   },
//   {
//     name: "Attitude is everything ",
//     poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
//     rating: 8.1,
//     summary:
//       "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
//   },
//   {
//     name: "The Secret",
//     poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
//     summary:
//       "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
//     rating: 8.8,
//   },
//   {
//     name: "Discover Your Destiny",
//     rating: 6,
//     summary:
//       "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
//     poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
//   },
//   {
//     name: "The 5 AM Club",
//     poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
//     rating: 8.6,
//     summary:
//       "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
//   },
//   {
//     name: "Atomic Habits",
//     poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
//     rating: 7.9,
//     summary:
//       "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
//   },
//   {
//     name: "I Can Do It",
//     poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
//     rating: 8,
//     summary:
//       "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
//   },
// ];

// 1. Creating - createContext
// 2. Publisher - provider - context.Provider
// 3. Subscriber - useContext - useContext(context)

function App() {
  //Lifting the state up -> Lifted from child to parent
  const [bookList, setBookList] = useState([]);
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://6382ddea6e6c83b7a987e322.mockapi.io/book")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  //JSX starts
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} />
      <CssBaseline />
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/book")}>
              Books
            </Button>
            <Button color="inherit" onClick={() => navigate("/addcolor")}>
              Add Color
            </Button>
            <Button color="inherit" onClick={() => navigate("/user")}>
              User List
            </Button>
            <Button color="inherit" onClick={() => navigate("/book/add")}>
              AddBook
            </Button>
            <Button
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "dark" : "light"} mode
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          {/* //DRY - Do not repeat yourself */}
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookList />} />
          {/* dynamically matching route */}
          <Route path="/book/:bookid" element={<BookDetail />} />
          <Route
            path="/book/add"
            element={<AddBook bookList={bookList} setBookList={setBookList} />}
          />
          <Route path="/addcolor" element={<AddColor />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/novel" element={<Navigate replace to="/book" />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
      <Paper />
    </ThemeProvider>
  );
  //JSX Ends
}

export default App;

//Import and export 2 types
//1. named - Import and export - prefered
//2. default - Import and export - only one can be exported and imported

//JSX ->  Javascript XML / extended
//WebPack + Babel ->
//JSX -> converted to Javascript
// className ->
//class -> reserved keyword in js
// {} -> template Syntax
// props -> (like arguments in function)

//Task - Display profile pic and name
// pass multiple props

//Task - 20 mins
//Add Book - like Add Color
// book - name, poster, rating, summary, trailer - 5 input boxes
// Add Book - button

//Lifting the state up

// BookList(data) - Book(data) - Counter(data)

//          - contact(data)

//React flows in one direction - unidirectional - parent to child you can pass data -✅
// not from child to parent  - ❌

//                          App(parent)(data)

//           BookList (child)             BookDetail(child)

//  {/* <nav>
//         <ul>
//           <li>
//             Link change page without refresh
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/book">Books</Link>
//           </li>
//           <li>
//             <Link to="/addcolor">Add Color</Link>
//           </li>
//           <li>
//             <Link to="/user">User List</Link>
//           </li>
//           <li>
//             <Link to="/somewhere">Somewhere</Link>
//           </li>
//           <li>
//             <Link to="/book/add">AddBook</Link>
//           </li>
//         </ul>
//       </nav> */}
