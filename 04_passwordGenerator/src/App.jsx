import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {

  // variables
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [inputVal, setInputVal] = useState(" ");

  // useRef hook:

  
  const passwordRef = useRef(null);

  // useCallBack(): useCallBack is a react hook that lets to cacge a function definition between re-renders. useCallBack(fn, dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";

    if (charAllow) str += "!@#$%~_-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setInputVal(pass);
  }, [length, numberAllow, charAllow, setInputVal]);

  // passwordGenerator(); : error => too many re-renders

  // useEffect hook: useEffect hook is a React Hook that lets you synchronize a component with an external system. syntax [useEffect(setup, dependencies)]

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // this function select the value as per desired
    passwordRef.current?.setSelectionRange();
    // passwordRef.current?.setSelectionRange(0, 5);
    // in next.js their is no window object as it basically run as server-side rendering [so server object is their]
    window.navigator.clipboard.writeText(inputVal);
  }, [inputVal]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <div className="main items-center font-mono text-white w-screen h-screen bg-gray-500 flex justify-center">
      <div className="items-center content-center w-fit h-fit px-4 py-6 bg-rose-600 rounded-xl shadow-lg mt-4">
        <div className="flex justify-center items-center mb-4">
          <h3 className="inline-block text-center border-b-4 rounded-bl-sm rounded-br-sm border-rose-800">
            Password Generator{" "}
          </h3>
        </div>

        <div className="wrapper">
          <input
            type="text"
            className=" outline-none shadow-md px-2 py-1 rounded-tl-md rounded-bl-md text-blue-500 placeholder-gray-500"
            value={inputVal}
            placeholder="password"
            ref={passwordRef}
          />

          {/* concept of useRef hook: reference of anything */}
          <button
            className="copy font-bold bg-black shadow-md px-2 py-1 rounded-tr-md rounded-br-md opacity-90 text"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="wrapper mt-3">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer accent-black"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="" className="ml-2 mr-2">
            Length:{length}
          </label>
          <br />
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={() => {
              setNumberAllow((prev) => !prev);
            }}
            className="mr-1 accent-black"
          />
          <label htmlFor="numberInput" className="mr-2">
            Numbers
          </label>
          <br />
          <input
            type="checkbox"
            className="mr-1 accent-black "
            defaultChecked={charAllow}
            id="charInput"
            onChange={() => {
              setCharAllow((prev) => !prev);
              // console.log(charAllow);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
