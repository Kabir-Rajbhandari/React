import { useState } from "react";

function ChangeBackground() {
  // default value is set to " ";
  // => here " " is the initial state, when React initializes the component, it sees this useState(" ") and initializes the state with " ".

  const [color, setColor] = useState("lightgreen");

  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-xl shadow-md"
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-xl shadow-md"
            style={{
              backgroundColor: "green",
              color: "white",
            }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-xl shadow-md"
            style={{
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-4 rounded-xl shadow-md"
            style={{
              backgroundColor: "skyblue",
              color: "white",
            }}
          >
            Sky Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 rounded-xl shadow-md"
            style={{
              backgroundColor: "purple",
              color: "white",
            }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 rounded-xl shadow-md"
            style={{
              backgroundColor: "violet",
              color: "white",
            }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-xl shadow-md"
            style={{
              backgroundColor: "orange",
              color: "white",
            }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeBackground;
