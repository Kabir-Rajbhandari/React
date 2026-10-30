import React from "react";
import ReactDOM from "react-dom/client";
// import { jsx as _jsx} from "react/jsx-runtime";

// sub-components:

import App from "./App.jsx";
import MainApp from "./components/one.jsx";
import AboutPage from "./components/two.jsx";
import ShoppingList from "./components/three.jsx";

function MyApp() {
  return (
    <>
      <h4>Return from MyApp..</h4>
    </>
  );
}

// const ReactElement = {
//   // react does this work, behind the scene // --> custom React
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google..",
// };

const user = "Qwerty Uiop";

// pre-defined in the React.createElement
const ReactElement = React.createElement(
  // => by default it was injected by babel (transpiler)

  "a",
  {
    href: "https://www.github.com",
    target: "_blank",
  },
  "Click here > Github",
  user,
);

// => React itself does not have a native, built-in bundler. Instead React relies on external frontend build tools to compile, optimize, and package code (like JSX and modern JavaScript) into clean files that web browsers can easily read.

// => The specific bundler use depends entirely on the framework or build toolchain: [Vite (uses Rollup & Esbuld), Next.js (uses Turbopack & Webpack), create-react-app (uses webpack) ]

// Every React (fable, vet) use bundler:

const anotherELement = (
  <a href="https://www.google.com" target="_blank">
    Click Here to navigate to Google !
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // ReactElement
  <>
    {/* <MainApp /> */}
    {/* <AboutPage /> */}
    <ShoppingList />
  </>,
);
