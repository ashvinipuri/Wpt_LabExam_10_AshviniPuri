import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./components/Add";
import Show from "./components/show";
import Delete from "./components/Delete";

const projectroute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "addpage",
        element: <Add />,
      },
      {
        path: "showpage",
        element: <Show />,
      },
      {
        path: "deletepage",
        element: <Delete />,
      },
    ],
  },
]);

const result = ReactDOM.createRoot(document.getElementById("root"));
result.render(<RouterProvider router={projectroute} />);
