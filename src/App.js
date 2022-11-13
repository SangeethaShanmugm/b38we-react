import "./App.css";
import { useState } from "react";

import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { AddColor } from "./AddColor";
import { ColorBox } from "./ColorBox"; //named import
import { Book } from "./Book";
import { UserList } from "./UserList";
import { Home } from "./Home";
// import ColorBox from "./ColorBox"; //default import
// import double from "./ColorBox";
// import triple from "./ColorBox";

// console.log(double(10))
// console.log(triple(10))

const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 7.9,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
  },
];

function App() {
  //JS starts
  //  const name = "Anchal";
  //  const name1 = "Arjun";

  //Array of strings
  const people = ["Anchal", "Arjun", "Abirami", "Sivanesh", "Sophia", "sowmya"];

  // JS ends
  //JSX starts
  return (
    <div className="App">
      {/* {users.map((user) => 
      <Msg name={user.name} pic={user.pic}  />    
      )} */}

      {/* <h1>Hello {name} 🥳😀 </h1>
      <h1>Hello {name1} 🥳😀 </h1> */}
      {/* <Welcome name={people[0]} />
      <Welcome name={people[1]} />
      <Welcome name={people[2]} />
      <Welcome name={people[3]} /> */}

      {/* {people.map(personName =>  <Welcome name={personName} />  )} */}

      {/* <Msg
        name="Sowmya"
        pic="https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg"
      />
      <Msg
        name="Anchal"
        pic="http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/05/Profile-Picture-7.jpg"
      />
      <Msg
        name="Gokul"
        pic="https://i0.wp.com/mytechoffer.com/wp-content/uploads/2022/05/2e2fac9d4a392456e511345021592dd2.jpeg?resize=708%2C894&ssl=1"
      /> */}

      {/* <Welcome name="Arjun" age="26" />
      <Welcome name="Gokul" age="26" /> */}
      {/* <Counter />
      <Counter />
      <ColorBox/> */}
      {/* <AddColor/> */}

      {/* <BookList/> */}
      <nav>
        <ul>
          <li>
            {/* Link change page without refresh */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Books</Link>
          </li>
          <li>
            <Link to="/addcolor">Add Color</Link>
          </li>
          <li>
            <Link to="/user">User List</Link>
          </li>
          <li>
            <Link to="/somewhere">Somewhere</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookList />} />
        {/* dynamically matching route */}
        <Route path="/book/:bookid" element={<BookDetail />} />
        <Route path="/addcolor" element={<AddColor />} />
        <Route path="/user" element={<UserList />} />
      </Routes>
    </div>
  );
  //JSX Ends
}

function BookDetail() {
  const { bookid } = useParams();

  return <div>Movie detail page of {bookid}</div>;
}

function BookList() {

  // const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState(INITIAL_BOOK_LIST)
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("")
  const [summary, setSummary] = useState("")
  const [trailer, setTrailer] = useState("")


   const handleSubmit = () => {
    const newBook = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
    trailer: trailer,
  }
    // Copy the bookList and add newBook to it
    setBookList([...bookList, newBook ])
  }


  return (
    <div className="add-book-form">
      <input
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter a Name"
      />
      <input
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter a Poster"
      />
      <input
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter a Rating"
      />

      <input
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter a Summary"
      />
      <input
        onChange={(event) => setTrailer(event.target.value)}
        placeholder="Enter a Trailer"
      />
  <button onClick={handleSubmit} >Add Book</button>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
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
