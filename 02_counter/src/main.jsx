import { StrictMode } from "react";
import { ReactDOM } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// .createRoot => behind the scene creates a DOM like structure, which basically compare the main DOM and own DOM and updates the changes UI only (whereas the browser remove the whole DOM and re-render the whole DOM => page reload)

// => React fiber: React Fiber is an implementation of React's core algorithm. The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

// the primary goal of the fiber:
// -> pause work and come back to it later.
// -> assign priority to different types of work.
// -> reuse previously completed work.
// -> abort work if it's no longer needed.

// Reconciliation: The algorithm React uses to differentiate one tree with another (browser and react) to determine which parts to be changed.
