// hook

import { useState } from "react";

import "./App.css";

function App() {
  // => useState is a hook that allows us to manage the state of a component

  // let [count, setCount] = useState(5);

  // // let count = 5;

  // const addValue = () => {
  //   // count++;
  //   // => the count will be updated in the console but the UI will not be updated
  //   // console.log("clicked.. " + count);

  //   setCount(count++);
  // };

  // const decreaseValue = () => {
  //   setCount(count--);
  // };

  let [count, setCount] = useState(10);

  const increaseValue = () => {
    if (count <= 20) {
      setCount(count++);
    } else {
      alert("Unable to upgrade the counter..");
      setCount((count = 20));
    }
  };

  const decreaseValue = () => {
    if (count >= 0) {
      setCount(count--);
    } else {
      alert("Unable to decrease the counter..");
      setCount((count = 0));
    }
  };

  return (
    <>
      <h1>Lesson 2</h1>
      <h2>Counter Value: {count}</h2>

      <button id="increase-btn" onClick={increaseValue}>
        Increase value {count}
      </button>

      <br />

      <button id="decrease-btn" onClick={decreaseValue}>
        Decrease value {count}
      </button>

      <p>useState: {count}</p>
    </>
  );
}

export default App;
