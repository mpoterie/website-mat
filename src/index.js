import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./fonts/Inknut_Antiqua/InknutAntiqua-Regular.ttf";
import Work from "./Pages/Work";
import About from "./Pages/About";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

import Dance from "./Pages/Work/Dance";
import Music from "./Pages/Work/Music";
import Picture from "./Pages/Work/Picture";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/dance",
        element: <Dance />,
      },
      {
        path: "/picture",
        element: <Picture />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
