import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Routing from "./Routing.jsx";
import User from "./components/User/User.jsx";
import GitHub, { gitHubInfoLoader } from "./components/GitHub/GitHub.jsx";

// => 1st approach
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Route />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact-us",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

// => 2nd approach
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Routing />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="user/:userId" element={<User />}></Route>
      <Route
        // loader={() => {
        //   // fetch() => can be allowed but

        // }}
        loader={gitHubInfoLoader}
        path="github"
        element={<GitHub />}
      />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
