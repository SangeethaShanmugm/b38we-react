import './App.css';
import { useState } from "react";


function App() {
   //JS starts
  //  const name = "Anchal";
  //  const name1 = "Arjun";

 //Array of strings
   const people = ["Anchal", "Arjun", "Abirami", "Sivanesh", "Sophia","sowmya"]

// Array of objects
   const users = [
    {
      name: "Sowmya",
      pic: "https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg",
    },
    {
      name:"Anchal",
      pic:"http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/05/Profile-Picture-7.jpg",
    },
    {
      name:"Gokul",
      pic:"https://i0.wp.com/mytechoffer.com/wp-content/uploads/2022/05/2e2fac9d4a392456e511345021592dd2.jpeg?resize=708%2C894&ssl=1",
    },
    {
      name:"Abirami",
      pic:"https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }
   ]
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
      <Counter />
    </div>
  );
  //JSX Ends
}

// Custom components
// 1. First letter must be captial
// 2. It returns JSX elements
// Components - declaration


function Counter() {
  // let like = 10;
  const [like, setLike ] = useState(0);
  return (
    <div>
    {/* onClick - camelcase */}
    <button onClick={() => { setLike(like + 1); }} >
    Like {like}</button>    
    </div>
  )
}

//hook - react to listen the eventlistener
//useState - [1st ->state, 2nd-> setState]
//const [state, setState] = useState(InitialValue)
//const [like, setLike ] = useState(0)
//state of art technology, state of mind - meaning


function Msg({ name, pic }) {
  return (
    <div>
      <img className="profile-pic" src={pic} alt={name + "Be Happy"} />
      <h1>Hey {name}</h1>
    </div>
  );
}

function Welcome({ name }) {
  // console.log(props);
  // const name2 = "Gokul";
  return (
    <div>
      <h1>
        Hello {name} 🥳😀
      </h1>
      {/* <h1>Hello {name} 🥳😀 </h1>
      <h1>Hello {name1} 🥳😀 </h1> */}
    </div>
  );
}

//JSX ->  Javascript XML / extended
//WebPack + Babel ->
//JSX -> converted to Javascript
// className ->
//class -> reserved keyword in js
// {} -> template Syntax
// props -> (like arguments in function)

//Task - Display profile pic and name
// pass multiple props



export default App;
